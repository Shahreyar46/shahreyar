import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { developer } from '@/data/developer';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article';
}

export function SEOHead({
  title,
  description,
  image,
  type = 'website',
}: SEOHeadProps) {
  const location = useLocation();

  const fullTitle = title
    ? `${title} | ${developer.name}`
    : `${developer.name} — ${developer.role}`;

  const fullDescription = description || developer.intro;
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const fullUrl = `${baseUrl}${location.pathname}`;
  const ogImage = image || `${baseUrl}/og-image.jpg`;

  useEffect(() => {
    document.title = fullTitle;

    const upsert = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    upsert('description', fullDescription);
    upsert('og:title', fullTitle, true);
    upsert('og:description', fullDescription, true);
    upsert('og:type', type, true);
    upsert('og:url', fullUrl, true);
    upsert('og:image', ogImage, true);
    upsert('og:site_name', developer.name, true);
    upsert('twitter:card', 'summary_large_image');
    upsert('twitter:title', fullTitle);
    upsert('twitter:description', fullDescription);
    upsert('twitter:image', ogImage);
    upsert('author', developer.name);
    upsert(
      'keywords',
      'WordPress developer, WooCommerce, plugin developer, PHP, React, Vue, SaaS, Md. Al-Shahreyar, Senior Software Engineer'
    );

    // canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);
  }, [fullTitle, fullDescription, fullUrl, ogImage, type]);

  return null;
}
