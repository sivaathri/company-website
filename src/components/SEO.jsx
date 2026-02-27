import { useEffect } from 'react';

/**
 * SEO Component — Dynamically updates <head> meta tags
 * Compatible with React 19 (no react-helmet dependency needed)
 *
 * Usage:
 *  <SEO
 *    title="Web Development Company in Pondicherry | Pondy IT Solutions"
 *    description="Top IT company in Pondicherry..."
 *    canonical="https://pondyitsolutions.com/services/web-development"
 *  />
 */
const SEO = ({
  title = 'Pondy IT Solutions | Web & App Development Company in Pondicherry',
  description = 'Top-rated IT company in Pondicherry offering Web Development, Mobile App, ERP, CRM & E-Commerce solutions. 50+ clients. Get a free quote today!',
  canonical = 'https://pondyitsolutions.com/',
  ogImage = 'https://pondyitsolutions.com/og-image.jpg',
  ogType = 'website',
  keywords = 'web development company in Pondicherry, mobile app development Pondicherry, ERP software Pondicherry, best IT company Pondy, software company Pondicherry',
  noIndex = false,
}) => {
  useEffect(() => {
    // ── Title ──
    document.title = title;

    // ── Helper to set/create meta tags ──
    const setMeta = (selector, attribute, value) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const [attr, val] = selector.replace('meta[', '').replace(']', '').split('=');
        el.setAttribute(attr.trim(), val.replace(/"/g, '').trim());
        document.head.appendChild(el);
      }
      el.setAttribute(attribute, value);
    };

    // ── Helper to set/create link tags ──
    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // ── Primary meta ──
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[name="keywords"]', 'content', keywords);
    setMeta('meta[name="robots"]', 'content', noIndex ? 'noindex, nofollow' : 'index, follow');

    // ── Canonical ──
    setLink('canonical', canonical);

    // ── Open Graph ──
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', canonical);
    setMeta('meta[property="og:image"]', 'content', ogImage);
    setMeta('meta[property="og:type"]', 'content', ogType);

    // ── Twitter Card ──
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]', 'content', ogImage);
  }, [title, description, canonical, ogImage, ogType, keywords, noIndex]);

  return null;
};

export default SEO;
