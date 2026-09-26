'use client';
import { Menu } from 'lucide-react';
import { navigation } from '@/lib/content';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { ContactModal } from './Contact';

export function Header() {
  return (
    <header className="bg-background z-20 border-b border-b-foreground sticky top-0">
      <div className="container flex min-h-18 items-center justify-between gap-5 py-4">
        <Link href="#top" className="font-serif text-2xl w-3xs" data-testid="link-logo">
          Ирина<br />Коржель
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex lg:flex-row lg:items-center lg:gap-10 2xl:gap-20" aria-label="Основная навигация">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-2xl font-extralight after:content-[''] nav-link" data-testid={`link-nav-${item.label}`}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5 w-3xs">
          <ContactModal>
            <button
              type="button"
              className="hidden lg:inline-flex font-serif text-2xl nav-link"
            >
              Связаться со мной
            </button>
          </ContactModal>

          {/* Mobile navigation */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button type="button" variant="ghost" size="icon" className="h-11 w-11" aria-label="Открыть меню" data-testid="button-mobile-menu">
                  <Menu size={21} strokeWidth={1.2} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <SheetHeader>
                  <SheetTitle>Меню</SheetTitle>
                </SheetHeader>
                <nav className="mt-8 flex flex-col gap-6">
                  {navigation.map((item) => (
                    <Link key={item.href} href={item.href} className="text-2xl font-extralight nav-link" data-testid={`link-nav-${item.label}`}>
                      {item.label}
                    </Link>
                  ))}
                  <ContactModal>
                    <button
                      type="button"
                      className="text-left text-2xl font-serif nav-link"
                    >
                      Связаться со мной
                    </button>
                  </ContactModal>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
