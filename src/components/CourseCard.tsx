import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  image: string;
  comingSoon?: boolean;
}

export const CourseCard = ({ id, title, description, duration, level, image, comingSoon }: CourseCardProps) => {
  return (
    <Card
      className={`group overflow-hidden border-border/40 backdrop-blur-sm bg-card/80 transition-all duration-500 animate-fade-in-up ${
        comingSoon ? "opacity-90" : "hover:shadow-glow hover:-translate-y-2"
      }`}
      dir="rtl"
    >
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <div className="absolute inset-0 gradient-card opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            comingSoon ? "grayscale opacity-60" : "group-hover:scale-110"
          }`}
        />
        <Badge
          className={`absolute top-4 left-4 z-20 ${
            comingSoon ? "bg-muted text-muted-foreground" : "bg-primary text-primary-foreground"
          }`}
        >
          {comingSoon ? "בקרוב" : level}
        </Badge>
      </div>
      <CardHeader>
        <CardTitle
          className={`text-xl transition-colors duration-300 ${comingSoon ? "" : "group-hover:text-primary"}`}
        >
          {title}
        </CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        {comingSoon ? (
          <Button disabled variant="secondary" className="w-full cursor-not-allowed">
            בקרוב
          </Button>
        ) : (
          <Button
            asChild
            className="w-full group/btn gradient-primary border-0 shadow-lg hover:shadow-glow transition-all duration-300"
          >
            <Link to={`/course/${id}`} className="flex items-center justify-center gap-2">
              למידע נוסף
              <ArrowRight className="w-4 h-4 group-hover/btn:-translate-x-1 transition-transform" />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
