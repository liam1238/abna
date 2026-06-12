import { Helmet } from 'react-helmet-async';
import { business, faq, schema, seo } from '../../data/landingPageData.ts';
import {
  getCanonicalUrl,
  getOgImageUrl,
  getValidSameAs,
  isPlaceholderUrl,
  resolveAbsoluteUrl,
} from './seoHelpers.ts';

function isRealGoogleMapsUrl(url: string): boolean {
  return !isPlaceholderUrl(url) && /google\.(com|[a-z]{2,3})\/maps/i.test(url);
}

function buildLocalBusinessSchema() {
  const canonicalUrl = getCanonicalUrl();
  const imageUrl = getOgImageUrl() ?? resolveAbsoluteUrl(seo.ogImage, canonicalUrl);
  const sameAs = getValidSameAs(schema.sameAs);

  const localBusiness: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: business.name,
    telephone: business.phoneDisplay || business.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'ירושלים',
      addressCountry: 'IL',
    },
    areaServed: schema.areaServed.map((area) => ({
      '@type': area.type,
      name: area.name,
    })),
  };

  if (canonicalUrl) {
    localBusiness.url = canonicalUrl;
  }

  if (imageUrl) {
    localBusiness.image = imageUrl;
  }

  if (sameAs.length > 0) {
    localBusiness.sameAs = sameAs;
  }

  if (business.googleMapsUrl && isRealGoogleMapsUrl(business.googleMapsUrl)) {
    localBusiness.hasMap = business.googleMapsUrl;
  }

  return localBusiness;
}

function buildFaqSchema() {
  if (!faq.length) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function JsonLd() {
  const localBusinessSchema = buildLocalBusinessSchema();
  const faqSchema = buildFaqSchema();

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      {faqSchema ? (
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      ) : null}
    </Helmet>
  );
}
