import { business } from '../data/landingPageData.ts';

const WHATSAPP_BASE_URL = 'https://wa.me';

export function buildWhatsAppUrl(message?: string): string {
  const url = new URL(`${WHATSAPP_BASE_URL}/${business.whatsappNumber}`);

  if (message?.trim()) {
    url.searchParams.set('text', message.trim());
  }

  return url.toString();
}
