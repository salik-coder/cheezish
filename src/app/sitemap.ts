import type { MetadataRoute } from 'next';
import { siteUrl } from '@/src/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return siteUrl ? ['', '/menu', '/about', '/gallery', '/contact'].map(path => ({ url: `${siteUrl}${path}` })) : [];
}
