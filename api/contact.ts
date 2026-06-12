import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { business } from '../src/data/landingPageData.ts';
import { isValidIsraeliPhone } from '../src/utils/phone.ts';

interface ContactRequestBody {
  fullName?: string;
  phone?: string;
  message?: string;
  website?: string;
}

function jsonResponse(
  res: VercelResponse,
  status: number,
  body: { ok: boolean; message?: string },
): VercelResponse {
  return res.status(status).json(body);
}

function getEnvVar(name: string): string | undefined {
  const value = process.env[name];
  return value?.trim() || undefined;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
): Promise<VercelResponse> {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return jsonResponse(res, 405, { ok: false, message: 'Method not allowed' });
  }

  const body = (req.body ?? {}) as ContactRequestBody;
  const fullName = typeof body.fullName === 'string' ? body.fullName.trim() : '';
  const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';
  const website = typeof body.website === 'string' ? body.website.trim() : '';

  if (website) {
    return jsonResponse(res, 200, { ok: true });
  }

  if (!fullName) {
    return jsonResponse(res, 400, { ok: false, message: 'יש להזין שם מלא' });
  }

  if (!phone) {
    return jsonResponse(res, 400, { ok: false, message: 'יש להזין מספר טלפון' });
  }

  if (!isValidIsraeliPhone(phone)) {
    return jsonResponse(res, 400, {
      ok: false,
      message: 'יש להזין מספר טלפון ישראלי תקין',
    });
  }

  const resendApiKey = getEnvVar('RESEND_API_KEY');
  const fromEmail = getEnvVar('CONTACT_FROM_EMAIL');
  const toEmail = getEnvVar('CONTACT_TO_EMAIL');

  if (!resendApiKey || !fromEmail || !toEmail) {
    console.error('Contact API misconfigured: missing required environment variables');
    return jsonResponse(res, 500, {
      ok: false,
      message: 'שגיאה בשליחת הטופס. נסו שוב מאוחר יותר.',
    });
  }

  const timestamp = new Date().toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem' });

  const emailText = [
    `דף/עסק: ${business.name}`,
    `שם מלא: ${fullName}`,
    `טלפון: ${phone}`,
    `הודעה: ${message || '(לא צוין)'}`,
    `מקור: landing page`,
    `תאריך ושעה: ${timestamp}`,
  ].join('\n');

  try {
    const resend = new Resend(resendApiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `פנייה חדשה מדף הנחיתה — ${fullName}`,
      text: emailText,
    });

    if (error) {
      console.error('Resend error:', error.message);
      return jsonResponse(res, 500, {
        ok: false,
        message: 'שגיאה בשליחת הטופס. נסו שוב מאוחר יותר.',
      });
    }

    return jsonResponse(res, 200, { ok: true });
  } catch (error) {
    console.error('Contact API error:', error instanceof Error ? error.message : error);
    return jsonResponse(res, 500, {
      ok: false,
      message: 'שגיאה בשליחת הטופס. נסו שוב מאוחר יותר.',
    });
  }
}
