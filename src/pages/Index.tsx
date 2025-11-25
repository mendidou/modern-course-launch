import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/CourseCard";
import { ArrowRight, BookOpen, Award, Users, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const courses = [
  {
    id: "1",
    title: "ג'ל ולק ג'ל",
    description: "למדי את כל הטכניקות המתקדמות של ג'ל ולק ג'ל. קורס מקצועי ומקיף לבניית קריירה מוצלחת.",
    duration: "6 שבועות",
    students: 1234,
    level: "מתחילים",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=400&fit=crop",
  },
  {
    id: "2",
    title: "נייל ארט ועיצוב ציפורניים",
    description: "פתחי את היצירתיות שלך עם טכניקות נייל ארט מתקדמות. מצורות בסיסיות ועד עיצובים מורכבים.",
    duration: "4 שבועות",
    students: 892,
    level: "מתקדמים",
    image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800&h=400&fit=crop",
  },
  {
    id: "3",
    title: "הארכות ציפורניים",
    description: "שלטי בטכניקות הבניה ופילינג מקצועיות. קורס מעשי עם תרגול אינטנסיבי.",
    duration: "8 שבועות",
    students: 2156,
    level: "מתקדמים",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800&h=400&fit=crop",
  },
  {
    id: "4",
    title: "מניקור ופדיקור מקצועי",
    description: "קורס מקיף בטכניקות מניקור ופדיקור ברמה גבוהה. כולל טיפול בכף הרגל והיד.",
    duration: "5 שבועות",
    students: 1567,
    level: "מתחילים",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=400&fit=crop",
  },
  {
    id: "5",
    title: "ציפורני פוליג'ל",
    description: "טכניקת הפוליג'ל החדשנית. למדי לעבוד עם החומר המתקדם ביותר בתחום.",
    duration: "6 שבועות",
    students: 1890,
    level: "מתקדמים",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&h=400&fit=crop",
  },
  {
    id: "6",
    title: "פתיחת עסק לציפורניים",
    description: "כל מה שצריך לדעת על פתיחת סלון או עסק ביתי מצליח. כולל שיווק וניהול לקוחות.",
    duration: "4 שבועות",
    students: 1123,
    level: "מתחילים",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
  },
];

const stats = [
  { icon: BookOpen, value: "50+", label: "קורסים מקצועיים" },
  { icon: Users, value: "15K+", label: "בוגרות מצליחות" },
  { icon: Award, value: "98%", label: "שביעות רצון" },
  { icon: Sparkles, value: "24/7", label: "תמיכה זמינה" },
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
                ✨ אקדמיה מקצועית לציפורניים
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              הצטרפי לאקדמיה
              <span className="gradient-primary bg-clip-text text-transparent"> המובילה</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              קורסים מקצועיים לציפורניים עם מדריכות מומחיות וקהילה תומכת. בואי ללמוד את המקצוע מהטובים ביותר
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="gradient-primary shadow-glow text-lg px-8 py-6 rounded-full group">
                התחילי בחינם
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-2 hover:bg-secondary/80">
                לכל הקורסים
              </Button>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border/50 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center space-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl gradient-primary text-primary-foreground mb-2">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up" dir="rtl">
            <h2 className="text-4xl md:text-5xl font-bold">
              הקורסים
              <span className="gradient-primary bg-clip-text text-transparent"> הפופולריים שלנו</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              בחרי מתוך מגוון קורסים מקצועיים שתוכננו על ידי מומחיות מובילות בתחום
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={course.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <CourseCard {...course} />
              </div>
            ))}
          </div>

          <div className="text-center mt-16" dir="rtl">
            <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg border-2 hover:bg-secondary/80">
              לכל הקורסים
              <ArrowRight className="mr-2 w-5 h-5" />
            </Button>
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
              מוכנה להתחיל
              <span className="gradient-primary bg-clip-text text-transparent"> את המסע?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              הצטרפי לאלפי תלמידות שכבר שינו את הקריירה שלהן עם הקורסים המקצועיים שלנו
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="gradient-primary shadow-glow text-lg px-8 py-6 rounded-full">
                הרשמה חינם
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-2">
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
            <p className="text-sm">© 2024 אקדמיה לציפורניים. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
