import { UserRound } from "lucide-react";
import { testimonials } from "@/data/testimonials";

/**
 * Marquee of quote cards. Three fit in the viewport at desktop width; the track
 * holds two copies of the list so the CSS translate can loop without a seam.
 */
export const Testimonials = () => {
  const track = [...testimonials, ...testimonials];

  return (
    /* 3 × 21rem + 2 × 1.5rem gap, so exactly three cards fit at desktop width. */
    <div className="marquee-mask mx-auto max-w-[66rem] overflow-hidden" dir="ltr">
      <ul className="animate-marquee flex w-max gap-6 py-2 hover:[animation-play-state:paused]">
        {track.map((item, index) => (
          <li
            key={index}
            aria-hidden={index >= testimonials.length}
            className="flex w-[19rem] shrink-0 flex-col gap-4 rounded-3xl border border-border gradient-card p-6 shadow-card sm:w-[21rem]"
            dir="rtl"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                <UserRound className="h-5 w-5" />
              </span>
              <span className="text-sm text-muted-foreground" dir="ltr">
                @{item.handle}
              </span>
            </div>
            <p className="text-lg font-medium">{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
