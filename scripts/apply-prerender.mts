import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const indexPath = path.join(distDir, 'index.html');

type HeadElement =
  | string
  | {
      type: string;
      props?: Record<string, string | undefined | null>;
      children?: string;
    };

function isHeadElement(value: unknown): value is HeadElement {
  if (typeof value === 'string') return true;

  if (
    typeof value === 'object' &&
    value !== null &&
    'type' in value &&
    typeof (value as { type?: unknown }).type === 'string'
  ) {
    return true;
  }

  return false;
}

function encodeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function serializeHeadElement(element: HeadElement): string {
  if (typeof element === 'string') return element;
  if (element == null) return '';

  const type = element.type;
  let markup = `<${type}`;
  const props = element.props ?? {};
  let children = element.children;

  for (const [prop, value] of Object.entries(props)) {
    if (value == null) continue;
    if (prop === 'children' || prop === 'textContent') {
      children = value;
      continue;
    }
    markup += ` ${prop}="${encodeHtml(value)}"`;
  }

  markup += '>';

  if (!/link|meta|base/.test(type)) {
    if (children) markup += children;
    markup += `</${type}>`;
  }

  return markup;
}

async function main() {
  const { prerender } = await import(path.join(rootDir, 'dist-ssr/prerender.js'));
  const template = await fs.readFile(indexPath, 'utf-8');
  const result = await prerender();

  if (!result || typeof result !== 'object' || typeof result.html !== 'string') {
    throw new Error('Prerender did not return HTML content.');
  }

  const head = result.head ?? { lang: 'he', title: '', elements: new Set<string>() };
  let html = template;

  if (head.title) {
    html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${encodeHtml(head.title)}</title>`);
  }

  if (head.lang) {
    html = html.replace(/<html([^>]*)lang="[^"]*"/, `<html$1lang="${encodeHtml(head.lang)}"`);
  }

  const headFragments = Array.from(head.elements ?? [])
    .filter(isHeadElement)
    .map(serializeHeadElement)
    .join('\n');

  if (headFragments) {
    html = html.replace('</head>', `${headFragments}\n</head>`);
  }

  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${result.html}</div>`,
  );

  await fs.writeFile(indexPath, html, 'utf-8');
  console.log(`Prerendered / into ${indexPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
