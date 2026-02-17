import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://nayanatoursandtravels.com';
  const pages = ['/', '/fleet', '/routes', '/booking', '/contact', '/corporate', '/terms', '/privacy', '/about', '/faq'];

  return pages.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.8
  }));
}
