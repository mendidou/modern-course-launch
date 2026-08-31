import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Check, Heart } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { SiteHeader } from "@/components/SiteHeader";
import { BackgroundIcons } from "@/components/BackgroundIcons";
import { getCourse } from "@/data/courses";
import { whatsappLink } from "@/data/contact";

/** The one line in the sidebar that carries real weight, so it is set apart. */
const KIT_ITEM = "ערכה מקצועית שאיתה אפשר להתחיל לעבוד";

const CourseDetail = () => {
  const { id } = useParams();
  const course = getCourse(id);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center" dir="rtl">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-semibold">הקורס לא נמצא</h1>
          <Button asChild className="gradient-primary shadow-glow rounded-2xl">
            <Link to="/">חזרה לדף הבית</Link>
          </Button>
        </div>
      </div>
    );
  }

  const backLink = (
    <Button asChild variant="ghost" className="mb-8 -mr-3 rounded-2xl">
      <Link to="/" className="flex items-center gap-2">
        <ArrowLeft className="w-4 h-4 rotate-180" />
        חזרה לדף הבית
      </Link>
    </Button>
  );

  if (!course.detail) {
    return (
      <div className="min-h-screen" dir="rtl">
        <SiteHeader />
        <div className="container mx-auto max-w-6xl px-4 py-12">
          {backLink}
          <div className="max-w-xl space-y-5 py-8 animate-fade-in-up">
            <p className="eyebrow">בקרוב</p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">{course.title}</h1>
            <p className="text-lg text-muted-foreground">{course.description}</p>
            <p className="text-muted-foreground">
              הקורס הזה עוד בהכנה. בינתיים אפשר להתחיל מקורס מניקור ג'ל מתחילות, או להשאיר פרטים
              ולהיות מהראשונות שיֵדעו כשנפתחת הרשמה.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button asChild size="lg" className="gradient-primary shadow-glow rounded-2xl px-7">
                <Link to="/course/1">לקורס מניקור ג'ל מתחילות</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl px-7 bg-card shadow-card">
                <a href={whatsappLink()} target="_blank" rel="noreferrer">
                  עדכנו אותי כשנפתח
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const { detail } = course;

  return (
    <div className="min-h-screen" dir="rtl">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <BackgroundIcons />
        <div className="relative container mx-auto max-w-6xl px-4 py-12">
          {backLink}

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="space-y-5 animate-fade-in-up">
              <p className="eyebrow">{course.level}</p>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">{course.title}</h1>
              <p className="text-lg text-muted-foreground">{course.description}</p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {course.duration}
                </span>
                <span className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-primary" />
                  קורס פרטי אחד על אחד
                </span>
              </div>

              <div className="pt-2">
                <Button asChild size="lg" className="gradient-primary shadow-glow rounded-2xl px-7">
                  <a href={whatsappLink()} target="_blank" rel="noreferrer">
                    צרי קשר לפרטים
                  </a>
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-border shadow-card">
              <img
                src={detail.image}
                alt={course.title}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="block w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-4">
                <p className="eyebrow">אודות הקורס</p>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  {detail.longDescription.split("\n\n").map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                  מה נלמד בקורס.
                </h2>
                <div className="space-y-8 border-t border-border pt-6">
                  {detail.syllabus.map((part) => (
                    <div key={part.title} className="space-y-3">
                      <h3 className="text-lg font-semibold">{part.title}</h3>
                      {part.paragraphs.map((para) => (
                        <p key={para} className="text-muted-foreground leading-relaxed">
                          {para}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
              <div className="space-y-4">
                <p className="eyebrow">מה מקבלים</p>
                <ul className="space-y-3">
                  {detail.whatYouGet.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted-foreground">
                      <Check className="w-4 h-4 mt-1 text-primary shrink-0" />
                      <span className={item === KIT_ITEM ? "font-semibold text-foreground" : undefined}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-border gradient-card p-6 space-y-4 shadow-card">
                <h2 className="text-lg font-semibold">רוצה לשמוע עוד?</h2>
                <p className="text-sm text-muted-foreground">
                  בואי נדבר ונראה אם הקורס מתאים לך.
                </p>
                <Button asChild className="w-full gradient-primary shadow-glow rounded-2xl">
                  <a href={whatsappLink()} target="_blank" rel="noreferrer">
                    צרי קשר בוואטסאפ
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground">בלי התחייבות, רק שיחה</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;
