import { socialLinks } from '@/lib/content';
import { ContactModal } from './Contact';
import { Button } from '../ui/button';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

export function Footer() {
  return (
    <footer id="contact" className="border-t py-6">
      <TooltipProvider>
        <div className="container">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-8">
          <div className="grid grid-cols-1 gap-4 lg:col-span-2 lg:grid-cols-2">
            <p className="font-serif text-2xl font-medium">Ирина Коржель</p>
            <ul className="flex flex-col items-start gap-2 font-light lg:text-2xl">
              <li>
                <a href="#about" className="nav-link">
                  Обо мне
                </a>
              </li>
              <li>
                <a href="#works" className="nav-link">
                  Портфолио
                </a>
              </li>
              <li>
                <a href="#services" className="nav-link">
                  Виды услуг
                </a>
              </li>
              <li>
                <a href="#process" className="nav-link">
                  Этапы работы
                </a>
              </li>
            </ul>
          </div>
          <div className="grid grid-rows-[auto_1fr] gap-2 lg:col-span-5 lg:grid-cols-5">
            <div className="col-span-5">
              <ContactModal>
                <Button
                  variant={'ghost'}
                  className={`justify-start self-start px-0 font-serif text-xl font-medium hover:cursor-pointer lg:text-2xl`}
                >
                  <div className="nav-link flex flex-col">
                    <div className="flex items-center gap-2">
                      <span>Связаться со мной</span>
                      <ArrowRightIcon className="arrow-link-icon" size={24} strokeWidth={1.2} />
                    </div>
                  </div>
                </Button>
              </ContactModal>
            </div>
            <div className="col-span-5 grid-cols-1 gap-6 lg:col-start-2 lg:grid lg:grid-cols-4">
              <div className="col-span-3 flex flex-wrap gap-6">
                {socialLinks.slice(0, 3).map((contact) => (
                  <Tooltip key={contact.label}>
                    <TooltipTrigger asChild>
                      <Link
                        href={contact.href}
                        className="nav-link flex-1 text-right font-light lg:text-xl"
                        target={contact.external ? '_blank' : undefined}
                      >
                        {contact.label}
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{contact.href}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
              <div className="col-span-3 col-start-2 flex flex-wrap gap-6">
                {socialLinks.slice(3).map((contact) => (
                  <Tooltip key={contact.label}>
                    <TooltipTrigger asChild>
                      <Link
                        href={contact.href}
                        className="nav-link flex-1 font-light lg:text-xl"
                        target={contact.external ? '_blank' : undefined}
                      >
                        {contact.label}
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{contact.href}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>
          <div className="hairline mx-auto mt-8 grid h-20 w-20 place-items-center border text-center lg:ml-auto">
            <Image src="/images/qr-code.png" width={104} height={104} alt="QR Code" />
          </div>
          <p className="border-t pt-6 text-center text-xs font-light lg:col-span-8">
            © {new Date().getFullYear()} Ирина Коржель. Публичная оферта · Политика
            конфиденциальности
          </p>
        </div>
        </div>
      </TooltipProvider>
    </footer>
  );
}
