import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/CourseCard";
import { Check, Minus, Quote, ShieldCheck, Layers, Brush, Hand } from "lucide-react";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { About } from "@/components/About";
import { Reveal } from "@/components/Reveal";
import { BackgroundIcons } from "@/components/BackgroundIcons";
import { SiteHeader } from "@/components/SiteHeader";
import { courses } from "@/data/courses";
import { whatsappLink } from "@/data/contact";
import heroImage from "@/assets/hero-nails.jpg";
import syllabusImage from "@/assets/course-gel-polish.jpg";

/** The four axes the two formats differ on, kept as chips above the summaries. */
const axes = ["תשומת לב", "קצב", "תרגול", "ליווי"];

const sides = {
  private:
    "המפגש כולו שלך, בלי להתחלק בקשב. מתקדמות בקצב שלך, את מתרגלת על מודליסטית ואני מתקנת תוך כדי, ואני זמינה לשאלות גם בין המפגשים.",
  group:
    "המורה מתחלקת בין כמה תלמידות, הקצב נקבע לפי הקבוצה, מתרגלים בתור, ומה שלא נשאל בכיתה נשאר פתוח.",
};

const highlights = [
  {
    icon: Layers,
    title: "אנטומיה של הציפורן",
  },
  {
    icon: ShieldCheck,
    title: "היגיינה",
  },
  {
    icon: Brush,
    title: "טכניקה",
  },
  {
    icon: Hand,
    title: "תירגול",
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
          <div className="mx-auto max-w-3xl space-y-6 text-center animate-fade-in-up">
            <p className="eyebrow">קורס מניקור ג'ל מתחילות, ההרשמה פתוחה</p>
            <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl xl:text-6xl font-semibold tracking-tight leading-[1.15]">
              מהבסיס ועד תוצאה מקצועית,
              <br />
              <span className="gradient-text">בקצב שלך.</span>
            </h1>
            <p className="mx-auto max-w-xl text-base md:text-lg text-muted-foreground">
              קורס פרטי אחד על אחד, בליווי צמוד לאורך כל הדרך. מתחילות מהיסודות: אנטומיה,
              היגיינה וטכניקה נכונה, עד שאת עובדת נקי, בטוח ובביטחון מלא.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="gradient-primary shadow-glow rounded-2xl text-base px-7">
                <a href={whatsappLink()} target="_blank" rel="noreferrer">בואי נדבר</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl text-base px-7 bg-card shadow-card">
                <a href="#courses">הקורסים שלי</a>
              </Button>
            </div>
          </div>

          {/* Wide media panel */}
          <div className="mx-auto mt-12 max-w-4xl md:mt-16 overflow-hidden rounded-[2rem] border border-border shadow-card animate-fade-in-up">
            <img
              src={heroImage}
              alt="תוצאה של מניקור מקצועי, ציפורניים בצורת שקד"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="block w-full h-[18rem] md:h-[26rem] object-cover object-[50%_25%]"
            />
          </div>
        </div>
      </section>

      {/* Why private */}
      <section id="why" className="relative overflow-hidden scroll-mt-24 py-20 md:py-24">
        <BackgroundIcons />
        <div className="relative container mx-auto max-w-6xl px-4" dir="rtl">
          <Reveal className="mx-auto max-w-2xl space-y-4 text-center mb-8">
            <p className="eyebrow">למה פרטי</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              ההבדל בין קורס קבוצתי לקורס אחת על אחת.
            </h2>
            <p className="text-lg text-muted-foreground">
              אני מלמדת אחת על אחת בלבד, כי זו הדרך שעובדת הכי טוב. ככה זה נראה בפועל.
            </p>
          </Reveal>

          <Reveal>
            <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2">
              {axes.map((axis) => (
                <span
                  key={axis}
                  className="rounded-full border border-border bg-card/70 px-3 py-1 text-sm text-muted-foreground"
                >
                  {axis}
                </span>
              ))}
            </div>

            <div className="relative mx-auto mt-6 grid max-w-4xl items-stretch gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="rounded-3xl border border-primary/30 gradient-card p-6 shadow-card sm:p-7">
                <h3 className="flex items-center gap-2 text-lg font-semibold">
                  <Check className="h-5 w-5 shrink-0 text-primary" />
                  אצלי, אחת על אחת
                </h3>
                <p className="mt-3 font-medium leading-relaxed">{sides.private}</p>
              </div>

              <div className="rounded-3xl border border-border bg-card/40 p-6 sm:p-7">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-muted-foreground">
                  <Minus className="h-5 w-5 shrink-0" />
                  בקורס קבוצתי
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{sides.group}</p>
              </div>

              {/* Centred on the seam: on the horizontal gap at sm and up, on the
                  vertical one below it. */}
              <span
                className="pointer-events-none absolute left-1/2 top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full gradient-primary text-sm font-semibold text-primary-foreground shadow-glow ring-4 ring-background"
                aria-hidden="true"
              >
                VS
              </span>
            </div>
          </Reveal>

          <Reveal className="mt-12">
            <figure className="mx-auto max-w-2xl text-center">
              <Quote className="mx-auto h-8 w-8 text-primary/25" aria-hidden="true" />
              <blockquote className="mt-3 text-xl font-medium leading-relaxed text-foreground/70 md:text-2xl">
                אני מלמדת רק אחת על אחת כי כדי שהיד שלך תעבוד נכון, מישהי צריכה לעמוד לידך
                ולתקן בזמן אמת. את זה אי אפשר לעשות לעשר תלמידות במקביל.
              </blockquote>
              <figcaption className="mt-4 flex items-center justify-center gap-3 text-sm text-muted-foreground">
                <span className="h-px w-8 bg-primary/40" />
                <span className="font-medium text-foreground/80">רבקה</span>
                <span aria-hidden="true">·</span>
                <span className="wordmark text-lg text-primary">rbknails</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="scroll-mt-24 py-20 md:py-24">
        <div className="container mx-auto max-w-6xl px-4" dir="rtl">
          <Reveal className="mx-auto max-w-2xl space-y-4 text-center mb-12">
            <p className="eyebrow">הקורסים</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">הקורסים שלי.</h2>
            <p className="text-lg text-muted-foreground">
              כרגע פתוח להרשמה קורס מניקור ג'ל מתחילות. השאירי פרטים ותהיי הראשונה לדעת
              כשנפתחת ההרשמה.
            </p>
          </Reveal>

          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
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
          <Reveal className="mx-auto max-w-2xl space-y-4 text-center mb-12">
            <p className="eyebrow">תוכן הקורס</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              על הקורס מניקור ג'ל למתחילות.
            </h2>
            <p className="text-lg text-muted-foreground">
              שלב אחרי שלב, מהיסודות ועד תוצאה נקייה ואחידה. כל נושא קודם מבינות אותו, ואז
              מתרגלות אותו. את התוכן המלא עוברות יחד במפגשים.
            </p>
          </Reveal>
          <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
            <Reveal>
              <ul className="grid gap-4 sm:grid-cols-2">
                {highlights.map((item, index) => (
                  <li
                    key={item.title}
                    className="rounded-3xl border border-border bg-card/70 p-5 shadow-card"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl gradient-primary text-primary-foreground shadow-glow">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <p className="eyebrow mt-4">{String(index + 1).padStart(2, "0")}</p>
                    <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <div className="overflow-hidden rounded-[2rem] border border-border shadow-card">
                <img
                  src={syllabusImage}
                  alt="עבודה על ציפורניים במהלך מפגש"
                  loading="lazy"
                  decoding="async"
                  className="block aspect-[4/3] w-full object-cover object-[50%_68%]"
                />
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-12 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="gradient-primary shadow-glow rounded-2xl text-base px-7">
              <a href={whatsappLink()} target="_blank" rel="noreferrer">בואי נדבר</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-2xl text-base px-7 bg-card shadow-card">
              <Link to="/course/1">למידע נוסף</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative overflow-hidden scroll-mt-24 py-20 md:py-24">
        <BackgroundIcons />
        <div className="relative container mx-auto max-w-6xl px-4" dir="rtl">
          <Reveal className="mx-auto max-w-2xl space-y-4 text-center mb-10">
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

      {/* Testimonials */}
      <section className="relative overflow-hidden py-20 md:py-24">
        <BackgroundIcons />
        <div className="relative container mx-auto max-w-6xl px-4" dir="rtl">
          <Reveal className="mx-auto max-w-2xl space-y-4 text-center mb-12">
            <p className="eyebrow">לקוחות</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              מה אומרות הלקוחות שלי.
            </h2>
            <p className="text-lg text-muted-foreground">
              כל התגובות אמיתיות, ישר מהעבודות שלי באינסטגרם{" "}
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

      <About />

      {/* CTA */}
      <section id="contact" className="relative overflow-hidden scroll-mt-24 py-20 md:py-28">
        <BackgroundIcons />
        <div className="relative container mx-auto max-w-6xl px-4" dir="rtl">
          <Reveal className="mx-auto max-w-2xl space-y-6 text-center">
            <p className="eyebrow">יצירת קשר</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              רוצה לשמוע עוד?
            </h2>
            <p className="text-lg text-muted-foreground">
              בואי נדבר ונבדוק יחד אם הקורס מתאים לך. בלי התחייבות, רק שיחה.
            </p>
            <div className="flex justify-center">
              <Button asChild size="lg" className="gradient-primary shadow-glow rounded-2xl text-base px-7">
                <a href={whatsappLink()} target="_blank" rel="noreferrer">
                  צרי קשר בוואטסאפ
                </a>
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
