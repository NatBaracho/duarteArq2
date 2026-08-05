# Execute this script from the workspace root to copy local assets into the React app public folder
$src = "c:\Users\natan\Documents\pastateste\duartearq\Assents"
$dst = "c:\Users\natan\Documents\pastateste\duarteReact\public\Assents"

if (-not (Test-Path $src)) {
  Write-Host "Origem não encontrada: $src"
  exit 1
}

if (-not (Test-Path $dst)) {
  New-Item -ItemType Directory -Path $dst | Out-Null
}

Copy-Item -Path (Join-Path $src '*') -Destination $dst -Recurse -Force
Write-Host "Arquivos copiados para $dst"
