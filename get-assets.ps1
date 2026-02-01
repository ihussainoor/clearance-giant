[Net.ServicePointManager]::SecurityProtocol = 'Tls12'
$html = (Invoke-WebRequest -Uri 'https://www.clearancegiant.com/' -UseBasicParsing).Content

# Find all image/logo URLs
$imageMatches = [regex]::Matches($html, 'src="([^"]*(?:logo|icon|favicon|image)[^"]*?)"')
Write-Host "Image URLs found:"
foreach($match in $imageMatches) {
    Write-Host $match.Groups[1].Value
}

Write-Host "`nAll image sources:"
$allImages = [regex]::Matches($html, 'src="([^"]+)"')
foreach($match in $allImages | Select-Object -First 20) {
    $url = $match.Groups[1].Value
    if ($url -match '\.(png|jpg|jpeg|gif|svg|ico)' -or $url -match 'logo|icon|favicon') {
        Write-Host $url
    }
}
