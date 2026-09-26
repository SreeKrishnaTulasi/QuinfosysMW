import { ChevronDown } from 'lucide-react';
import type { ContentItem } from '../data/content';

type AccordionListProps = {
  items: ContentItem[];
  defaultOpenFirst?: boolean;
};

export default function AccordionList({ items, defaultOpenFirst = true }: AccordionListProps) {
  return (
    <div className="divide-y divide-black/10 rounded-[2rem] border border-black/10 bg-white shadow-sm overflow-hidden">
      {items.map((item, index) => (
        <details key={item.id} id={item.id} open={defaultOpenFirst && index === 0} className="group scroll-mt-28">
          <summary className="flex cursor-pointer items-center justify-between gap-6 px-6 py-6 md:px-8">
            <div>
              {item.eyebrow && <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-zinc-400">{item.eyebrow}</p>}
              <h3 className="text-xl md:text-2xl font-medium tracking-tight text-black">{item.title}</h3>
            </div>
            <ChevronDown className="h-5 w-5 shrink-0 text-zinc-400 transition-transform group-open:rotate-180" strokeWidth={1.5} />
          </summary>
          <div className="px-6 pb-7 md:px-8">
            <p className="max-w-3xl text-sm md:text-base leading-7 text-zinc-600">{item.description}</p>
            {item.bullets && item.bullets.length > 0 && (
              <ul className="mt-5 grid gap-2 text-sm text-zinc-600 md:grid-cols-2">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="rounded-full bg-zinc-100 px-4 py-2">{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}
