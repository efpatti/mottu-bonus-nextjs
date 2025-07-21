/**
 * Helper function to get the correct asset path considering the basePath
 * in production environments (like GitHub Pages deployment).
 */
export const getAssetPath = (path: string): string => {
 // Remove leading slash if present
 const cleanPath = path.startsWith("/") ? path.slice(1) : path;

 // In production with basePath, prefix the path
 if (
  process.env.NODE_ENV === "production" &&
  process.env.NEXT_PUBLIC_BASE_PATH
 ) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH}/${cleanPath}`;
 }

 // In development or without basePath, return with leading slash
 return `/${cleanPath}`;
};
