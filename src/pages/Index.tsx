import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/CourseCard";
import { Heart, Clock, UserCheck, Sparkles, ShieldCheck, Layers, Brush, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { courses } from "@/data/courses";
import learnImage from "@/assets/hero-nails.jpg";

const benefits = [
  { icon: UserCheck, title: "תשומת לב מלאה", desc: "כל המפגש מוקדש רק לך ולהתקדמות שלך" },
  { icon: Clock, title: "בקצב שלך", desc: "לא צריך לרוץ או לחכות - מתקדמים יחד" },
  { icon: Heart, title: "ליווי אישי", desc: "אני כאן בשבילך גם בין המפגשים" },
];

const highlights = [
  {
    icon: Layers,
    title: "להבין על מה עובדים",
    desc: "המבנה האנטומי של הציפורן — הבסיס לכל טיפול נקי ובטוח",
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
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 py-24 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up" dir="rtl">
            <div className="inline-block">
              <Badge className="gradient-primary text-primary-foreground px-4 py-1.5 text-sm font-medium shadow-glow">
                <Heart className="w-4 h-4 ml-2 inline" />
                קורס מניקור בסיסי — נפתח להרשמה
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              למדי מניקור מהבסיס
              <span className="gradient-text"> בקצב שלך</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              קורס פרטי אחד על אחד, עם ליווי אישי וצמוד. מתחילות מהיסודות — אנטומיה, היגיינה
              וטכניקה נכונה — כדי שתגיעי לתוצאה מקצועית ובטוחה, בביטחון מלא.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="gradient-primary shadow-glow text-lg px-8 py-6 rounded-full group">
                בואי נדבר
                <Sparkles className="mr-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-2 hover:bg-secondary/80">
                הקורסים שלי
              </Button>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>
      </section>

      {/* Why Private Section */}
      <section className="py-20 border-y border-border/50 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12 animate-fade-in-up" dir="rtl">
            <h2 className="text-3xl md:text-4xl font-bold">
              למה קורס
              <span className="gradient-text"> פרטי?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              אני בוחרת ללמד בצורה אישית כי זה מה שעובד הכי טוב
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="text-center space-y-4 p-6 rounded-3xl bg-card/80 shadow-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                dir="rtl"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl gradient-primary text-primary-foreground">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Learn Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center" dir="rtl">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  מה נלמד בקורס
                  <span className="gradient-text"> המניקור הבסיסי?</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  הקורס בנוי שלב אחרי שלב, מהיסודות ועד לתוצאה נקייה ואחידה. כל נושא נלמד יחד
                  בתיאוריה ובתרגול מעשי — את התוכן המלא נעבור במפגשים.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="space-y-3 p-5 rounded-2xl bg-card/80 shadow-card animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl gradient-primary text-primary-foreground">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 gradient-card rounded-3xl opacity-50 blur-2xl" />
              <img
                src={learnImage}
                alt="תוצאה של מניקור מקצועי"
                className="relative rounded-3xl shadow-card w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24 bg-secondary/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up" dir="rtl">
            <h2 className="text-4xl md:text-5xl font-bold">
              הקורסים
              <span className="gradient-text"> שלי</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              כרגע נפתח להרשמה קורס המניקור הבסיסי. שאר הקורסים בדרך — ואפשר להשאיר פרטים
              ולהיות הראשונות לדעת.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={course.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <CourseCard {...course} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in-up" dir="rtl">
            <h2 className="text-4xl md:text-5xl font-bold">
              רוצה לשמוע
              <span className="gradient-text"> עוד?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              בואי נדבר ונראה אם הקורס מתאים לך. בלי התחייבות, רק שיחה.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="gradient-primary shadow-glow text-lg px-8 py-6 rounded-full">
                צרי קשר
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground" dir="rtl">
            <p className="text-sm">© 2024 כל הזכויות שמורות</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
