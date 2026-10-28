'use client';

import { useState } from 'react';
import { websiteTypes } from '@/lib/content';
import { ArrowLink } from '@/components/portfolio';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ContactModal } from './Contact';
import { Button } from '../ui/button';
import { ArrowRightIcon } from 'lucide-react';

export function WebsiteTypes() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-10 lg:py-20">
      <div className="container">
        <motion.h2
          className="text-[clamp(64px,8vw,136px)] leading-none font-serif text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ВИДЫ САЙТОВ
        </motion.h2>

        {/* Flex row — 8 "columns" total via flex-grow values */}
        <div
          className="mt-12 hidden lg:flex lg:gap-6 lg:border-t lg:border-foreground transition-all duration-500 ease-in-out"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {websiteTypes.map((type, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <motion.article
                key={type.id}
                className={`relative min-h-50 border-foreground py-6 cursor-pointer pr-5 transition-[flex-grow] duration-500 ease-in-out ${
                  index < websiteTypes.length - 1 ? 'border-r' : ''
                }`}
                style={{
                  flexGrow: isHovered ? 3 : 5 / 3,
                  flexBasis: 0,
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
              >
                <div className={cn("flex flex-col flex-wrap gap-5 justify-between", {
                  'flex-row': isHovered
                })}>
                  <span className="text-3xl font-light">{type.number}</span>
                  <h3 className="text-3xl font-light">{type.title}</h3>
                </div>

                {/* Content reveal — unchanged grid-rows trick */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isHovered
                      ? 'grid-rows-[1fr] opacity-100 mt-5'
                      : 'grid-rows-[0fr] opacity-0 mt-0'
                  }`}
                >
                  <div className="overflow-hidden flex flex-col gap-5">
                    {type.description && (
                      <p className="font-medium text-xl">{type.description}</p>
                    )}

                    {type.price && (
                      <div className='flex flex-wrap gap-2 justify-between items-center'>
                        <p className="text-3xl font-light">{type.price}</p>
                        <ContactModal>
                        <Button variant={'ghost'} className={cn(`font-serif font-medium text-2xl hover:cursor-pointer px-0`, 'font-sans font-normal')}>
      <div className='flex flex-col nav-link'>
        <div className="flex items-center gap-2 ">
          <span>{type.actionLabel || 'Заказать'}</span>
          <ArrowRightIcon className="arrow-link-icon" size={24} strokeWidth={1.2} />
        </div>
      </div>
    </Button>
                        </ContactModal>
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Mobile / tablet fallback */}
        <div className="mt-12 grid grid-cols-1 border-t border-foreground md:grid-cols-2 lg:hidden">
          {websiteTypes.map((type, index) => (
            <motion.article
              key={type.id}
              className="relative min-h-50 border-foreground py-6 border-b flex flex-col gap-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex flex-wrap gap-4 justify-between">
                <span className="text-3xl font-light">{type.number}</span>
                <h3 className="text-3xl font-light">{type.title}</h3>
              </div>

              {type.description && (
                <p className="font-medium text-xl">{type.description}</p>
              )}

              {type.price && (
                <div className='flex flex-wrap gap-2 justify-between items-center'>
                  <p className="text-3xl font-light">{type.price}</p>
                  <ContactModal>
                    <Button variant={'ghost'} className={cn(`font-serif font-medium text-2xl hover:cursor-pointer px-0`, 'font-sans font-normal')}>
                      <div className='flex flex-col nav-link'>
                        <div className="flex items-center gap-2 ">
                          <span>{type.actionLabel || 'Заказать'}</span>
                          <ArrowRightIcon className="arrow-link-icon" size={24} strokeWidth={1.2} />
                        </div>
                      </div>
                    </Button>
                  </ContactModal>
                </div>
              )}
            </motion.article>
          ))}
        </div>

        <p className="mt-6 lg:mt-10">
          *Этапы разработки могут меняться в зависимости от задачи и формата проекта, но обычно состоят из пяти основных этапов.
        </p>
      </div>
    </section>
  );
}