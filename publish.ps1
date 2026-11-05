$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $PSScriptRoot
if (-not (Get-Command git -ErrorAction SilentlyContinue)) { throw 'Install Git for Windows first.' }
if (-not (Test-Path -LiteralPath (Join-Path $PSScriptRoot '.git'))) { git init -b main }
if (-not (git config user.name)) { git config user.name 'Grouping-Go repository import' }
if (-not (git config user.email)) { git config user.email '233072147+yunfanliu0410-ai@users.noreply.github.com' }
if (-not (git remote)) { git remote add origin 'https://github.com/yunfanliu0410-ai/Grouping-Go.git' }
git add --all
git diff --cached --quiet
if ($LASTEXITCODE -eq 1) { git commit -m 'Import offline prototype and public-safe coursework evidence hub' }
git push -u origin main
if ($LASTEXITCODE -ne 0) { throw 'Push failed. Check GitHub authentication and remote changes; no force push was attempted.' }
