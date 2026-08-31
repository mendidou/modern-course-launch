import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { SiteHeader } from "@/components/SiteHeader";
import { BackgroundIcons } from "@/components/BackgroundIcons";
import { Reveal } from "@/components/Reveal";
import { About } from "@/components/About";
import { serviceGroups } from "@/data/services";
import { whatsappLink } from "@/data/contact";

const Services = () => {
  return (
    <div className="min-h-screen" dir="rtl">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <BackgroundIcons />
        <div className="relative container mx-auto max-w-6xl px-4 py-12 md:py-16">
          <Button asChild variant="ghost" className="mb-8 -mr-3 rounded-2xl">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4 rotate-180" />
              חזרה לדף הבית
            </Link>
          </Button>

          <div className="mx-auto max-w-2xl space-y-4 text-center animate-fade-in-up">
            <p className="eyebrow">שירותים</p>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
              תפריט הטיפולים.
            </h1>
            <div className="flex justify-center pt-2">
              <Button asChild size="lg" className="gradient-primary shadow-glow rounded-2xl px-7">
                <a href={whatsappLink()} target="_blank" rel="noreferrer">
                  לקביעת תור
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Groups */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {serviceGroups.map((group) => (
              <Reveal key={group.id} className="h-full">
                <div className="flex h-full flex-col gap-4 rounded-3xl border border-border gradient-card p-7 shadow-card">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl gradient-primary text-primary-foreground shadow-glow">
                    <group.icon className="h-5 w-5" />
                  </span>

                  <div>
                    <h2 className="text-xl font-semibold">{group.title}</h2>
                  </div>

                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-border bg-card/70 px-3 py-1 text-sm"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <About />

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl space-y-6 text-center">
            <p className="eyebrow">קביעת תור</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">רוצה לקבוע תור?</h2>
            <p className="text-lg text-muted-foreground">
              כתבי לי בוואטסאפ ונמצא יחד זמן שמתאים לך. אשלח לך גם את המחירון המלא.
            </p>
            <div className="flex justify-center">
              <Button asChild size="lg" className="gradient-primary shadow-glow rounded-2xl text-base px-7">
                <a href={whatsappLink()} target="_blank" rel="noreferrer">
                  לקביעת תור בוואטסאפ
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
