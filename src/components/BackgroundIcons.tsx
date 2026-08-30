import { Asterisk, Loader, Sparkle } from "lucide-react";
import type { CSSProperties } from "react";

/**
 * Positions hug the outer margins and the top and bottom bands, so the marks
 * stay off the text column. top / left are percentages of the section, size is
 * in rem.
 */
const items = [
  { Icon: Sparkle, top: 14, left: 5, size: 2.5, duration: 13, delay: 0 },
  { Icon: Asterisk, top: 62, left: 4, size: 3, duration: 15, delay: 3 },
  { Icon: Loader, top: 7, left: 46, size: 2, duration: 17, delay: 2.2 },
  { Icon: Sparkle, top: 24, left: 92, size: 2.5, duration: 16, delay: 2.6 },
  { Icon: Asterisk, top: 84, left: 89, size: 2.25, duration: 15, delay: 0.4 },
];
/**
 * Decorative layer of slowly drifting marks: a four-point sparkle, an asterisk
 * and a radial burst, thin-stroked. Purely visual, so it is hidden from
 * assistive tech and does not take clicks.
 */
export const BackgroundIcons = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    {items.map(({ Icon, top, left, size, duration, delay }, index) => (
      <Icon
        key={index}
        strokeWidth={1.25}
        className="animate-drift absolute text-primary/20"
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
