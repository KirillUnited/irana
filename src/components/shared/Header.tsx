'use client';
import { ArrowUpRight, Menu } from 'lucide-react';
import { navigation } from '@/lib/content';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { ContactModal } from './Contact';

export function Header() {
  return (
    <header className="bg-background z-20 border-b border-b-foreground sticky top-0">
      <div className="container flex min-h-18 items-center justify-between gap-5 py-4">
        <Link href="#top" className="font-serif font-medium text-2xl w-3xs" data-testid="link-logo">
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

        <div className="flex items-center gap-5 lg:w-3xs">
          <ContactModal>
            <Button variant={'ghost'} size={'lg'} className={`hidden lg:inline-flex font-serif  font-medium text-2xl hover:cursor-pointer px-0`}>
              <div className='flex flex-col nav-link'>
                <div className="flex items-center gap-2 ">
                <span>Связаться со мной</span>
                <ArrowUpRight className="arrow-link-icon" size={24} strokeWidth={1.2} />
              </div>
                </div>
            </Button>
          </ContactModal>

          {/* Mobile navigation */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button type="button" className="hover:cursor-pointer" aria-label="Открыть меню">
                  <Menu size={36} className='w-9 h-9 size-9' width={36} height={36} strokeWidth={1.2} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-2xs">
                <SheetHeader>
                  <SheetTitle>Меню</SheetTitle>
                </SheetHeader>
                <nav className="mt-8 flex flex-col gap-6 items-start">
                  {navigation.map((item) => (
                    <Link key={item.href} href={item.href} className="text-2xl font-extralight" data-testid={`link-nav-${item.label}`}>
                      {item.label}
                    </Link>
                  ))}
                  <ContactModal>
                    <Button variant={'ghost'} className={`font-serif font-medium text-2xl hover:cursor-pointer px-0`}>
                      <div className='flex flex-col nav-link'>
                        <div className="flex items-center gap-2 ">
                        <span>Связаться со мной</span>
                        <ArrowUpRight className="arrow-link-icon" size={24} strokeWidth={1.2} />
                      </div>
                        </div>
                    </Button>
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
