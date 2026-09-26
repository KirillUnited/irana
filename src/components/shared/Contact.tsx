'use client';

import * as React from 'react';
import Image from 'next/image';
import {
  Mail,
  ActivityIcon as Instagram,
  Send,
  Phone,
  ExternalLink,
} from 'lucide-react';

import { useIsMobile } from '@/hooks/use-mobile';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';
import { contactInfo } from '@/lib/content';

interface ContactModalProps {
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

interface ContactModalTriggerProps {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Backend integration can be added here later.
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6"
      noValidate={false}
    >
      <div className="grid gap-5">
        <div className="grid gap-2">
          <label
            htmlFor="contact-name"
            className="font-sans text-sm"
          >
            Имя
          </label>

          <Input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Ваше имя"
            className={cn(
              'h-12 rounded-none border-x-0 border-t-0 px-0',
              'border-border bg-transparent',
              'shadow-none',
              'focus-visible:border-foreground',
              'focus-visible:ring-0',
              'text-base',
            )}
          />
        </div>

        <div className="grid gap-2">
          <label
            htmlFor="contact-phone"
            className="font-sans text-sm"
          >
            Телефон
          </label>

          <Input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+7"
            className={cn(
              'h-12 rounded-none border-x-0 border-t-0 px-0',
              'border-border bg-transparent',
              'shadow-none',
              'focus-visible:border-foreground',
              'focus-visible:ring-0',
              'text-base',
            )}
          />
        </div>

        <div className="grid gap-2">
          <label
            htmlFor="contact-email"
            className="font-sans text-sm"
          >
            E-mail
          </label>

          <Input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={cn(
              'h-12 rounded-none border-x-0 border-t-0 px-0',
              'border-border bg-transparent',
              'shadow-none',
              'focus-visible:border-foreground',
              'focus-visible:ring-0',
              'text-base',
            )}
          />
        </div>

        <div className="grid gap-2">
          <label
            htmlFor="contact-message"
            className="font-sans text-sm"
          >
            Сообщение
          </label>

          <Textarea
            id="contact-message"
            name="message"
            rows={6}
            placeholder={`Расскажите подробнее о вашем проекте.
При необходимости можете вставить картинки
и (или) ссылки на то, что нравится и хотели бы
увидеть у себя.`}
            className={cn(
              'min-h-36 resize-none rounded-none',
              'border-x-0 border-t-0 px-0',
              'border-border bg-transparent',
              'shadow-none',
              'focus-visible:border-foreground',
              'focus-visible:ring-0',
              'text-base',
            )}
          />
        </div>
      </div>

      <div className="flex flex-col items-start gap-3">
        <Button
          type="submit"
          className={cn(
            'h-11 lg:h-12 rounded-none px-8',
            'font-sans text-sm font-normal',
          )}
        >
          {submitted ? 'Отправлено' : 'Отправить'}
        </Button>

        {submitted && (
          <p
            className="font-sans text-sm text-muted-foreground"
            role="status"
          >
            Спасибо! Форма готова к подключению отправки.
          </p>
        )}
      </div>
    </form>
  );
}

function ContactLinks() {
  const items = [
    {
      label: 'Телефон',
      value: contactInfo.phone || '',
      href: contactInfo.phone ? `tel:${contactInfo.phone}` : '#',
      icon: Phone,
      external: false,
    },
    {
      label: 'E-mail',
      value: contactInfo.email || '',
      href: contactInfo.email ? `mailto:${contactInfo.email}` : '#',
      icon: Mail,
      external: false,
    },
    {
      label: 'Viber',
      value: 'Написать в Viber',
      href: contactInfo.viber || '#',
      icon: Send,
      external: false,
    },
    {
      label: 'Telegram',
      value: '@irinakorzh',
      href: contactInfo.telegram || '#',
      icon: Send,
      external: true,
    },
    {
      label: 'Instagram',
      value: '@irinakorzh',
      href: contactInfo.instagram || '#',
      icon: Instagram,
      external: true,
    },
    {
      label: 'Behance',
      value: 'behance.net/irinakorzh',
      href: contactInfo.behance || '#',
      icon: ExternalLink,
      external: true,
    },
  ];

  return (
    <div className="flex flex-col">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={
              item.external
                ? 'noopener noreferrer'
                : undefined
            }
            className={cn(
              'group flex min-h-12 items-center justify-between',
              'border-b border-border',
              'font-sans text-sm',
              'transition-opacity hover:opacity-60',
            )}
          >
            <span className="flex items-center gap-3">
              <Icon
                aria-hidden="true"
                className="size-4 shrink-0"
                strokeWidth={1.5}
              />

              <span>{item.label}</span>
            </span>

            <span className="max-w-[60%] truncate text-muted-foreground">
              {item.value}
            </span>
          </a>
        );
      })}
    </div>
  );
}

function ContactContent() {
  return (
    <div
      className={cn(
        'grid min-w-0',
        'grid-cols-1 lg:grid-cols-2',
      )}
    >
      {/* LEFT COLUMN */}
      <section
        className={cn(
          'min-w-0',
          'border-b border-border lg:border-b-0',
          'lg:border-r',
          'p-6 sm:p-8 lg:p-10 xl:p-12',
        )}
      >
        <div className="mb-10">
          <h2 className="font-serif text-3xl font-normal tracking-tight sm:text-4xl">
            Ваши контакты
          </h2>
        </div>

        <ContactForm />
      </section>

      {/* RIGHT COLUMN */}
      <section
        className={cn(
          'min-w-0',
          'p-6 sm:p-8 lg:p-10 xl:p-12',
        )}
      >
        <div className="mb-10">
          <h2 className="font-serif text-3xl font-normal tracking-tight sm:text-4xl">
            Мои контакты для связи
          </h2>
        </div>

        <ContactLinks />

        {contactInfo.qrCode && (
          <div className="mt-10 flex justify-start">
            <Image
              src={contactInfo.qrCode}
              alt="QR-код для связи"
              width={160}
              height={160}
              className="size-40 object-contain"
            />
          </div>
        )}
      </section>
    </div>
  );
}

export function ContactModal({
  children,
  open,
  onOpenChange,
}: ContactModalProps) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Drawer
        open={open}
        onOpenChange={onOpenChange}
      >
        {children && (
          <DrawerTrigger asChild>
            {children}
          </DrawerTrigger>
        )}

        <DrawerContent
          className={cn(
            'max-h-[92dvh] overflow-hidden',
            'rounded-t-none border-x-0 border-b-0',
            'bg-background p-0',
          )}
        >
          <div className="sr-only">
            <DrawerTitle>
              Связаться со мной
            </DrawerTitle>

            <DrawerDescription>
              Форма обратной связи и контактные данные.
            </DrawerDescription>
          </div>

          <div className="min-h-0 overflow-y-auto">
            <ContactContent />
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      {children && (
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
      )}

      <DialogContent
        className={cn(
          'w-[calc(100vw-2rem)] max-w-6xl',
          'max-h-[90dvh] overflow-hidden',
          'rounded-none border border-border',
          'bg-background p-0',
          'shadow-none',
        )}
      >
        <div className="sr-only">
          <DialogTitle>
            Связаться со мной
          </DialogTitle>

          <DialogDescription>
            Форма обратной связи и контактные данные.
          </DialogDescription>
        </div>

        <div className="max-h-[90dvh] overflow-y-auto">
          <ContactContent />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function ContactModalTrigger({
  children,
}: ContactModalTriggerProps) {
  return (
    <ContactModal>
      {children}
    </ContactModal>
  );
}
