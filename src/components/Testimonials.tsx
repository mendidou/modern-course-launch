import { testimonials } from "@/data/testimonials";

export const Testimonials = () => {
  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" dir="rtl">
      {testimonials.map((item, index) => (
        <li
          key={`${item.handle}-${index}`}
          className="rounded-2xl border border-border bg-card p-5 flex flex-col gap-3"
        >
          <p className="text-lg font-medium flex-1">{item.text}</p>
          <p className="text-sm text-muted-foreground" dir="ltr">
            @{item.handle}
          </p>
        </li>
      ))}
    </ul>
  );
};
