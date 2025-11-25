import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Clock, Users, Star, CheckCircle2, PlayCircle, BookOpen, Award } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const coursesData: Record<string, any> = {
  "1": {
    title: "Développement Web Moderne",
    description: "Maîtrisez React, TypeScript et les dernières technologies web pour créer des applications modernes et performantes.",
    longDescription: "Dans ce cours complet, vous apprendrez à construire des applications web modernes en utilisant les technologies les plus récentes. Vous découvrirez React, TypeScript, et bien plus encore à travers des projets pratiques et concrets.",
    duration: "12 semaines",
    students: 1234,
    level: "Intermédiaire",
    rating: 4.8,
    reviews: 342,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop",
    price: "149€",
    instructor: "Marie Dubois",
    modules: [
      "Introduction à React et TypeScript",
      "Components et Props avancés",
      "State Management avec Redux",
      "Hooks et Custom Hooks",
      "API Integration et Async",
      "Performance et Optimisation",
      "Testing avec Jest et React Testing Library",
      "Déploiement et CI/CD",
    ],
    skills: [
      "React & TypeScript",
      "State Management",
      "API Integration",
      "Testing",
      "Deployment",
      "Best Practices",
    ],
  },
  "2": {
    title: "Design UI/UX Avancé",
    description: "Apprenez à créer des interfaces utilisateur magnifiques et intuitives avec les principes du design moderne.",
    longDescription: "Ce cours vous guidera à travers les fondamentaux du design UI/UX jusqu'aux techniques avancées. Vous apprendrez à créer des expériences utilisateur exceptionnelles.",
    duration: "8 semaines",
    students: 892,
    level: "Débutant",
    rating: 4.9,
    reviews: 256,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop",
    price: "99€",
    instructor: "Pierre Martin",
    modules: [
      "Principes du Design",
      "Figma Fundamentals",
      "Design Systems",
      "Prototypage",
      "User Research",
      "Accessibilité",
    ],
    skills: [
      "Figma",
      "Design Systems",
      "Prototyping",
      "UX Research",
      "Accessibility",
    ],
  },
};

const CourseDetail = () => {
  const { id } = useParams();
  const course = coursesData[id || "1"];

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Cours non trouvé</h1>
          <Button asChild>
            <Link to="/">Retour à l'accueil</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 py-8">
          <Button asChild variant="ghost" className="mb-6 hover:bg-secondary/80">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Retour aux cours
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
                  <span className="text-muted-foreground">({course.reviews} avis)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>{course.students} étudiants</span>
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
                  <PlayCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Commencer maintenant
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
                    À propos de ce cours
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
                  <CardTitle className="text-2xl">Programme du cours</CardTitle>
                  <CardDescription>
                    {course.modules.length} modules pour maîtriser {course.title.toLowerCase()}
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
                  <CardTitle className="text-xl">Votre instructeur</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-2xl font-bold text-primary-foreground">
                      {course.instructor.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-lg">{course.instructor}</p>
                      <p className="text-sm text-muted-foreground">Expert certifié</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Skills */}
              <Card className="shadow-card animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Award className="w-5 h-5 text-primary" />
                    Compétences acquises
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
                  <CardTitle className="text-xl">Prêt à commencer?</CardTitle>
                  <CardDescription>
                    Rejoignez {course.students} étudiants
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
                    {course.price}
                  </div>
                  <Button className="w-full gradient-primary shadow-lg rounded-full">
                    S'inscrire maintenant
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Garantie satisfait ou remboursé 30 jours
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
