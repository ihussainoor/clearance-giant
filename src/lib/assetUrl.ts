/**
 * Get the public asset URL with proper base path handling
 * Works in both development and production (GitHub Pages)
 */
export const getAssetUrl = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production on GitHub Pages, import.meta.env.BASE_URL will be '/clearance-giant/'
  // In development, it will be '/'
  const baseUrl = import.meta.env.BASE_URL;
  
  return `${baseUrl}${cleanPath}`;
};
