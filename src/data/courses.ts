import basicManicureImage from "@/assets/course-basic-manicure.jpg";
import basicManicureDetailImage from "@/assets/detail-basic-manicure.jpg";
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
    syllabus: { title: string; paragraphs: string[] }[];
    whatYouGet: string[];
  };
}

export const courses: Course[] = [
  {
    id: "1",
    title: "מניקור ג'ל מתחילות",
    description:
      "כל מה שצריך כדי להשתלב בעולם הציפורניים ולהפוך למקצועית ומובילה בתחום. נלמד טכניקות מקצועיות, נדייק בפרטים הקטנים ונבנה לך בסיס חזק לעבודה אמיתית.",
    duration: "4 מפגשים אישיים",
    level: "למתחילות",
    image: basicManicureImage,
    objectPosition: "50% 35%",
    detail: {
      image: basicManicureDetailImage,
      longDescription:
        "עולם הלק ג'ל והציפורניים מתפתח בקצב מסחרר, והיום יותר מתמיד חשוב להיות מקצועית, מעודכנת ומוכנה לכל מה שהתחום מביא איתו.\n\nבקורס שלי אני אקח אותך מהבסיס, שלב אחר שלב, גם אם אין לך שום ניסיון קודם, עד לרמה שתאפשר לך להפוך את האהבה לציפורניים למקצוע של ממש.\n\nנלמד את כל היסודות החשובים, טכניקות עבודה נכונות ומקצועיות, תוך הקפדה על הפרטים הקטנים שעושים את כל ההבדל בין עבודה יפה לעבודה ברמה גבוהה ומקצועית.\n\nהמטרה שלי היא לא רק ללמד אותך לעשות לק ג'ל, אלא להעניק לך את הידע, הביטחון והכלים להפוך לנייליסטית מקצועית ומובילה בתחום.\n\nואני? אדאג שתצאי מהקורס מוכנה לעולם האמיתי ולעבודה מקצועית.",
      syllabus: [
        {
          title: "למי מיועד הקורס?",
          paragraphs: [
            "הקורס מיועד למי שעדיין לא למדה את תחום הלק ג'ל, או שלמדה לפני יותר משמונה חודשים. אין צורך להגיע עם ידע קודם.",
            "מגיל 15 בלבד, ומתחת לגיל 18 באישור הורים.",
          ],
        },
        {
          title: "תוכן הלימודים: ארבעה מפגשים",
          paragraphs: [
            "שיעור עיוני שיכין אותך לכניסה לתחום הציפורניים מכל ההיבטים: מחלות ונגעים, חיטוי ועיקור לפי הוראות משרד הבריאות, תמחור, שיווק, גיוס לקוחות ופתיחת תיק עוסק פטור.",
            "לאחר מכן שלושה שיעורים מעשיים שבהם תלמדי את כל שלבי מניקור הג'ל המתקדמים בעולם: מניקור עם ראשים, גזירה עם צבתית ומספריים, ודוחף עור לולאה, החדש בתחום. בנוסף תלמדי לפסל תיקון מבנה אנטומי לפי התקן החדש.",
          ],
        },
        {
          title: "ומה קורה אם ללקוחה נשברה ציפורן?",
          paragraphs: [
            "תלמדי שתי שיטות לתיקון ציפורניים: תיקון בעזרת אקריג'ל, ותיקון בעזרת טיפס ג'ל.",
          ],
        },
      ],
      whatYouGet: [
        "ליווי אישי אחד על אחד",
        "תרגול מעשי בכל מפגש",
        "חוברת עבודה מלאה ללומדת",
        "זמינות לשאלות גם בין המפגשים",
        "חומרים לתרגול בזמן הקורס",
        "ערכה מקצועית שאיתה אפשר להתחיל לעבוד",
      ],
    },
  },
  {
    id: "2",
    title: "בנייה בג'ל",
    description:
      "קורס בנייה בג'ל שיפתח בפנייך קהל לקוחות חדש ומקור הכנסה נוסף. בסיום הקורס תוכלי להציע ללקוחותייך שירותי הארכת ציפורניים ובנייה בג'ל, ולהרחיב את סל הטיפולים שלך.",
    duration: "בקרוב",
    level: "למתקדמות",
    image: extensionsImage,
    objectPosition: "50% 35%",
    comingSoon: true,
  },
  {
    id: "3",
    title: "השתלמות מקצועית",
    description:
      "ההשתלמות מיועדת לנייליסטיות מקצועיות, בעלות ידע וניסיון במניקור ג'ל, המקבלות לקוחות באופן שוטף ורוצות לשדרג את הידע והטכניקות שלהן.",
    duration: "בקרוב",
    level: "למקצועיות",
    image: nailArtImage,
    objectPosition: "50% 65%",
    comingSoon: true,
  },
];

export const getCourse = (id?: string) => courses.find((course) => course.id === id);
