import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://cased-bf.com';
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/expertise`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/approche`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/a-propos`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/consultation`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/siieres-2026`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${base}/mentions-legales`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
