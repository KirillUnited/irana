import { socialLinks } from '@/lib/content';
import { ContactModal } from './Contact';
import { Button } from '../ui/button';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer id="contact" className="border-t py-6">
      <div className="container">
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-8">
          <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <p className="font-serif font-medium text-2xl">Ирина Коржель</p>
            <ul className="flex flex-col items-start gap-2 lg:text-2xl font-light">
              <li><a href="#about" className="nav-link">Обо мне</a></li>
              <li><a href="#works" className="nav-link">Портфолио</a></li>
              <li><a href="#services" className="nav-link">Виды услуг</a></li>
              <li><a href="#process" className="nav-link">Этапы работы</a></li>
            </ul>
          </div>
          <div className="lg:col-span-5 grid lg:grid-cols-5 grid-rows-[auto_1fr] gap-2">
            <div className="col-span-5">
              <ContactModal>
                <Button variant={'ghost'} className={`font-serif font-medium text-xl lg:text-2xl hover:cursor-pointer px-0 self-start justify-start`}>
                  <div className='flex flex-col nav-link'>
                    <div className="flex items-center gap-2 ">
                    <span>Связаться со мной</span>
                    <ArrowUpRight className="arrow-link-icon" size={24} strokeWidth={1.2} />
                  </div>
                  </div>
              </Button>
            </ContactModal>
            </div>
            <div className="lg:col-start-2 col-span-5 lg:grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="flex flex-wrap gap-6 col-span-3">{socialLinks.slice(0, 3).map((contact) => <a key={contact.label} href={contact.href} className="font-light lg:text-xl flex-1 text-right" data-testid={`link-contact-${contact.label.toLowerCase()}`}>{contact.label}</a>)}</div>
              <div className="flex flex-wrap gap-6 col-start-2 col-span-3">{socialLinks.slice(3).map((contact) => <a key={contact.label} href={contact.href} className="font-light lg:text-xl flex-1" data-testid={`link-contact-${contact.label.toLowerCase()}`}>{contact.label}</a>)}</div>
            </div>
          </div>
          <div className="mt-8 lg:ml-auto mx-auto grid h-20 w-20 place-items-center border hairline text-center">
            <Image src="/images/qr-code.png" width={104} height={104} alt="QR Code" />
          </div>
          <p className="text-xs font-light text-center lg:col-span-8 border-t pt-6">© {new Date().getFullYear()} Ирина Коржель. Публичная оферта · Политика конфиденциальности</p>
        </div>

      </div>
    </footer>
  );
}
