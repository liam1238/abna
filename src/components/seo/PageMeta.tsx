import { Helmet } from 'react-helmet-async';
import { seo } from '../../data/landingPageData.ts';
import { getCanonicalUrl, getOgImageUrl } from './seoHelpers.ts';

export function PageMeta() {
  const canonicalUrl = getCanonicalUrl();
  const ogImageUrl = getOgImageUrl();

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="robots" content="index, follow" />

      {canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="he_IL" />
      {ogImageUrl ? <meta property="og:image" content={ogImageUrl} /> : null}
      {canonicalUrl ? <meta property="og:url" content={canonicalUrl} /> : null}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      {ogImageUrl ? <meta name="twitter:image" content={ogImageUrl} /> : null}
    </Helmet>
  );
}
