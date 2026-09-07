export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");

export function assetPath(path: string) {
  return `${basePath}${path}`;
}
