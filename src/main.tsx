import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { HelmetProvider } from 'react-helmet-async';
import '@fontsource/heebo/400.css';
import '@fontsource/heebo/500.css';
import '@fontsource/heebo/700.css';
import './index.css';
import App from './App.tsx';
import { initAccessibility } from './config/accessibility.ts';
import { theme } from './theme/theme.ts';
import { rtlCache } from './theme/rtlCache.ts';

document.documentElement.lang = 'he';
document.documentElement.dir = 'rtl';

const rootElement = document.getElementById('root')!;
const app = (
  <StrictMode>
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <CssBaseline />
          <App />
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  </StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}

initAccessibility();
