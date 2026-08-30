import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { whatsappLink } from "@/data/contact";

const links = [
  { href: "#courses", label: "הקורסים" },
  { href: "#why", label: "למה פרטי" },
  { href: "#faq", label: "שאלות נפוצות" },
  { href: "#contact", label: "יצירת קשר" },
];

/** Floating pill navigation, sticky at the top of the page. */
export const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  /* Absolute so the anchors also work from a course page, where the sections do not exist. */
  const home = import.meta.env.BASE_URL;

  return (
    <header className="sticky top-0 z-50 pt-3 pb-2 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl px-4" dir="rtl">
        <nav className="mx-auto flex max-w-3xl items-center justify-between gap-3 rounded-full border border-border bg-card px-4 py-2 shadow-card">
          <Link to="/" className="wordmark text-xl leading-none text-primary">
            rbknails
          </Link>

          <div className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={`${home}${link.href}`}
                className="hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <Button asChild size="sm" className="gradient-primary shadow-glow rounded-full px-4">
              <a href={whatsappLink()} target="_blank" rel="noreferrer">
                בואי נדבר
              </a>
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full md:hidden"
                  aria-label="תפריט"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64" dir="rtl">
                <SheetTitle className="wordmark text-xl text-primary">rbknails</SheetTitle>
                <nav className="mt-8 flex flex-col gap-1">
                  {links.map((link) => (
                    <a
                      key={link.href}
                      href={`${home}${link.href}`}
                      onClick={() => setOpen(false)}
                      className="rounded-2xl px-3 py-3 text-lg font-medium transition-colors hover:bg-secondary"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};
