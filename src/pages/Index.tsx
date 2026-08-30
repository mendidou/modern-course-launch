import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/CourseCard";
import { Heart, Clock, UserCheck, ShieldCheck, Layers, Brush, BookOpen } from "lucide-react";
import { Testimonials } from "@/components/Testimonials";
import { SiteHeader } from "@/components/SiteHeader";
import { courses } from "@/data/courses";
import heroImage from "@/assets/hero-nails.jpg";

const benefits = [
  { icon: UserCheck, title: "תשומת לב מלאה", desc: "כל המפגש מוקדש רק לך ולהתקדמות שלך" },
  { icon: Clock, title: "בקצב שלך", desc: "לא צריך לרוץ או לחכות, מתקדמים יחד" },
  { icon: Heart, title: "ליווי אישי", desc: "אני כאן בשבילך גם בין המפגשים" },
];

const highlights = [
  {
    icon: Layers,
    title: "להבין על מה עובדים",
    desc: "המבנה האנטומי של הציפורן, הבסיס לכל טיפול נקי ובטוח",
  },
  {
    icon: ShieldCheck,
    title: "לעבוד בטוח",
    desc: "היגיינה, חיטוי ועיקור כלים, וזיהוי מצבים שבהם אסור לטפל",
  },
  {
    icon: Brush,
    title: "טכניקה ותוצאה",
    desc: "מניקור משולב, שיוף וצורות, מבנה אנטומי ומריחת צבע אחידה",
  },
  {
    icon: BookOpen,
    title: "חוברת עבודה",
    desc: "חוברת מלאה ללומדת שנשארת איתך גם אחרי סוף הקורס",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 pt-16 pb-14 md:pt-24 md:pb-20" dir="rtl">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-16 items-end">
            <div className="space-y-5 animate-fade-in-up">
              <p className="eyebrow">קורס מניקור בסיסי, נפתח להרשמה</p>
              <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl xl:text-6xl font-semibold tracking-tight leading-[1.15]">
                למדי מניקור מהבסיס,
                <br />
                <span className="text-muted-foreground">בקצב שלך.</span>
              </h1>
            </div>

            <div className="space-y-6">
              <p className="text-base md:text-lg text-muted-foreground max-w-md">
                קורס פרטי אחד על אחד, עם ליווי אישי וצמוד. מתחילות מהיסודות: אנטומיה, היגיינה
                וטכניקה נכונה, עד לתוצאה נקייה שאפשר לסמוך עליה.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="rounded-lg text-base px-6">
                  <a href="#contact">בואי נדבר</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-lg text-base px-6">
                  <a href="#courses">הקורסים שלי</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Wide media panel */}
          <div className="mt-12 md:mt-16 rounded-2xl border border-border bg-card p-2 md:p-3 animate-fade-in-up">
            <img
              src={heroImage}
              alt="תוצאה של מניקור מקצועי, ציפורניים בצורת שקד"
              className="w-full h-[18rem] md:h-[26rem] rounded-xl object-cover object-[50%_25%]"
            />
          </div>
        </div>
      </section>

      {/* Why private */}
      <section id="why" className="py-20 md:py-24 border-b border-border">
        <div className="container mx-auto px-4" dir="rtl">
          <div className="max-w-2xl space-y-4 mb-12">
            <p className="eyebrow">למה פרטי</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              שלוש סיבות שבגללן אני מלמדת אחת על אחת.
            </h2>
            <p className="text-lg text-muted-foreground">
              אני בוחרת ללמד בצורה אישית כי זה מה שעובד הכי טוב.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border rounded-2xl overflow-hidden">
            {benefits.map((item) => (
              <div key={item.title} className="bg-card p-7 space-y-3">
                <item.icon className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you learn */}
      <section className="py-20 md:py-24 border-b border-border">
        <div className="container mx-auto px-4" dir="rtl">
          <div className="max-w-2xl space-y-4 mb-12">
            <p className="eyebrow">תוכן הקורס</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              מה נלמד בקורס המניקור הבסיסי.
            </h2>
            <p className="text-lg text-muted-foreground">
              הקורס בנוי שלב אחרי שלב, מהיסודות ועד לתוצאה נקייה ואחידה. כל נושא נלמד יחד
              בתיאוריה ובתרגול מעשי. את התוכן המלא נעבור במפגשים.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div key={item.title} className="space-y-3 border-t border-border pt-5">
                <p className="eyebrow">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-20 md:py-24 border-b border-border">
        <div className="container mx-auto px-4" dir="rtl">
          <div className="max-w-2xl space-y-4 mb-12">
            <p className="eyebrow">הקורסים</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">הקורסים שלי.</h2>
            <p className="text-lg text-muted-foreground">
              כרגע נפתח להרשמה קורס המניקור הבסיסי. שאר הקורסים בדרך, ואפשר להשאיר פרטים
              ולהיות הראשונות לדעת.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-24 border-b border-border">
        <div className="container mx-auto px-4" dir="rtl">
          <div className="max-w-2xl space-y-4 mb-12">
            <p className="eyebrow">לקוחות</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              מה אומרות הלקוחות שלי.
            </h2>
            <p className="text-lg text-muted-foreground">
              תגובות אמיתיות שנכתבו על העבודות שלי באינסטגרם{" "}
              <a
                href="https://www.instagram.com/rbknails/"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
                dir="ltr"
              >
                @rbknails
              </a>
            </p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 md:py-28">
        <div className="container mx-auto px-4" dir="rtl">
          <div className="max-w-2xl space-y-6">
            <p className="eyebrow">יצירת קשר</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              רוצה לשמוע עוד?
            </h2>
            <p className="text-lg text-muted-foreground">
              בואי נדבר ונראה אם הקורס מתאים לך. בלי התחייבות, רק שיחה.
            </p>
            <div>
              <Button size="lg" className="rounded-lg text-base px-6">
                צרי קשר
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="container mx-auto px-4" dir="rtl">
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-sm text-muted-foreground">
            <p>© 2024 כל הזכויות שמורות</p>
            <a
              href="https://www.instagram.com/rbknails/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
              dir="ltr"
            >
              @rbknails
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
