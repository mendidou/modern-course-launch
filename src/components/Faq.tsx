import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/data/faq";

export const Faq = () => {
  return (
    <Accordion type="single" collapsible className="border-t border-border" dir="rtl">
      {faq.map((item, index) => (
        <AccordionItem key={item.question} value={`item-${index}`} className="border-border">
          <AccordionTrigger className="gap-4 py-5 text-right text-lg font-medium hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="max-w-2xl pb-6 text-base leading-relaxed text-muted-foreground">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
