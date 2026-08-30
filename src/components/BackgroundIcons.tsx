import { Droplet, Flower2, Gem, Heart, Sparkle, Star } from "lucide-react";
import type { CSSProperties } from "react";

/** top / left are percentages of the section, size is in rem. */
const items = [
  { Icon: Heart, top: 12, left: 6, size: 3.5, duration: 13, delay: 0 },
  { Icon: Sparkle, top: 62, left: 12, size: 2.5, duration: 16, delay: 1.5 },
  { Icon: Flower2, top: 28, left: 22, size: 3, duration: 15, delay: 3 },
  { Icon: Droplet, top: 78, left: 32, size: 2.25, duration: 12, delay: 0.8 },
  { Icon: Star, top: 8, left: 46, size: 2.75, duration: 17, delay: 2.2 },
  { Icon: Gem, top: 70, left: 58, size: 2.5, duration: 14, delay: 4 },
  { Icon: Sparkle, top: 34, left: 72, size: 3.25, duration: 18, delay: 1 },
  { Icon: Heart, top: 84, left: 80, size: 2.25, duration: 13, delay: 3.4 },
  { Icon: Flower2, top: 16, left: 88, size: 3, duration: 16, delay: 2.6 },
  { Icon: Star, top: 52, left: 94, size: 2, duration: 15, delay: 0.4 },
];

/**
 * Decorative layer of slowly drifting icons, sized as a share of the section it
 * sits in. Purely visual: hidden from assistive tech and click-through.
 */
export const BackgroundIcons = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    {items.map(({ Icon, top, left, size, duration, delay }, index) => (
      <Icon
        key={index}
        className="animate-drift absolute text-primary/[0.07]"
        style={
          {
            top: `${top}%`,
            left: `${left}%`,
            width: `${size}rem`,
            height: `${size}rem`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          } as CSSProperties
        }
      />
    ))}
  </div>
);
