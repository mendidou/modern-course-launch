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
  /** CSS object-position for the cover crop. The photos are portrait, the card is
      landscape, so the default 50% 50% cuts the nails off. */
  objectPosition?: string;
  comingSoon?: boolean;
}

export const CourseCard = ({
  id,
  title,
  description,
  duration,
  level,
  image,
  objectPosition = "50% 50%",
  comingSoon,
}: CourseCardProps) => {
  return (
    <article
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border gradient-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
      dir="rtl"
    >
      <div className="relative h-52 md:h-64 overflow-hidden border-b border-border">
        <img
          src={image}
          alt={title}
          style={{ objectPosition }}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <Badge
          variant={comingSoon ? "secondary" : "default"}
          className="absolute top-3 left-3 rounded-full font-normal"
        >
          {comingSoon ? "בקרוב" : level}
        </Badge>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className={`text-lg font-semibold ${comingSoon ? "text-muted-foreground" : ""}`}>
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>

        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>{duration}</span>
        </div>

        <div className="mt-auto pt-4">
          {comingSoon ? (
            <Button disabled variant="secondary" className="w-full rounded-2xl">
              בקרוב
            </Button>
          ) : (
            <Button asChild className="w-full gradient-primary shadow-glow rounded-2xl group/btn">
              <Link to={`/course/${id}`} className="flex items-center justify-center gap-2">
                למידע נוסף
                <ArrowRight className="w-4 h-4 group-hover/btn:-translate-x-1 transition-transform" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};
