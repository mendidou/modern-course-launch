import { Reveal } from "@/components/Reveal";
import { BackgroundIcons } from "@/components/BackgroundIcons";
import aboutImage from "@/assets/detail-basic-manicure.jpg";

/**
 * Placeholder biography: everything here is already claimed elsewhere on the
 * site, so nothing new has to be true for it to hold. Swap it for Rebecca's own
 * words, and the photo for one of her.
 */
export const About = () => {
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden py-16 md:py-24">
      <BackgroundIcons />
      <div className="relative container mx-auto max-w-6xl px-4" dir="rtl">
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[0.8fr_1fr] lg:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] border border-border shadow-card">
              <img
                src={aboutImage}
                alt="רבקה בעבודה"
                loading="lazy"
                decoding="async"
                className="block aspect-[4/5] w-full object-cover object-[50%_40%]"
              />
            </div>
          </Reveal>

          <Reveal className="space-y-5">
            <p className="eyebrow">אודות רבקה</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              נעים להכיר, אני רבקה.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              אני מניקוריסטית, ומלמדת את המקצוע אחת על אחת. בסלון אני עובדת עם לקוחות
              קבועות על ידיים, רגליים, בנייה וגבות, ובקורס אני מעבירה את אותה שיטה הלאה:
              עבודה נקייה, בטוחה, ותוצאה שנשארת יפה לאורך זמן.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              אני מאמינה שהבסיס הוא מה שעושה את ההבדל. לפני כל טכניקה מתקדמת צריך להבין
              על מה עובדים ואיך עובדים נכון, וזה מה שאני מקפידה עליו בכל טיפול ובכל מפגש.
            </p>
            <p className="text-sm text-muted-foreground">
              את העבודות שלי אפשר לראות באינסטגרם{" "}
              <a
                href="https://www.instagram.com/rbknails/"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
                dir="ltr"
              >
                @rbknails
              </a>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
