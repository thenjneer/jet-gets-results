# PowerShell script to generate photo and video URLs array for script.js
# Run this after adding photos/videos to the photos folder

Write-Host "Scanning photos folder..." -ForegroundColor Green

$mediaFiles = Get-ChildItem -Path "photos" -Include *.jpg,*.jpeg,*.png,*.gif,*.webp,*.mp4,*.mov,*.avi,*.webm,*.mkv,*.m4v -Recurse | Sort-Object Name

if ($mediaFiles.Count -eq 0) {
    Write-Host "No photos or videos found in the photos folder!" -ForegroundColor Yellow
    Write-Host "Please add your photos/videos to the 'photos' folder and run this script again." -ForegroundColor Yellow
    exit
}

Write-Host "Found $($mediaFiles.Count) files (photos and videos)!" -ForegroundColor Green
Write-Host ""
Write-Host "Copy and paste this into script.js (around line 41):" -ForegroundColor Cyan
Write-Host ""
Write-Host "const photoUrls = [" -ForegroundColor White

foreach ($file in $mediaFiles) {
    $relativePath = "photos/" + $file.Name
    Write-Host "    '$relativePath'," -ForegroundColor White
}

Write-Host "];" -ForegroundColor White
Write-Host ""
Write-Host "Done! Copy the above code into script.js" -ForegroundColor Green
