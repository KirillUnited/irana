'use client';
import { useState } from 'react';
import { X, Menu } from 'lucide-react';
import { ArrowLink } from '@/components/portfolio';
import { navigation } from '@/lib/content';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ContactModal } from './Contact';

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="bg-background z-20 border-b border-b-foreground sticky top-0">
      <div className="container flex min-h-18 items-center justify-between gap-5 py-4">
        <Link href="#top" onClick={close} className="font-serif text-2xl w-3xs" data-testid="link-logo">
          Ирина<br />Коржель
        </Link>
        <nav className={`${open ? 'absolute left-0 right-0 top-full flex bg-background px-6 py-6' : 'hidden'} flex-col gap-4 border-b hairline md:static md:flex md:flex-row md:items-center md:gap-10 2xl:gap-20 md:border-0 md:bg-transparent md:p-0`} aria-label="Основная навигация">
          {navigation.map((item) => <Link key={item.href} href={item.href} onClick={close} className="text-2xl font-extralight after:content-[''] nav-link" data-testid={`link-nav-${item.label}`}>{item.label}</Link>)}
        </nav>
        <div className="flex items-center gap-5 w-3xs">
          <ArrowLink href="#contact" className="font-serif text-2xl nav-link">Связаться со мной</ArrowLink>
          <ContactModal>
            <button
              type="button"
              className="inline-flex font-serif text-2xl nav-link"
            >
              Связаться со мной
            </button>
          </ContactModal>
          <Button type="button" className="md:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Закрыть меню' : 'Открыть меню'} data-testid="button-mobile-menu">
            {open ? <X size={21} strokeWidth={1.2} /> : <Menu size={21} strokeWidth={1.2} />}
          </Button>
        </div>
      </div>
    </header>
  );
}
