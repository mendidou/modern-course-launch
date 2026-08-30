/**
 * WhatsApp number in international format, digits only, no + and no leading zero.
 * An Israeli 05X-XXX-XXXX becomes 9725XXXXXXXX.
 *
 * Left empty on purpose: the sticky button does not render until this is set,
 * so the site never ships a link to a wrong number.
 */
export const WHATSAPP_NUMBER = "";

export const WHATSAPP_MESSAGE =
  "היי! הגעתי מהאתר ואשמח לשמוע פרטים על קורס המניקור הבסיסי";

export const whatsappLink = () =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
