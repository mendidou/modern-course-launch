import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Check, Heart } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { SiteHeader } from "@/components/SiteHeader";
import { getCourse } from "@/data/courses";

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
        <div className="container mx-auto px-4 py-12">
          {backLink}
          <div className="max-w-xl space-y-5 py-8 animate-fade-in-up">
            <p className="eyebrow">בקרוב</p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">{course.title}</h1>
            <p className="text-lg text-muted-foreground">{course.description}</p>
            <p className="text-muted-foreground">
              הקורס הזה עוד בהכנה. בינתיים אפשר להתחיל מקורס המניקור הבסיסי, או להשאיר פרטים
              ולהיות מהראשונות שיֵדעו כשנפתחת הרשמה.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button asChild size="lg" className="gradient-primary shadow-glow rounded-2xl px-7">
                <Link to="/course/1">לקורס מניקור בסיסי</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-2xl px-7 bg-card shadow-card">
                עדכנו אותי כשנפתח
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
      <section className="gradient-hero border-b border-border">
        <div className="container mx-auto px-4 py-12">
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
                <Button size="lg" className="gradient-primary shadow-glow rounded-2xl px-7">
                  צרי קשר לפרטים
                </Button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-border bg-card p-3 shadow-card">
              <img
                src={detail.image}
                alt={course.title}
                className="w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-4">
                <p className="eyebrow">אודות הקורס</p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {detail.longDescription}
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="eyebrow">מה נלמד</p>
                  <p className="text-muted-foreground">
                    ראשי הפרקים שנעבור יחד. את התוכן המלא לומדים במפגשים.
                  </p>
                </div>
                <ol className="border-t border-border">
                  {detail.modules.map((module, index) => (
                    <li
                      key={module}
                      className="flex items-baseline gap-4 border-b border-border py-4"
                    >
                      <span className="eyebrow shrink-0">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-medium">{module}</span>
                    </li>
                  ))}
                </ol>
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
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-border gradient-card p-6 space-y-4 shadow-card">
                <h2 className="text-lg font-semibold">רוצה לשמוע עוד?</h2>
                <p className="text-sm text-muted-foreground">
                  בואי נדבר ונראה אם הקורס מתאים לך.
                </p>
                <Button className="w-full gradient-primary shadow-glow rounded-2xl">צרי קשר</Button>
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
