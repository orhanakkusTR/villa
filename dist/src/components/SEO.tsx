import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  image?: string;
}

const DEFAULT_IMAGE = 'https://villaskeppsbron.se/Adsiz_tasarim.png';

export default function SEO({ title, description, canonical, type = 'website', image = DEFAULT_IMAGE }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

    const ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) {
      ogType.setAttribute('content', type);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', image);
    }

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }

    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', image);
    }

    if (canonical) {
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', canonical);
      }

      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) {
        ogUrl.setAttribute('content', canonical);
      }
    }
  }, [title, description, canonical, type, image]);

  return null;
}
