# ============================================================
# Sync de la base de connaissance Gilles
# Copie datatxt/ -> extension/ (clé + doc), puis bundle les fichiers
# de doc (datatxt/ressources.md/**.md) dans extension/knowledge/ et
# génère extension/knowledge-index.json (UTF-8 sans BOM).
# Lance après chaque modif de la doc :  .\sync-knowledge.ps1
# ============================================================

$root = $PSScriptRoot
$srcDir = Join-Path $root 'datatxt'
$extDir = Join-Path $root 'extension'

# 1) Fichiers simples (clé + seed)
foreach ($f in @('artis.txt', 'apigemini.txt')) {
    $from = Join-Path $srcDir $f
    if (Test-Path $from) {
        Copy-Item -LiteralPath $from -Destination (Join-Path $extDir $f) -Force
        Write-Host "[OK] $f -> extension/" -ForegroundColor Green
    }
}

# 2) Base de connaissance : datatxt/ressources.md/ (dossier de .md) -> extension/knowledge/
$kbSrc = Join-Path $srcDir 'ressources.md'
$kbDst = Join-Path $extDir 'knowledge'
if (Test-Path $kbSrc) {
    if (Test-Path $kbDst) { Remove-Item -LiteralPath $kbDst -Recurse -Force }
    New-Item -ItemType Directory -Path $kbDst -Force | Out-Null

    $files = Get-ChildItem -LiteralPath $kbSrc -Recurse -File -Filter *.md
    $index = New-Object System.Collections.ArrayList
    foreach ($f in $files) {
        $rel = ($f.FullName.Substring((Resolve-Path $kbSrc).Path.Length).TrimStart('\') -replace '\\','/')
        $target = Join-Path $kbDst $rel
        $tdir = Split-Path $target -Parent
        if (-not (Test-Path $tdir)) { New-Item -ItemType Directory -Path $tdir -Force | Out-Null }
        Copy-Item -LiteralPath $f.FullName -Destination $target -Force

        $content = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8)
        if (-not $content) { $content = '' }
        $title = (($content -split "`n") | Where-Object { $_ -match '\S' } | Select-Object -First 1)
        $snip = $content.Substring(0, [Math]::Min(400, $content.Length))
        $key = (($rel + ' ' + $title + ' ' + $snip) -replace '\s+',' ').ToLower()
        [void]$index.Add([pscustomobject]@{ f = $rel; t = "$title".Trim(); k = $key })
    }
    $json = ($index | ConvertTo-Json -Compress)
    $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText((Join-Path $extDir 'knowledge-index.json'), $json, $utf8NoBom)
    Write-Host "[OK] knowledge/ : $($files.Count) fichiers + index" -ForegroundColor Green
} else {
    Write-Host "[--] datatxt/ressources.md absent" -ForegroundColor DarkGray
}

Write-Host ""
Write-Host "Termine. Recharge l'extension dans chrome://extensions." -ForegroundColor Cyan
