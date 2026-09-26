import { ArrowLink } from '@/components/portfolio';
import { socialLinks, contactInfo } from '@/lib/content';

export function Footer() {
  return (
    <footer id="contact" className="border-t hairline pb-8 pt-12 md:pt-16 px-4 sm:px-6 lg:px-8">
      <div className="site-shell">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2"><p className="serif text-3xl leading-[.9]">Ирина<br />Коржель</p><p className="mt-8 max-w-[14rem] text-xs leading-[1.5] text-foreground/60">Дизайн, который помогает вашему делу быть увиденным.</p></div>
          <div className="grid grid-cols-2 gap-x-7 gap-y-3 text-xs sm:grid-cols-3 lg:col-span-2">
            <a href="#about" className="nav-link h-11 flex items-center" data-testid="link-footer-about">Обо мне</a><a href="#works" className="nav-link h-11 flex items-center" data-testid="link-footer-works">Портфолио</a><a href="#services" className="nav-link h-11 flex items-center" data-testid="link-footer-services">Виды услуг</a><a href="#process" className="nav-link h-11 flex items-center" data-testid="link-footer-process">Этапы работы</a>
          </div>
          <div className="lg:text-right"><ArrowLink href={`mailto:${contactInfo.email}`}>Связаться со мной</ArrowLink><div className="mt-8 lg:ml-auto mx-auto grid h-20 w-20 place-items-center border hairline text-[10px] leading-tight text-center">QR<br />CODE</div></div>
        </div>
        <div className="mt-14 grid gap-3 border-t hairline pt-5 text-[10px] text-foreground/65 sm:grid-cols-3">
          {socialLinks.slice(0, 3).map((contact) => <a key={contact.label} href={contact.href} className="nav-link h-11 flex items-center" data-testid={`link-contact-${contact.label.toLowerCase()}`}>{contact.label} <span className="text-foreground">{contact.label === 'Телефон' ? contactInfo.phone : contact.label === 'Mail' ? contactInfo.email : ''}</span></a>)}
          {socialLinks.slice(3).map((contact) => <a key={contact.label} href={contact.href} className="nav-link h-11 flex items-center" data-testid={`link-contact-${contact.label.toLowerCase()}`}>{contact.label}</a>)}
        </div>
        <p className="mt-10 text-[10px] text-foreground/45">© {new Date().getFullYear()} Ирина Коржель</p>
      </div>
    </footer>
  );
}
