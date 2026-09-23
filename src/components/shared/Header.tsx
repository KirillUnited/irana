'use client';
import { useState } from 'react';
import { X, Menu } from 'lucide-react';
import { ArrowLink } from '@/components/portfolio';
import { navigation } from '@/lib/content';

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
