import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/data/faq";

export const Faq = () => {
  return (
    <Accordion type="single" collapsible className="mx-auto max-w-3xl rounded-3xl border border-border bg-card px-6 shadow-card" dir="rtl">
      {faq.map((item, index) => (
        <AccordionItem key={item.question} value={`item-${index}`} className="border-border">
          <AccordionTrigger className="gap-4 py-5 text-start text-lg font-medium hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
