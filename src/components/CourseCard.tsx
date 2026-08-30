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
  /** CSS object-position for the cover crop. The photos are portrait and the card
      is landscape, so the default 50% 50% cuts the nails off. */
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
      className="group relative flex h-full min-h-[25rem] flex-col justify-end overflow-hidden rounded-3xl border border-border shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
      dir="rtl"
    >
      <img
        src={image}
        alt={title}
        style={{ objectPosition }}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />

      {/* Opaque along the bottom, gone by the middle of the card. */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 via-50% to-transparent" />

      <Badge className="absolute top-4 left-4 rounded-full border-0 bg-white/90 font-normal text-foreground backdrop-blur-sm">
        {comingSoon ? "בקרוב" : level}
      </Badge>

      <div className="relative flex flex-col gap-3 p-6 text-white">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-white/80">{description}</p>

        <div className="flex items-center gap-1.5 text-sm text-white/70">
          <Clock className="w-4 h-4" />
          <span>{duration}</span>
        </div>

        <div className="pt-2">
          {comingSoon ? (
            <Button
              disabled
              className="w-full rounded-2xl border border-white/30 bg-white/10 text-white backdrop-blur-sm disabled:opacity-100"
            >
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
