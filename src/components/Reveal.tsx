import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
}

/**
 * Fades and lifts its children in as they scroll into view.
 *
 * The animation is scroll-driven CSS (`animation-timeline: view()`), so there is
 * no observer to miss and no state that can leave content stuck at opacity 0.
 * Browsers without support render the children normally.
 */
export const Reveal = ({ children, className }: RevealProps) => (
  <div className={cn("reveal", className)}>{children}</div>
);
