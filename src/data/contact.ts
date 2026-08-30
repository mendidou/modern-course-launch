/**
 * WhatsApp number in international format, digits only, no + and no leading zero.
 * An Israeli 05X-XXX-XXXX becomes 9725XXXXXXXX.
 */
export const WHATSAPP_NUMBER = "972000000000";

export const WHATSAPP_MESSAGE =
  "היי! הגעתי מהאתר ואשמח לשמוע פרטים על קורס המניקור הבסיסי";

export const whatsappLink = () =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
