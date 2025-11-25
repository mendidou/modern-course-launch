import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/CourseCard";
import { ArrowRight, BookOpen, Award, Users, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const courses = [
  {
    id: "1",
    title: "Développement Web Moderne",
    description: "Maîtrisez React, TypeScript et les dernières technologies web pour créer des applications modernes et performantes.",
    duration: "12 semaines",
    students: 1234,
    level: "Intermédiaire",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
  },
  {
    id: "2",
    title: "Design UI/UX Avancé",
    description: "Apprenez à créer des interfaces utilisateur magnifiques et intuitives avec les principes du design moderne.",
    duration: "8 semaines",
    students: 892,
    level: "Débutant",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
  },
  {
    id: "3",
    title: "Intelligence Artificielle",
    description: "Plongez dans le monde de l'IA avec des projets pratiques en machine learning et deep learning.",
    duration: "16 semaines",
    students: 2156,
    level: "Avancé",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
  },
  {
    id: "4",
    title: "Marketing Digital",
    description: "Développez vos compétences en marketing digital, SEO et stratégies de croissance pour booster votre entreprise.",
    duration: "10 semaines",
    students: 1567,
    level: "Intermédiaire",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
  },
  {
    id: "5",
    title: "Data Science & Analytics",
    description: "Analysez et visualisez des données complexes avec Python, pandas et les outils de data science modernes.",
    duration: "14 semaines",
    students: 1890,
    level: "Intermédiaire",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
  },
  {
    id: "6",
    title: "Cybersécurité",
    description: "Protégez les systèmes et les données avec les meilleures pratiques en sécurité informatique et ethical hacking.",
    duration: "12 semaines",
    students: 1123,
    level: "Avancé",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop",
  },
];

const stats = [
  { icon: BookOpen, value: "100+", label: "Cours en ligne" },
  { icon: Users, value: "50K+", label: "Étudiants actifs" },
  { icon: Award, value: "95%", label: "Taux de satisfaction" },
  { icon: Sparkles, value: "24/7", label: "Support disponible" },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 py-24 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <div className="inline-block">
              <Badge className="gradient-primary text-primary-foreground px-4 py-1.5 text-sm font-medium shadow-glow">
                ✨ Plateforme d'apprentissage nouvelle génération
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Apprenez à votre
              <span className="gradient-primary bg-clip-text text-transparent"> rythme</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez des cours en ligne de qualité supérieure avec des instructeurs experts et une communauté dynamique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="gradient-primary shadow-glow text-lg px-8 py-6 rounded-full group">
                Commencer gratuitement
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-2 hover:bg-secondary/80">
                Parcourir les cours
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
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              Nos cours
              <span className="gradient-primary bg-clip-text text-transparent"> populaires</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choisissez parmi notre sélection de cours conçus par des experts pour vous aider à atteindre vos objectifs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={course.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <CourseCard {...course} />
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg border-2 hover:bg-secondary/80">
              Voir tous les cours
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              Prêt à commencer votre
              <span className="gradient-primary bg-clip-text text-transparent"> aventure?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Rejoignez des milliers d'étudiants qui transforment leur carrière avec nos cours premium.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="gradient-primary shadow-glow text-lg px-8 py-6 rounded-full">
                Créer un compte gratuit
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-2">
                Contacter un conseiller
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p className="text-sm">© 2024 LearnHub. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
