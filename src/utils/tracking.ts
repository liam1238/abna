declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type GtagEventParams = Record<string, string | number | boolean>;

function sendEvent(eventName: string, params?: GtagEventParams): void {
  try {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
      return;
    }

    window.gtag('event', eventName, params);
  } catch {
    // Fail silently — never block UI
  }
}

function withLocation(
  location: string | undefined,
  extra?: GtagEventParams,
): GtagEventParams | undefined {
  if (!location && !extra) {
    return undefined;
  }

  return {
    ...(location ? { location } : {}),
    ...extra,
  };
}

export function trackPhoneClick(location: string): void {
  sendEvent('phone_click', { location });
}

export function trackWhatsAppClick(location: string): void {
  sendEvent('whatsapp_click', { location });
}

export function trackFormSubmit(location?: string): void {
  sendEvent('form_submit', withLocation(location));
}

export function trackFormSuccess(location?: string): void {
  sendEvent('form_success', withLocation(location));
}

export function trackFormError(location?: string, reason?: string): void {
  sendEvent(
    'form_error',
    withLocation(location, reason ? { reason } : undefined),
  );
}

export function trackFacebookClick(location?: string): void {
  sendEvent('facebook_click', withLocation(location));
}

export function trackVideoPlay(videoId: string, location: string): void {
  sendEvent('video_play', { video_id: videoId, location });
}
