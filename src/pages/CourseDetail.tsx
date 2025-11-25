import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Users, Star, CheckCircle2, PlayCircle, BookOpen, Award } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const coursesData: Record<string, any> = {
  "1": {
    title: "ג'ל ולק ג'ל",
    description: "למדי את כל הטכניקות המתקדמות של ג'ל ולק ג'ל. קורס מקצועי ומקיף לבניית קריירה מוצלחת.",
    longDescription: "בקורס המקיף הזה תלמדי לבנות ציפורניים מושלמות בטכניקת ג'ל ולק ג'ל. נלמד את כל השלבים ממריחה ראשונה ועד לגימור מושלם. הקורס כולל תרגול מעשי על דוגמות ועל לקוחות אמיתיות.",
    duration: "6 שבועות",
    students: 1234,
    level: "מתחילים",
    rating: 4.9,
    reviews: 342,
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&h=600&fit=crop",
    price: "₪1,499",
    instructor: "רחל כהן",
    modules: [
      "היכרות עם חומרי ג'ל ולק ג'ל",
      "הכנת הציפורן למריחה",
      "טכניקות מריחה מושלמות",
      "עבודה עם מנורת UV/LED",
      "תיקון ציפורניים שבורות",
      "שילובי צבעים וגימורים",
      "טיפים למניעת נזק לציפורן",
      "בניית תיק עבודות מקצועי",
    ],
    skills: [
      "ג'ל מקצועי",
      "לק ג'ל",
      "הכנת ציפורן",
      "טכניקות מריחה",
      "תיקון ציפורניים",
      "שילובי צבעים",
    ],
  },
  "2": {
    title: "נייל ארט ועיצוב ציפורניים",
    description: "פתחי את היצירתיות שלך עם טכניקות נייל ארט מתקדמות. מצורות בסיסיות ועד עיצובים מורכבים.",
    longDescription: "קורס מתקדם המיועד למי שמעוניינת להעמיק את הידע בעיצוב ציפורניים. נלמד טכניקות נייל ארט מגוונות, עבודה עם אביזרים ויצירת עיצובים ייחודיים.",
    duration: "4 שבועות",
    students: 892,
    level: "מתקדמים",
    rating: 4.8,
    reviews: 256,
    image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=1200&h=600&fit=crop",
    price: "₪1,299",
    instructor: "שרה לוי",
    modules: [
      "עקרונות העיצוב והצבע",
      "טכניקות ציור על ציפורן",
      "עבודה עם סטמפינג",
      "שימוש באביזרים ואבני חן",
      "עיצובים גיאומטריים",
      "עיצובי פרחים ותחרה",
      "גרדיאנט ואומברה",
      "עיצובים עונתיים וחגיגיים",
    ],
    skills: [
      "ציור על ציפורן",
      "סטמפינג",
      "אבני חן ודקורציה",
      "גרדיאנט",
      "עיצובים מורכבים",
    ],
  },
  "3": {
    title: "הארכות ציפורניים",
    description: "שלטי בטכניקות הבניה ופילינג מקצועיות. קורס מעשי עם תרגול אינטנסיבי.",
    longDescription: "קורס מקיף המלמד את כל טכניקות ההארכה המודרניות. מבניה על תבנית ועד להארכות על טיפסים. נלמד להתאים את הטכניקה המתאימה לכל לקוחה.",
    duration: "8 שבועות",
    students: 2156,
    level: "מתקדמים",
    rating: 4.9,
    reviews: 445,
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=1200&h=600&fit=crop",
    price: "₪1,899",
    instructor: "מיכל אברהם",
    modules: [
      "סוגי הארכות ושימושים",
      "בניה על תבנית",
      "בניה על טיפסים",
      "יצירת צורות מושלמות",
      "פילינג והסרה נכונה",
      "חיזוק ציפורן חלשה",
      "תיקונים מהירים",
      "תחזוקה ארוכת טווח",
    ],
    skills: [
      "הארכות על תבנית",
      "הארכות על טיפס",
      "פילינג מקצועי",
      "בניה ועיצוב",
      "תיקונים",
    ],
  },
  "4": {
    title: "מניקור ופדיקור מקצועי",
    description: "קורס מקיף בטכניקות מניקור ופדיקור ברמה גבוהה. כולל טיפול בכף הרגל והיד.",
    longDescription: "למדי לבצע מניקור ופדיקור ברמה מקצועית. הקורס כולל היגיינה, טכניקות חיתוך וטיפול בעור, לצד עבודה מעשית.",
    duration: "5 שבועות",
    students: 1567,
    level: "מתחילים",
    rating: 4.7,
    reviews: 298,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&h=600&fit=crop",
    price: "₪999",
    instructor: "ענת דוד",
    modules: [
      "עקרונות היגיינה וחיטוי",
      "טכניקות חיתוך ציפורניים",
      "טיפול בעור וקוטיקולה",
      "מריחת לק מושלמת",
      "פדיקור רפואי בסיסי",
      "טיפול בציפורן חודרנית",
    ],
    skills: [
      "מניקור מקצועי",
      "פדיקור מקצועי",
      "חיתוך מדויק",
      "טיפול בעור",
      "היגיינה",
    ],
  },
  "5": {
    title: "ציפורני פוליג'ל",
    description: "טכניקת הפוליג'ל החדשנית. למדי לעבוד עם החומר המתקדם ביותר בתחום.",
    longDescription: "פוליג'ל הוא החומר החדשני ביותר בעולם הציפורניים. קל יותר לעבודה, חזק יותר ונראה טבעי יותר. למדי את כל הטכניקות המתקדמות.",
    duration: "6 שבועות",
    students: 1890,
    level: "מתקדמים",
    rating: 4.9,
    reviews: 387,
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=1200&h=600&fit=crop",
    price: "₪1,699",
    instructor: "לירון ישראלי",
    modules: [
      "היכרות עם חומר הפוליג'ל",
      "הכנת הציפורן לפוליג'ל",
      "בניה על תבנית",
      "בניה על טיפס",
      "עיצוב צורות מושלמות",
      "פילינג ותחזוקה",
      "שילוב עם טכניקות נוספות",
      "טיפים למניעת הרמה",
    ],
    skills: [
      "עבודה עם פוליג'ל",
      "בניה מושלמת",
      "עיצוב צורות",
      "פילינג",
      "תחזוקה",
    ],
  },
  "6": {
    title: "פתיחת עסק לציפורניים",
    description: "כל מה שצריך לדעת על פתיחת סלון או עסק ביתי מצליח. כולל שיווק וניהול לקוחות.",
    longDescription: "קורס ייחודי המלמד את כל ההיבטים העסקיים של פתיחת עסק לציפורניים. משיווק ומיתוג ועד ניהול פיננסי ושימור לקוחות.",
    duration: "4 שבועות",
    students: 1123,
    level: "מתחילים",
    rating: 4.8,
    reviews: 215,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
    price: "₪899",
    instructor: "יעל מזרחי",
    modules: [
      "בניית תוכנית עסקית",
      "רישוי ואישורים",
      "מיתוג ושיווק דיגיטלי",
      "ניהול רשתות חברתיות",
      "תמחור שירותים",
      "ניהול לקוחות ומערכת תורים",
      "ניהול פיננסי בסיסי",
      "שירות לקוחות מעולה",
    ],
    skills: [
      "תכנון עסקי",
      "שיווק דיגיטלי",
      "מיתוג אישי",
      "ניהול לקוחות",
      "תמחור",
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
              חזרה לכל הקורסים
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
                  <Star className="w-5 h-5 fill-primary text-primary" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-muted-foreground">({course.reviews} ביקורות)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>{course.students} תלמידות</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
                  {course.price}
                </div>
                <Button size="lg" className="gradient-primary shadow-glow rounded-full px-8 group">
                  <PlayCircle className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  התחילי עכשיו
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
                  <CardTitle className="text-2xl">תוכנית הלימודים</CardTitle>
                  <CardDescription>
                    {course.modules.length} מודולים ללמידה מעמיקה של {course.title}
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
              {/* Instructor */}
              <Card className="shadow-card animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <CardHeader>
                  <CardTitle className="text-xl">המדריכה שלך</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-2xl font-bold text-primary-foreground">
                      {course.instructor.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-lg">{course.instructor}</p>
                      <p className="text-sm text-muted-foreground">מומחית מוסמכת</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Skills */}
              <Card className="shadow-card animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Award className="w-5 h-5 text-primary" />
                    מיומנויות שתרכשי
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {course.skills.map((skill: string, index: number) => (
                      <Badge key={index} variant="secondary" className="px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CTA Card */}
              <Card className="shadow-glow gradient-card border-primary/20 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <CardHeader>
                  <CardTitle className="text-xl">מוכנה להתחיל?</CardTitle>
                  <CardDescription>
                    הצטרפי ל-{course.students} תלמידות
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
                    {course.price}
                  </div>
                  <Button className="w-full gradient-primary shadow-lg rounded-full">
                    הרשמה לקורס
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    החזר כספי מלא תוך 30 יום
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
