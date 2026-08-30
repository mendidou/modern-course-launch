import { Asterisk, Loader, Sparkle } from "lucide-react";
import type { CSSProperties } from "react";

/**
 * Positions hug the outer margins and the top and bottom bands, so the marks
 * stay off the text column. top / left are percentages of the section, size is
 * in rem.
 */
const items = [
  { Icon: Sparkle, top: 12, left: 4, size: 2.5, duration: 13, delay: 0 },
  { Icon: Asterisk, top: 44, left: 7, size: 3.5, duration: 15, delay: 3 },
  { Icon: Loader, top: 74, left: 3, size: 2, duration: 16, delay: 1.5 },
  { Icon: Sparkle, top: 92, left: 11, size: 1.75, duration: 12, delay: 0.8 },
  { Icon: Loader, top: 5, left: 34, size: 2.25, duration: 17, delay: 2.2 },
  { Icon: Sparkle, top: 94, left: 52, size: 2, duration: 14, delay: 4 },
  { Icon: Asterisk, top: 6, left: 68, size: 2.75, duration: 18, delay: 1 },
  { Icon: Sparkle, top: 22, left: 90, size: 2.5, duration: 16, delay: 2.6 },
  { Icon: Loader, top: 58, left: 95, size: 1.75, duration: 13, delay: 3.4 },
  { Icon: Asterisk, top: 88, left: 88, size: 2, duration: 15, delay: 0.4 },
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
