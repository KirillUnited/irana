import { ArrowUpRight } from 'lucide-react';
import { processSteps, projects, services, type ProcessStep, type Project, type Service } from '@/lib/content';

export function ArrowLink({ children, href = '#contact', className = '' }: { children: string; href?: string; className?: string }) {
  return (
    <a href={href} className={`${className}`} data-testid={`link-${children.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex items-center gap-2 group">
        <span>{children}</span>
        <ArrowUpRight className="arrow-link-icon" size={24} strokeWidth={1.2} />
      </div>
    </a>
  );
}

export function SectionLabel({ number, children }: { number: string; children: string }) {
  return (
    <div className="flex items-center gap-3 text-[10px] uppercase tracking-[.12em] text-foreground/60">
      <span>{number}</span><span className="h-px w-7 bg-foreground/35" /><span>{children}</span>
    </div>
  );
}

export function DecorativeShape({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 120 120" className={`pointer-events-none absolute ${className}`}>
      <circle cx="60" cy="60" r="16" className="drawn-line" />
      <circle cx="60" cy="60" r="7" className="drawn-line" />
      <path d="M60 0V43M60 77v43M0 60h43M77 60h43M18 18l30 30M72 72l30 30M102 18L72 48M48 72 18 102" className="drawn-line" />
      <path d="M60 31c9 6 14 14 14 29s-5 23-14 29c-9-6-14-14-14-29s5-23 14-29Z" className="drawn-line" />
    </svg>
  );
}

export function ProcessItem({ item }: { item: ProcessStep }) {
  return (
    <article className="border-t hairline pt-3 md:min-h-[10rem]">
      <div className="flex items-start justify-between gap-3"><span className="serif text-4xl leading-none">{item.number}</span><span className="eyebrow mt-1 text-foreground/55">этап</span></div>
      <h3 className="mt-9 text-sm font-medium">{item.title}</h3>
      <p className="mt-2 max-w-[12rem] text-[11px] leading-[1.55] text-foreground/60">{item.description}</p>
    </article>
  );
}

export function ServiceItem({ item }: { item: Service }) {
  return (
    <article className={`relative min-h-[12.5rem] border-l hairline px-4 py-4 md:px-5 ${item.featured ? 'bg-[#e8f0ed]' : ''}`}>
      <span className="eyebrow text-foreground/55">{item.number}</span>
      <h3 className="serif mt-7 text-[clamp(1.2rem,2vw,1.7rem)] leading-[1.05]">{item.title}</h3>
      {item.description && <p className="mt-4 max-w-[16rem] text-[11px] leading-[1.5] text-foreground/70">{item.description}</p>}
      {item.price && <><p className="mt-4 text-xs">{item.price}</p><ArrowLink className="mt-5" href="#contact">Заказать</ArrowLink></>}
    </article>
  );
}

export { projects, processSteps, services };
