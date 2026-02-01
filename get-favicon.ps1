[Net.ServicePointManager]::SecurityProtocol = 'Tls12'
$html = (Invoke-WebRequest -Uri 'https://www.clearancegiant.com/' -UseBasicParsing).Content

# Find favicon/icon in head section
$faviconMatches = [regex]::Matches($html, '<link[^>]*(?:rel=["'']?(?:icon|shortcut icon|apple-touch-icon)["'']?)[^>]*href=["'']([^"'']*?)["'']')
Write-Host "Favicon/Icon Links:"
foreach($match in $faviconMatches) {
    Write-Host $match.Groups[1].Value
}

# Find meta og:image
$ogImageMatches = [regex]::Matches($html, '<meta[^>]*property=["'']og:image["''][^>]*content=["'']([^"'']*?)["'']')
Write-Host "`nOG Image:"
foreach($match in $ogImageMatches) {
    Write-Host $match.Groups[1].Value
}

# Find the logo specifically by searching for "logo" text in img tags
$logoMatches = [regex]::Matches($html, '<img[^>]*alt=["'']([^"'']*logo[^"'']*?)["''][^>]*src=["'']([^"'']*?)["'']|<img[^>]*src=["'']([^"'']*?)["''][^>]*alt=["'']([^"'']*logo[^"'']*?)["'']', 'IgnoreCase')
Write-Host "`nLogo Images:"
foreach($match in $logoMatches) {
    for($i = 1; $i -lt $match.Groups.Count; $i++) {
        if($match.Groups[$i].Value) {
            Write-Host $match.Groups[$i].Value
        }
    }
}
