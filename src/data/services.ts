import { Hand, Footprints, Layers, Sparkles, Eye } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceGroup {
  id: string;
  icon: LucideIcon;
  title: string;
  items: string[];
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
    items: ["בניית ציפורניים", "מילוי"],
  },
  {
    id: "feet",
    icon: Footprints,
    title: "רגליים",
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
    items: ["קישוט על ציפורן אחת בכל יד", "עיצוב על כמה ציפורניים"],
  },
  {
    id: "brows",
    icon: Eye,
    title: "גבות וריסים",
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
