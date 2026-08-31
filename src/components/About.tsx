import { Reveal } from "@/components/Reveal";
import { BackgroundIcons } from "@/components/BackgroundIcons";
import aboutImage from "@/assets/detail-basic-manicure.jpg";

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
              מעל עשור אני בעולם הציפורניים, מקבלת לקוחות במכון ומלמדת את המקצוע אחת על
              אחת. בקורס אני מעבירה בדיוק את הטכניקה ואת שיטת העבודה שאיתן אני עובדת כל יום.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              טכניקה נכונה לא לומדים מרחוק. יושבת לידך, מתקנת בזמן אמת, ומלווה אותך עד שאת
              מרגישה בטוחה מול כל לקוחה.
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
