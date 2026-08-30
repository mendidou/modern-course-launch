import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#why", label: "למה פרטי" },
  { href: "#courses", label: "הקורסים" },
  { href: "#contact", label: "יצירת קשר" },
];

/** Floating pill navigation, sticky at the top of the page. */
export const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 pt-3 pb-2 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4" dir="rtl">
        <nav className="mx-auto flex max-w-3xl items-center justify-between gap-4 rounded-full border border-border bg-card px-4 py-2 shadow-card">
          <Link to="/" className="font-semibold tracking-tight">
            rbknails
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-foreground transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          <Button asChild size="sm" className="rounded-full px-4">
            <a href="#contact">בואי נדבר</a>
          </Button>
        </nav>
      </div>
    </header>
  );
};
