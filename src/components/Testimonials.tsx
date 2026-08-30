import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { testimonials } from "@/data/testimonials";

const AUTOPLAY_MS = 4500;

export const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
    const timer = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{ align: "start", loop: true, direction: "rtl" }}
      className="max-w-4xl mx-auto"
      dir="rtl"
    >
      <CarouselContent>
        {testimonials.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2">
            <div className="h-full p-6 rounded-3xl bg-card/80 shadow-card flex flex-col gap-3">
              <Quote className="w-7 h-7 text-primary shrink-0" />
              <p className="text-xl font-medium flex-1">{item.text}</p>
              <p className="text-sm text-muted-foreground" dir="ltr">
                @{item.handle}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
