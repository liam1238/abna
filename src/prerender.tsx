import { renderToString } from 'react-dom/server';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { HelmetProvider } from 'react-helmet-async';
import type { HelmetServerState } from 'react-helmet-async';
import App from './App.tsx';
import { seo } from './data/landingPageData.ts';
import { theme } from './theme/theme.ts';
import './index.css';

const HEAD_TAG_PATTERNS = [
  /<title\b[^>]*>[\s\S]*?<\/title>/gi,
  /<meta\b[^>]*\/?>/gi,
  /<link\b[^>]*\/?>/gi,
  /<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi,
] as const;

function extractHeadTagsFromBody(html: string): { bodyHtml: string; headTags: string[] } {
  const headTags: string[] = [];
  let bodyHtml = html;

  for (const pattern of HEAD_TAG_PATTERNS) {
    const matches = bodyHtml.match(pattern) ?? [];
    headTags.push(...matches);
    bodyHtml = bodyHtml.replace(pattern, '');
  }

  return { bodyHtml, headTags };
}

export async function prerender() {
  const cache = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });
  const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache);
  const helmetContext: { helmet?: HelmetServerState } = {};

  const rendered = renderToString(
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <HelmetProvider context={helmetContext}>
          <CssBaseline />
          <App />
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>,
  );

  const { bodyHtml, headTags } = extractHeadTagsFromBody(rendered);
  const emotionStyleTags = constructStyleTagsFromChunks(extractCriticalToChunks(bodyHtml));
  const helmet = helmetContext.helmet;
  const headElements = new Set<string>();

  headElements.add(emotionStyleTags);

  for (const tag of headTags) {
    headElements.add(tag);
  }

  if (helmet) {
    for (const key of ['meta', 'link', 'script'] as const) {
      const fragment = helmet[key]?.toString();
      if (fragment) {
        headElements.add(fragment);
      }
    }
  }

  return {
    html: bodyHtml,
    head: {
      lang: 'he',
      title: seo.title,
      elements: headElements,
    },
  };
}
