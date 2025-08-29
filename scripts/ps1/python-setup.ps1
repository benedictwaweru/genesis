param (
  [Parameter(Mandatory = $true)]
  [ValidateNotNullOrEmpty()]
  [string]$App
)

switch ($App) {
  "trading" { $App = ".\services\server\trading" }
  Default {
    Write-Error "App doesn't exist"
    exit 1
  }
}

$VenvDir = "$App\.venv"
$Requirements = "$App\requirements.txt"

Write-Host "=== Setting up Python Virtual Environment in $App ==="

if (-not (Get-Command python -ErrorAction SilentlyContinue)) {
  Write-Error "Python is not installed or not in PATH."
  exit 1
}

if (-not (Test-Path $VenvDir)) {
  Write-Host "Creating virtual environment in $VenvDir ..."
  python -m venv $VenvDir
} else {
  Write-Host "Virtual environment already exists in $VenvDir"
}

Write-Host "Activating virtual environment..."
& "$VenvDir\Scripts\Activate.ps1"

if (Test-Path $Requirements) {
  Write-Host "Installing dependencies from $Requirements ..."
  #. "$VenvDir\Scripts\python.exe" -m pip install --upgrade pip
  Set-Location $App
  . "$VenvDir\Scripts\python.exe" -m pip install -r $Requirements
} else {
  Write-Warning "No $Requirements file found. Skipping dependency installation."
}

Write-Host "✅ Setup complete!"
