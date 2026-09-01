import { GA4_ID, META_PIXEL_ID } from "@/data/analytics";

/**
 * Loads the Meta Pixel and GA4, and reports WhatsApp clicks to both.
 *
 * WhatsApp clicks are caught by one delegated listener rather than a handler on
 * each button: every route has its own set of WhatsApp links, and a link added
 * later is picked up without anyone remembering to wire it.
 */

declare global {
  interface Window {
    fbq?: ((...args: unknown[]) => void) & { callMethod?: (...args: unknown[]) => void; queue?: unknown[] };
    _fbq?: unknown;
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const loadMetaPixel = (id: string) => {
  /* Meta's own snippet, transcribed: it queues calls made before the script
     lands, so fbq() is safe to call immediately after this returns. */
  const fbq: Window["fbq"] = function (...args: unknown[]) {
    fbq.callMethod ? fbq.callMethod(...args) : fbq.queue!.push(args);
  } as NonNullable<Window["fbq"]>;
  fbq.queue = [];
  window.fbq = fbq;
  window._fbq = fbq;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);

  window.fbq("init", id);
  window.fbq("track", "PageView");
};

const loadGa4 = (id: string) => {
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", id);
};

/** Fires on every click that ends up on a wa.me link, wherever it lives. */
const trackWhatsAppClicks = () => {
  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement | null;
    const link = target?.closest?.("a");
    if (!link?.href.includes("wa.me")) return;

    /* Contact is the standard event Meta optimises message campaigns against,
       so the pixel data lines up with what the ads are buying. */
    window.fbq?.("track", "Contact");
    window.gtag?.("event", "whatsapp_click");
  });
};

export const initAnalytics = () => {
  if (META_PIXEL_ID) loadMetaPixel(META_PIXEL_ID);
  if (GA4_ID) loadGa4(GA4_ID);
  if (META_PIXEL_ID || GA4_ID) trackWhatsAppClicks();
};
