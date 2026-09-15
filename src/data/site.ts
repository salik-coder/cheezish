import type { Metadata } from 'next';

// Set the real deployment origin at build time; no invented public domain.
const configuredUrl = process.env.SITE_URL;
export const siteUrl = configuredUrl ? new URL(configuredUrl).origin : undefined;

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    ...(siteUrl ? { alternates: { canonical: `${siteUrl}${path}` } } : {}),
    openGraph: {
      title, description, siteName: 'Cheezish', type: 'website', locale: 'en_GB',
      ...(siteUrl ? { url: `${siteUrl}${path}`, images: [{ url: `${siteUrl}/images/menu/the-cheezish.jpg`, alt: 'The Cheezish signature burger' }] } : {}),
    },
    twitter: { card: 'summary_large_image', title, description, ...(siteUrl ? { images: [`${siteUrl}/images/menu/the-cheezish.jpg`] } : {}) },
  };
}
