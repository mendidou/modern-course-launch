import basicManicureImage from "@/assets/course-basic-manicure.jpg";
import basicManicureDetailImage from "@/assets/detail-basic-manicure.jpg";
import gelPolishImage from "@/assets/course-gel-polish.jpg";
import nailArtImage from "@/assets/course-nail-art.jpg";
import extensionsImage from "@/assets/course-extensions.jpg";

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  image: string;
  /** CSS object-position for the card crop. The photos are portrait and the card is
      landscape, so the default 50% 50% cuts the nails off. Values checked visually. */
  objectPosition?: string;
  comingSoon?: boolean;
  /** Detail page content, only for courses that are open for registration. */
  detail?: {
    image: string;
    longDescription: string;
    modules: string[];
    whatYouGet: string[];
  };
}

export const courses: Course[] = [
  {
    id: "1",
    title: "מניקור בסיסי",
    description:
      "הבסיס המקצועי לכל טיפול: אנטומיה, היגיינה, מניקור משולב, שיוף ומריחת צבע מושלמת.",
    duration: "מספר מפגשים אישיים",
    level: "למתחילות",
    image: basicManicureImage,
    objectPosition: "50% 35%",
    detail: {
      image: basicManicureDetailImage,
      longDescription:
        "הקורס הפרטי הזה הוא הבסיס שכל מניקוריסטית חייבת לעבור לפני כל טכניקה מתקדמת. נלמד יחד להבין על מה בדיוק אנחנו עובדות, איך עובדים נכון ובטוח, ואיך מגיעות לתוצאה נקייה ואחידה שנשארת יפה לאורך זמן. אני מלמדת אחת על אחת, בקצב שלך, עם תרגול מעשי בכל מפגש, ומלווה אותך גם בין המפגשים. בסוף הקורס את מקבלת חוברת עבודה מלאה שתישאר איתך גם אחרי שנסיים.",
      modules: [
        "מהי ציפורן: המבנה האנטומי שחייבים להכיר",
        "עקרונות היגיינה, חיטוי ועיקור כלי עבודה",
        "עמדת עבודה מקצועית ורשימת הציוד הבסיסי",
        "מניקור משולב: ראשי יהלום ועבודה ידנית",
        "טיפול נכון ובטוח בקוטיקולה",
        "שיוף נכון וצורות ציפורניים",
        "מבנה אנטומי: יישור והחלקה של הציפורן",
        "מריחת צבע: שכבות, ייבוש וגימור נקי",
        "זיהוי מחלות וזיהומים: מתי אסור לטפל",
        "דף תרגול אישי וליווי אחרי הקורס",
      ],
      whatYouGet: [
        "ליווי אישי אחד על אחד",
        "תרגול מעשי בכל מפגש",
        "חוברת עבודה מלאה ללומדת",
        "זמינות לשאלות גם בין המפגשים",
        "חומרים לתרגול בזמן הקורס",
      ],
    },
  },
  {
    id: "2",
    title: "לק ג'ל וג'ל",
    description: "טכניקות עבודה עם ג'ל ולק ג'ל, שכבות, גימור ועמידות לאורך זמן.",
    duration: "בקרוב",
    level: "למתחילות",
    image: gelPolishImage,
    objectPosition: "50% 65%",
    comingSoon: true,
  },
  {
    id: "3",
    title: "נייל ארט ועיצוב",
    description: "עיצובים, צבע ויצירתיות, מהעיצובים הקלאסיים ועד לפרטים המדויקים.",
    duration: "בקרוב",
    level: "למתקדמות",
    image: nailArtImage,
    objectPosition: "50% 65%",
    comingSoon: true,
  },
  {
    id: "4",
    title: "בניה והארכות",
    description: "בניה על תבנית וטיפסים, יצירת צורות, תחזוקה והסרה נכונה.",
    duration: "בקרוב",
    level: "למתקדמות",
    image: extensionsImage,
    objectPosition: "50% 35%",
    comingSoon: true,
  },
];

export const getCourse = (id?: string) => courses.find((course) => course.id === id);
