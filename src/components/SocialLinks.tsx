import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/contact";

/** TikTok has no lucide icon, so the glyph is inlined at the same 24px grid. */
const TikTok = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 1 1 .77-5.06v-3.1a5.67 5.67 0 0 0-.77-.05A5.67 5.67 0 1 0 15.54 15.4V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.29 4.29 0 0 1-3.24-1.48z" />
  </svg>
);

const links = [
  { href: "https://www.instagram.com/rbknails/", label: "אינסטגרם", Icon: Instagram },
  { href: "https://www.facebook.com/RBKNAiL", label: "פייסבוק", Icon: Facebook },
  { href: "https://www.tiktok.com/@rbknail", label: "טיקטוק", Icon: TikTok },
  { href: whatsappLink(), label: "וואטסאפ", Icon: MessageCircle },
];

export const SocialLinks = ({ className }: { className?: string }) => (
  <div className={className} dir="ltr">
    {links.map(({ href, label, Icon }) => (
      <a
        key={href}
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={label}
        title={label}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-card transition-colors hover:text-primary"
      >
        <Icon className="h-5 w-5" />
      </a>
    ))}
  </div>
);
