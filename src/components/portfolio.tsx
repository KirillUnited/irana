'use client';
import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { contacts, navigation, processSteps, projects, services, type ProcessStep, type Project, type Service } from '@/lib/content';

export function ArrowLink({ children, href = '#contact', className = '' }: { children: string; href?: string; className?: string }) {
  return (
    <a href={href} className={`arrow-link inline-flex items-center gap-2 text-[11px] uppercase tracking-[.08em] ${className}`} data-testid={`link-${children.toLowerCase().replace(/\s+/g, '-')}`}>
      <span>{children}</span><ArrowUpRight size={14} strokeWidth={1.2} />
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

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="relative z-20 border-b hairline">
      <div className="site-shell flex min-h-[4.5rem] items-center justify-between gap-5">
        <a href="#top" onClick={close} className="serif text-[15px] leading-[.82]" data-testid="link-logo">
          Ирина<br />Коржель
        </a>
        <nav className={`${open ? 'absolute left-0 right-0 top-full flex bg-background px-6 py-6' : 'hidden'} flex-col gap-5 border-b hairline md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0`} aria-label="Основная навигация">
          {navigation.map((item) => <a key={item.href} href={item.href} onClick={close} className="nav-link text-[11px]" data-testid={`link-nav-${item.label}`}>{item.label}</a>)}
        </nav>
        <div className="flex items-center gap-5">
          <ArrowLink href="#contact" className="hidden sm:inline-flex">Связаться со мной</ArrowLink>
          <button type="button" className="md:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Закрыть меню' : 'Открыть меню'} data-testid="button-mobile-menu">
            {open ? <X size={21} strokeWidth={1.2} /> : <Menu size={21} strokeWidth={1.2} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group">
      <a href={project.href} className="project-frame block overflow-hidden border hairline" data-testid={`link-project-${project.number}`}>
        <img src={project.image} alt={project.alt} className="project-image aspect-[1.47] w-full object-cover" />
      </a>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div><p className="eyebrow text-foreground/55">{project.number}</p><h3 className="serif mt-2 max-w-[20rem] text-[clamp(1.25rem,2.2vw,1.85rem)] leading-[1.04]">{project.title}</h3></div>
        <ArrowUpRight className="mt-1 shrink-0 opacity-50 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={18} strokeWidth={1} />
      </div>
      <p className="mt-3 max-w-[24rem] text-xs leading-[1.55] text-foreground/65">{project.description}</p>
    </article>
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

export function Footer() {
  return (
    <footer id="contact" className="border-t hairline pb-8 pt-12 md:pt-16">
      <div className="site-shell">
        <div className="grid gap-12 md:grid-cols-[1.1fr_1.6fr_.65fr]">
          <div><p className="serif text-3xl leading-[.9]">Ирина<br />Коржель</p><p className="mt-8 max-w-[14rem] text-xs leading-[1.5] text-foreground/60">Дизайн, который помогает вашему делу быть увиденным.</p></div>
          <div className="grid grid-cols-2 gap-x-7 gap-y-3 text-xs sm:grid-cols-3">
            <a href="#about" className="nav-link" data-testid="link-footer-about">Обо мне</a><a href="#works" className="nav-link" data-testid="link-footer-works">Портфолио</a><a href="#services" className="nav-link" data-testid="link-footer-services">Виды услуг</a><a href="#process" className="nav-link" data-testid="link-footer-process">Этапы работы</a>
          </div>
          <div className="md:text-right"><ArrowLink href="mailto:hello@irinakorzh.by">Связаться со мной</ArrowLink><div className="mt-8 ml-auto grid h-20 w-20 place-items-center border hairline text-[10px] leading-tight text-center">QR<br />CODE</div></div>
        </div>
        <div className="mt-14 grid gap-3 border-t hairline pt-5 text-[10px] text-foreground/65 sm:grid-cols-3">
          {contacts.slice(0, 3).map((contact) => <a key={contact.label} href={contact.href} className="nav-link" data-testid={`link-contact-${contact.label.toLowerCase()}`}>{contact.label} <span className="text-foreground">{contact.value}</span></a>)}
          {contacts.slice(3).map((contact) => <a key={contact.label} href={contact.href} className="nav-link" data-testid={`link-contact-${contact.label.toLowerCase()}`}>{contact.label} <span className="text-foreground">{contact.value}</span></a>)}
        </div>
        <p className="mt-10 text-[10px] text-foreground/45">© {new Date().getFullYear()} Ирина Коржель</p>
      </div>
    </footer>
  );
}

export { projects, processSteps, services };
