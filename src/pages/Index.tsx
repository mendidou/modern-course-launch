import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/CourseCard";
import { ArrowRight, Heart, Clock, UserCheck, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const courses = [
  {
    id: "1",
    title: "ג'ל ולק ג'ל",
    description: "למדי את הטכניקות של ג'ל ולק ג'ל בליווי אישי וצמוד.",
    duration: "מספר מפגשים",
    level: "למתחילות",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=400&fit=crop",
  },
  {
    id: "2",
    title: "נייל ארט ועיצוב",
    description: "פתחי את היצירתיות שלך עם טכניקות עיצוב בקורס פרטי.",
    duration: "מספר מפגשים",
    level: "למתקדמות",
    image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800&h=400&fit=crop",
  },
  {
    id: "3",
    title: "הארכות ציפורניים",
    description: "למדי טכניקות בניה והארכה עם תרגול מעשי.",
    duration: "מספר מפגשים",
    level: "למתקדמות",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800&h=400&fit=crop",
  },
];

const benefits = [
  { icon: UserCheck, title: "תשומת לב מלאה", desc: "כל המפגש מוקדש רק לך ולהתקדמות שלך" },
  { icon: Clock, title: "בקצב שלך", desc: "לא צריך לרוץ או לחכות - מתקדמים יחד" },
  { icon: Heart, title: "ליווי אישי", desc: "אני כאן בשבילך גם בין המפגשים" },
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
                קורסים פרטיים ואישיים
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              למדי ציפורניים
              <span className="gradient-primary bg-clip-text text-transparent"> בקצב שלך</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              קורסים פרטיים אחד על אחד, עם ליווי אישי וצמוד. 
              אני מאמינה שהדרך הטובה ביותר ללמוד היא בסביבה אינטימית 
              שמאפשרת לך לקבל את כל הכלים שאת צריכה להצליח.
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
              <span className="gradient-primary bg-clip-text text-transparent"> פרטי?</span>
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

      {/* Courses Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up" dir="rtl">
            <h2 className="text-4xl md:text-5xl font-bold">
              הקורסים
              <span className="gradient-primary bg-clip-text text-transparent"> שלי</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              כל קורס מותאם אישית לרמה ולצרכים שלך
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
              <span className="gradient-primary bg-clip-text text-transparent"> עוד?</span>
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