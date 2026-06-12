import { business, seo } from '../../data/landingPageData.ts';

export function isPlaceholderUrl(url: string): boolean {
  return /example\.com|placeholder/i.test(url);
}

export function resolveAbsoluteUrl(path: string, baseUrl?: string): string | undefined {
  if (!path) return undefined;
  if (/^https?:\/\//i.test(path)) return path;
  if (!baseUrl) return undefined;

  try {
    return new URL(path, baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`).href;
  } catch {
    return undefined;
  }
}

export function getValidSameAs(urls: readonly string[]): string[] {
  return urls.filter((url) => url.trim() !== '' && !isPlaceholderUrl(url));
}

export function getCanonicalUrl(): string | undefined {
  const url = business.canonicalUrl?.trim();
  return url || undefined;
}

export function getOgImageUrl(): string | undefined {
  return resolveAbsoluteUrl(seo.ogImage, getCanonicalUrl());
}
