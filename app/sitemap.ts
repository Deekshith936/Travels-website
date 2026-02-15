import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://nayanatours.in';
  const pages = ['', '/book', '/about', '/faq', '/corporate', '/safety', '/blog'];
  return pages.map((p) => ({ url: `${base}${p}`, lastModified: new Date() }));
}
