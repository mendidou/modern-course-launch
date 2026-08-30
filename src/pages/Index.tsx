import { Fragment } from "react";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/CourseCard";
import { Check, Minus, Quote, ShieldCheck, Layers, Brush, BookOpen } from "lucide-react";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Reveal } from "@/components/Reveal";
import { BackgroundIcons } from "@/components/BackgroundIcons";
import { SiteHeader } from "@/components/SiteHeader";
import { courses } from "@/data/courses";
import heroImage from "@/assets/hero-nails.jpg";
import syllabusImage from "@/assets/course-gel-polish.jpg";

/** One row per point, read down each column. Kept to one short line a side:
    the contrast lands faster than a paragraph does. */
const comparison = [
  {
    label: "תשומת לב",
    private: "כל המפגש מוקדש רק לך",
    group: "המורה מתחלקת בין כמה תלמידות",
  },
  {
    label: "קצב",
    private: "מתקדמות בקצב שלך",
    group: "הקצב נקבע לפי הקבוצה",
  },
  {
    label: "תרגול",
    private: "את עובדת בידיים בכל מפגש",
    group: "מסתכלים, ומתרגלים בתור",
  },
  {
    label: "אחרי המפגש",
    private: "זמינה לשאלות גם בין המפגשים",
    group: "מה שלא נשאל בכיתה נשאר פתוח",
  },
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
      <section className="relative overflow-hidden">
        <BackgroundIcons />
        <div className="relative container mx-auto max-w-6xl px-4 pt-16 pb-14 md:pt-24 md:pb-20" dir="rtl">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-16 items-end">
            <div className="space-y-5 animate-fade-in-up">
              <p className="eyebrow">קורס מניקור ולק ג'ל, נפתח להרשמה</p>
              <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl xl:text-6xl font-semibold tracking-tight leading-[1.15]">
                למדי מניקור מהבסיס,
                <br />
                <span className="gradient-text">בקצב שלך.</span>
              </h1>
            </div>

            <div className="space-y-6">
              <p className="text-base md:text-lg text-muted-foreground max-w-md">
                קורס פרטי אחד על אחד, עם ליווי אישי וצמוד. מתחילות מהיסודות: אנטומיה, היגיינה
                וטכניקה נכונה, עד לתוצאה נקייה שאפשר לסמוך עליה.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="gradient-primary shadow-glow rounded-2xl text-base px-7">
                  <a href="#contact">בואי נדבר</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-2xl text-base px-7 bg-card shadow-card">
                  <a href="#courses">הקורסים שלי</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Wide media panel */}
          <div className="mt-12 md:mt-16 rounded-[2rem] border border-border bg-card p-3 shadow-card animate-fade-in-up">
            <img
              src={heroImage}
              alt="תוצאה של מניקור מקצועי, ציפורניים בצורת שקד"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full h-[18rem] md:h-[26rem] rounded-[1.5rem] object-cover object-[50%_25%]"
            />
          </div>
        </div>
      </section>

      {/* Why private */}
      <section id="why" className="relative overflow-hidden scroll-mt-24 py-20 md:py-24">
        <BackgroundIcons />
        <div className="relative container mx-auto max-w-6xl px-4" dir="rtl">
          <Reveal className="max-w-2xl space-y-4 mb-8">
            <p className="eyebrow">למה פרטי</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              ההבדל בין קורס קבוצתי לקורס אחת על אחת.
            </h2>
            <p className="text-lg text-muted-foreground">
              אני בוחרת ללמד בצורה אישית כי זה מה שעובד הכי טוב. ככה זה נראה בפועל.
            </p>
          </Reveal>

          <Reveal className="mb-10">
            <figure className="relative max-w-3xl overflow-hidden rounded-3xl border border-primary/30 gradient-card p-7 shadow-card md:p-9">
              <Quote className="absolute end-6 top-6 h-10 w-10 text-primary/15" aria-hidden="true" />
              <blockquote className="relative text-xl font-medium leading-relaxed md:text-2xl">
                אני מלמדת רק אחת על אחת כי כדי שהיד שלך תעבוד נכון, מישהי צריכה לעמוד לידך
                ולתקן בזמן אמת. את זה אי אפשר לעשות לעשר תלמידות במקביל.
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 text-sm text-muted-foreground">
                <span className="h-px w-8 bg-primary/40" />
                <span className="font-medium text-foreground">רבקה</span>
                <span aria-hidden="true">·</span>
                <span className="wordmark text-lg text-primary">rbknails</span>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal>
            {/* Column headers only make sense once the two sides sit side by side. */}
            <div className="mb-4 hidden gap-6 sm:grid sm:grid-cols-2">
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <Check className="h-5 w-5 text-primary" />
                אצלי, אחת על אחת
              </h3>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-muted-foreground">
                <Minus className="h-5 w-5" />
                בקורס קבוצתי
              </h3>
            </div>

            <div className="space-y-3">
              {comparison.map((row) => (
                <div
                  key={row.label}
                  className="grid overflow-hidden rounded-3xl border border-border shadow-card sm:grid-cols-2"
                >
                  <div className="gradient-card border-b border-border px-5 py-4 sm:border-b-0 sm:border-e">
                    <p className="eyebrow mb-1.5">{row.label}</p>
                    <p className="flex items-start gap-2 font-medium">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      {row.private}
                    </p>
                  </div>
                  <div className="bg-card/40 px-5 py-4">
                    <p className="eyebrow mb-1.5 sm:invisible">בקורס קבוצתי</p>
                    <p className="flex items-start gap-2 text-muted-foreground">
                      <Minus className="mt-0.5 h-5 w-5 shrink-0" />
                      {row.group}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="scroll-mt-24 py-20 md:py-24">
        <div className="container mx-auto max-w-6xl px-4" dir="rtl">
          <Reveal className="max-w-2xl space-y-4 mb-12">
            <p className="eyebrow">הקורסים</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">הקורסים שלי.</h2>
            <p className="text-lg text-muted-foreground">
              כרגע נפתח להרשמה קורס המניקור ולק ג'ל. שאר הקורסים בדרך, ואפשר להשאיר פרטים
              ולהיות הראשונות לדעת.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {courses.map((course, index) => (
              <Reveal key={course.id} className="h-full">
                <CourseCard {...course} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What you learn */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto max-w-6xl px-4" dir="rtl">
          <Reveal className="max-w-2xl space-y-4 mb-12">
            <p className="eyebrow">תוכן הקורס</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              מה נלמד בקורס המניקור ולק ג'ל.
            </h2>
            <p className="text-lg text-muted-foreground">
              הקורס בנוי שלב אחרי שלב, מהיסודות ועד לתוצאה נקייה ואחידה. כל נושא נלמד יחד
              בתיאוריה ובתרגול מעשי. את התוכן המלא נעבור במפגשים.
            </p>
          </Reveal>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
            <Reveal>
              <ol className="relative ps-16">
                {/* Painted before the list items, so the markers sit on top of it. */}
                <div className="absolute inset-y-2 start-[1.375rem] w-0.5 overflow-hidden rounded-full bg-border">
                  <div className="timeline-line h-full w-full gradient-primary" />
                </div>

                {highlights.map((item, index) => (
                  <li key={item.title} className="relative pb-9 last:pb-0">
                    <span className="absolute -start-16 top-0 flex h-11 w-11 items-center justify-center rounded-2xl gradient-primary text-primary-foreground shadow-glow">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <p className="eyebrow">{String(index + 1).padStart(2, "0")}</p>
                    <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-1 text-muted-foreground">{item.desc}</p>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal>
              <div className="overflow-hidden rounded-[2rem] border border-border bg-card p-3 shadow-card">
                <img
                  src={syllabusImage}
                  alt="עבודה על ציפורניים במהלך מפגש"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full rounded-[1.5rem] object-cover object-[50%_68%]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative overflow-hidden py-20 md:py-24">
        <BackgroundIcons />
        <div className="relative container mx-auto max-w-6xl px-4" dir="rtl">
          <Reveal className="max-w-2xl space-y-4 mb-12">
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
          </Reveal>
          <Testimonials />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative overflow-hidden scroll-mt-24 py-20 md:py-24">
        <BackgroundIcons />
        <div className="relative container mx-auto max-w-6xl px-4" dir="rtl">
          <Reveal className="max-w-2xl space-y-4 mb-10">
            <p className="eyebrow">שאלות נפוצות</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              מה שנשאלתי הכי הרבה.
            </h2>
            <p className="text-lg text-muted-foreground">
              ואם נשאר משהו פתוח, כתבי לי ואענה.
            </p>
          </Reveal>
          <Faq />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative overflow-hidden scroll-mt-24 py-20 md:py-28">
        <BackgroundIcons />
        <div className="relative container mx-auto max-w-6xl px-4" dir="rtl">
          <Reveal className="max-w-2xl space-y-6">
            <p className="eyebrow">יצירת קשר</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              רוצה לשמוע עוד?
            </h2>
            <p className="text-lg text-muted-foreground">
              בואי נדבר ונראה אם הקורס מתאים לך. בלי התחייבות, רק שיחה.
            </p>
            <div>
              <Button size="lg" className="gradient-primary shadow-glow rounded-2xl text-base px-7">
                צרי קשר
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="py-10">
        <div className="container mx-auto max-w-6xl px-4" dir="rtl">
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
