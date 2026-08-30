/**
 * WhatsApp number in international format, digits only, no + and no leading zero.
 * 054-581-7707 becomes 972545817707. The sticky button does not render if this
 * is empty, so the site never ships a link to a wrong number.
 */
export const WHATSAPP_NUMBER = "972545817707";

export const WHATSAPP_MESSAGE =
  "היי! הגעתי מהאתר ואשמח לשמוע פרטים על קורס המניקור ולק ג'ל";

export const whatsappLink = () =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
