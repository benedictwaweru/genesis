param (
  [Parameter(Mandatory = $true)]
	[ValidateRange(1, 65535)]
	[int]$port
)

# Get all lines for the port
$lines = netstat -aon | findstr ":$port" | Select-String "LISTENING"

if ($lines) {
	# Extract PIDs
	$pIds = $lines | ForEach-Object { ($_ -split '\s+')[-1] } | Select-Object -Unique

	foreach ($processId in $pIds) {
    $proc = Get-Process -Id $processId -ErrorAction SilentlyContinue

    if ($null -ne $proc) {
      Write-Host "Killing process on port $port (PID: $processId, Name: $($proc.ProcessName))"
      Stop-Process -Id $processId -Force
    } else {
      Write-Host "Process with PID $processId not found"
    }
  }
} else {
	Write-Host "Port $port is free"
}
