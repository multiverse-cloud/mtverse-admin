import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/auth/', '/api/', '/settings/', '/profile/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin/', '/auth/', '/api/'],
        crawlDelay: 0,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/admin/', '/auth/', '/api/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Slurp',
        allow: '/',
        disallow: ['/admin/', '/auth/', '/api/'],
        crawlDelay: 2,
      },
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
        disallow: ['/admin/', '/auth/', '/api/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Baiduspider',
        allow: '/',
        disallow: ['/admin/', '/auth/', '/api/'],
        crawlDelay: 2,
      },
      {
        userAgent: 'YandexBot',
        allow: '/',
        disallow: ['/admin/', '/auth/', '/api/'],
        crawlDelay: 2,
      },
    ],
    sitemap: 'https://mtverseadmin.com/sitemap.xml',
    host: 'https://mtverseadmin.com',
  };
}
