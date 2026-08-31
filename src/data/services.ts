import { Hand, Footprints, Layers, Sparkles, Eye } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceGroup {
  id: string;
  icon: LucideIcon;
  title: string;
  intro: string;
  items: string[];
  /** Shown under the list, for anything that needs a word of explanation. */
  note?: string;
}

/**
 * The treatments offered in the salon. Prices live in the WhatsApp conversation,
 * not on the page, so nothing here goes stale.
 */
export const serviceGroups: ServiceGroup[] = [
  {
    id: "hands",
    icon: Hand,
    title: "ידיים",
    intro: "לק ג'ל נקי ועמיד, עם הכנה נכונה של הציפורן.",
    items: [
      "לק ג'ל",
      "לק ג'ל עם מבנה",
      "לק ג'ל עם חיזוק",
      "הורדה",
      "הורדה עם מניקור",
      "תיקון ציפורן סדוקה",
      "השלמת ציפורן",
    ],
  },
  {
    id: "build",
    icon: Layers,
    title: "בנייה ומילוי",
    intro: "בנייה מלאה, ומילוי לשמירה על התוצאה לאורך זמן.",
    items: ["בניית ציפורניים", "מילוי"],
  },
  {
    id: "feet",
    icon: Footprints,
    title: "רגליים",
    intro: "פדיקור מטופח, עם או בלי ג'ל.",
    items: [
      "פדיקור",
      "פדיקור עם ג'ל",
      "לק ג'ל לרגליים",
      "שיוף ולק רגיל לרגליים",
      "פדיקור אקספרס עם לק רגיל",
    ],
  },
  {
    id: "art",
    icon: Sparkles,
    title: "קישוטים ועיצוב",
    intro: "מהקלאסי ועד לפרטים המדויקים.",
    items: ["קישוט על ציפורן אחת בכל יד", "עיצוב על כמה ציפורניים"],
    note:
      "ציפורן אחת בכל יד ללא תוספת תשלום. משתי ציפורניים ומעלה בתוספת, לפי סוג הקישוט. כדאי לעדכן אותי מראש כדי שאקבע לך תור ארוך יותר.",
  },
  {
    id: "brows",
    icon: Eye,
    title: "גבות וריסים",
    intro: "עיצוב, צבע והרמה.",
    items: [
      "עיצוב גבות",
      "עיצוב גבות עם צבע",
      "עיצוב גבות ושפם",
      "הרמת גבות",
      "הרמת ריסים",
      "הרמת גבות וריסים",
    ],
  },
];
