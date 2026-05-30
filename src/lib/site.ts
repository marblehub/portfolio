export const siteBasePath = process.env.GITHUB_ACTIONS === "true" ? "/portfolio" : "";

export function assetPath(path: `/${string}`) {
  return `${siteBasePath}${path}`;
}
