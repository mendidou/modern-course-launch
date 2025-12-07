import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, CheckCircle2, BookOpen, Heart } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const coursesData: Record<string, any> = {
  "1": {
    title: "ג'ל ולק ג'ל",
    description: "למדי את הטכניקות של ג'ל ולק ג'ל בליווי אישי וצמוד.",
    longDescription: "בקורס הפרטי הזה תלמדי לבנות ציפורניים בטכניקת ג'ל ולק ג'ל. נלמד את כל השלבים יחד, בקצב שלך, עם כל הזמן שאת צריכה להבין ולתרגל. הקורס מותאם אישית לרמה שלך.",
    duration: "מספר מפגשים אישיים",
    level: "למתחילות",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&h=600&fit=crop",
    modules: [
      "היכרות עם חומרי ג'ל ולק ג'ל",
      "הכנת הציפורן למריחה",
      "טכניקות מריחה",
      "עבודה עם מנורת UV/LED",
      "תיקון ציפורניים",
      "שילובי צבעים וגימורים",
    ],
    whatYouGet: [
      "ליווי אישי אחד על אחד",
      "תרגול מעשי בכל מפגש",
      "זמינות לשאלות גם בין המפגשים",
      "חומרים לתרגול בזמן הקורס",
    ],
  },
  "2": {
    title: "נייל ארט ועיצוב",
    description: "פתחי את היצירתיות שלך עם טכניקות עיצוב בקורס פרטי.",
    longDescription: "קורס פרטי שבו נלמד יחד טכניקות נייל ארט מגוונות. נתאים את הקצב והתוכן בדיוק למה שאת רוצה ללמוד ולהתפתח בו.",
    duration: "מספר מפגשים אישיים",
    level: "למתקדמות",
    image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=1200&h=600&fit=crop",
    modules: [
      "עקרונות העיצוב והצבע",
      "טכניקות ציור על ציפורן",
      "עבודה עם סטמפינג",
      "שימוש באביזרים",
      "עיצובים גיאומטריים",
      "גרדיאנט ואומברה",
    ],
    whatYouGet: [
      "ליווי אישי אחד על אחד",
      "תרגול מעשי בכל מפגש",
      "זמינות לשאלות גם בין המפגשים",
      "חומרים לתרגול בזמן הקורס",
    ],
  },
  "3": {
    title: "הארכות ציפורניים",
    description: "למדי טכניקות בניה והארכה עם תרגול מעשי.",
    longDescription: "קורס פרטי ללימוד טכניקות הארכה. נלמד יחד בקצב שלך, עם דגש על תרגול מעשי והבנה מעמיקה של כל שלב.",
    duration: "מספר מפגשים אישיים",
    level: "למתקדמות",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=1200&h=600&fit=crop",
    modules: [
      "סוגי הארכות ושימושים",
      "בניה על תבנית",
      "בניה על טיפסים",
      "יצירת צורות",
      "פילינג והסרה נכונה",
      "תחזוקה ותיקונים",
    ],
    whatYouGet: [
      "ליווי אישי אחד על אחד",
      "תרגול מעשי בכל מפגש",
      "זמינות לשאלות גם בין המפגשים",
      "חומרים לתרגול בזמן הקורס",
    ],
  },
};

const CourseDetail = () => {
  const { id } = useParams();
  const course = coursesData[id || "1"];

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">הקורס לא נמצא</h1>
          <Button asChild>
            <Link to="/">חזרה לדף הבית</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" dir="rtl">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 py-8">
          <Button asChild variant="ghost" className="mb-6 hover:bg-secondary/80">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4 rotate-180" />
              חזרה לדף הבית
            </Link>
          </Button>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 animate-fade-in-up">
              <Badge className="gradient-primary text-primary-foreground">
                {course.level}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold">{course.title}</h1>
              <p className="text-xl text-muted-foreground">{course.description}</p>
              
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  <span>קורס פרטי אחד על אחד</span>
                </div>
              </div>

              <div className="pt-4">
                <Button size="lg" className="gradient-primary shadow-glow rounded-full px-8">
                  צרי קשר לפרטים
                </Button>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="absolute inset-0 gradient-card rounded-3xl opacity-50 blur-2xl" />
              <img
                src={course.image}
                alt={course.title}
                className="relative rounded-3xl shadow-card w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <Card className="shadow-card animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <BookOpen className="w-6 h-6 text-primary" />
                    אודות הקורס
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {course.longDescription}
                  </p>
                </CardContent>
              </Card>

              {/* Modules */}
              <Card className="shadow-card animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <CardHeader>
                  <CardTitle className="text-2xl">מה נלמד</CardTitle>
                  <CardDescription>
                    נושאים מרכזיים שנעבור עליהם יחד
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {course.modules.map((module: string, index: number) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                      >
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg gradient-primary text-primary-foreground text-sm font-semibold shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{module}</p>
                        </div>
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* What You Get */}
              <Card className="shadow-card animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Heart className="w-5 h-5 text-primary" />
                    מה מקבלים
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {course.whatYouGet.map((item: string, index: number) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* CTA Card */}
              <Card className="shadow-glow gradient-card border-primary/20 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <CardHeader>
                  <CardTitle className="text-xl">רוצה לשמוע עוד?</CardTitle>
                  <CardDescription>
                    בואי נדבר ונראה אם הקורס מתאים לך
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full gradient-primary shadow-lg rounded-full">
                    צרי קשר
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    בלי התחייבות, רק שיחה
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;