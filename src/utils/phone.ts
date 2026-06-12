import { business } from '../data/landingPageData.ts';

export function normalizePhone(input: string): string {
  return input.replace(/\D/g, '');
}

export function isValidIsraeliPhone(input: string): boolean {
  const digits = normalizePhone(input);

  if (digits.length === 10 && digits.startsWith('05')) {
    return true;
  }

  if (digits.length === 9 && /^0[23489]/.test(digits)) {
    return true;
  }

  if (digits.length === 10 && digits.startsWith('07')) {
    return true;
  }

  return false;
}

export function buildTelLink(phone: string = business.phone): string {
  const digits = normalizePhone(phone);
  return digits ? `tel:${digits}` : `tel:${business.phone}`;
}
