# -*- coding: utf-8 -*-
import os, re, unicodedata
from pypdf import PdfReader

PDF = "documentation.pdf"
OUT = "ressources.md"
r = PdfReader(PDF)
NP = len(r.pages)

# --- collect outline as flat list with level + page ---
items = []
def walk(o, d=0):
    for i in o:
        if isinstance(i, list):
            walk(i, d+1)
        else:
            try:
                pg = r.get_destination_page_number(i)
            except Exception:
                pg = None
            items.append((d, i.title.strip(), pg))
walk(r.outline)

# fix missing pages with previous
for k in range(len(items)):
    if items[k][2] is None:
        items[k] = (items[k][0], items[k][1], items[k-1][2] if k else 0)

def slug(s):
    s = unicodedata.normalize('NFKD', s).encode('ascii','ignore').decode()
    s = re.sub(r'[^\w\s-]', '', s).strip().lower()
    s = re.sub(r'[\s_-]+', '-', s)
    return s[:60] or "section"

# strip running header/footer lines
def clean(txt):
    lines = txt.split('\n')
    keep = []
    for ln in lines:
        s = ln.strip()
        if re.match(r'^Documentation\s+ARTIS\.net', s): continue
        if re.match(r'^\d+\s*/\s*832$', s): continue
        keep.append(ln.rstrip())
    out = '\n'.join(keep)
    out = re.sub(r'\n{3,}', '\n\n', out).strip()
    return out

# --- determine split units: each level-1 section (child of top-level). ---
# top-level = level 0. We create folder per level0, file per level1.
# build ranges: a node spans from its page to the page of the next node at same-or-shallower level.

n = len(items)
def end_page(idx):
    lvl = items[idx][0]
    for j in range(idx+1, n):
        if items[j][0] <= lvl:
            return items[j][2]
    return NP

# gather headings within a page range for context
def headings_in(start, end, exclude_idx):
    hs = []
    for j in range(n):
        d,t,p = items[j]
        if p is None: continue
        if start <= p < end and j != exclude_idx:
            hs.append((d,t,p))
    return hs

def extract_range(start, end):
    parts=[]
    for p in range(start, min(end,NP)):
        try:
            parts.append(r.pages[p].extract_text() or "")
        except Exception:
            parts.append("")
    return clean('\n'.join(parts))

os.makedirs(OUT, exist_ok=True)
index_lines = ["# Documentation ARTIS.net — Index ressources\n",
               "Doc decoupee par categorie pour consommation IA (Gemini). 1 fichier = 1 sous-section.\n"]

count=0
for idx,(lvl,title,pg) in enumerate(items):
    if lvl != 0:
        continue
    cat = title
    catslug = slug(cat)
    catdir = os.path.join(OUT, catslug)
    os.makedirs(catdir, exist_ok=True)
    cat_end = end_page(idx)
    index_lines.append(f"\n## {cat}\n")
    # level-1 children
    children = [(j,items[j]) for j in range(idx+1,n) if items[j][0]==1 and items[j][2] is not None and items[j][2] < cat_end and (j==idx+1 or all(items[k][0]>=1 for k in range(idx+1,j+1)) )]
    # simpler: direct level1 between idx and cat_end, stopping at next level0
    children=[]
    for j in range(idx+1,n):
        if items[j][0]==0: break
        if items[j][0]==1: children.append(j)
    if not children:
        # whole category one file
        body = extract_range(pg, cat_end)
        fn = os.path.join(catdir, "00-"+catslug+".md")
        with open(fn,'w',encoding='utf-8') as f:
            f.write(f"# {cat}\n\n_Pages {pg+1}-{cat_end} de la doc ARTIS.net_\n\n{body}\n")
        index_lines.append(f"- [{cat}]({catslug}/00-{catslug}.md)\n")
        count+=1
        continue
    for ci,j in enumerate(children,1):
        cl,ct,cp = items[j]
        ce = end_page(j)
        body = extract_range(cp, ce)
        sub = headings_in(cp, ce, j)
        toc = ""
        if sub:
            toc = "## Sous-rubriques\n" + "".join(f"- {'  '*(d-2 if d>=2 else 0)}{t} (p.{p+1})\n" for d,t,p in sub) + "\n"
        fn = os.path.join(catdir, f"{ci:02d}-{slug(ct)}.md")
        with open(fn,'w',encoding='utf-8') as f:
            f.write(f"# {ct}\n\n> Categorie: {cat} | Pages {cp+1}-{ce}\n\n{toc}{body}\n")
        index_lines.append(f"- [{ct}]({catslug}/{ci:02d}-{slug(ct)}.md)\n")
        count+=1

with open(os.path.join(OUT,"INDEX.md"),'w',encoding='utf-8') as f:
    f.writelines(index_lines)

print("files written:", count)
print("categories:", sum(1 for i in items if i[0]==0))
