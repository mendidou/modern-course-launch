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
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card animate-fade-in-up"
      dir="rtl"
    >
      <div className="relative h-52 md:h-64 overflow-hidden border-b border-border">
        <img
          src={image}
          alt={title}
          style={{ objectPosition }}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            comingSoon ? "grayscale opacity-70" : "group-hover:scale-[1.04]"
          }`}
        />
        <Badge
          variant={comingSoon ? "secondary" : "default"}
          className="absolute top-3 left-3 rounded-full font-normal"
        >
          {comingSoon ? "בקרוב" : level}
        </Badge>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>

        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>{duration}</span>
        </div>

        <div className="mt-auto pt-4">
          {comingSoon ? (
            <Button disabled variant="secondary" className="w-full rounded-lg">
              בקרוב
            </Button>
          ) : (
            <Button asChild className="w-full rounded-lg group/btn">
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
