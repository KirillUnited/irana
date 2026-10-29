'use client';

import { useState } from 'react';
import { websiteTypes } from '@/lib/content';
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
          className="text-center font-serif text-[clamp(64px,8vw,136px)] leading-none"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ВИДЫ САЙТОВ
        </motion.h2>

        {/* Flex row — 8 "columns" total via flex-grow values */}
        <div
          className="lg:border-foreground mt-12 hidden transition-all duration-500 ease-in-out lg:flex lg:gap-6 lg:border-t"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {websiteTypes.map((type, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <motion.article
                key={type.id}
                className={`border-foreground relative min-h-50 cursor-pointer py-6 pr-5 transition-[flex-grow] duration-500 ease-in-out ${
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
                <div
                  className={cn('flex flex-col flex-wrap justify-between gap-5', {
                    'flex-row': isHovered,
                  })}
                >
                  <span className="text-3xl font-light">{type.number}</span>
                  <h3 className="text-3xl font-light">{type.title}</h3>
                </div>

                {/* Content reveal — unchanged grid-rows trick */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isHovered
                      ? 'mt-5 grid-rows-[1fr] opacity-100'
                      : 'mt-0 grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="flex flex-col gap-5 overflow-hidden">
                    {type.description && <p className="text-xl font-medium">{type.description}</p>}

                    {type.price && (
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="text-3xl font-light">{type.price}</p>
                        <ContactModal>
                          <Button
                            variant={'ghost'}
                            className={cn(
                              `px-0 font-serif text-2xl font-medium hover:cursor-pointer`,
                              'font-sans font-normal',
                            )}
                          >
                            <div className="nav-link flex flex-col">
                              <div className="flex items-center gap-2">
                                <span>{type.actionLabel || 'Заказать'}</span>
                                <ArrowRightIcon
                                  className="arrow-link-icon"
                                  size={24}
                                  strokeWidth={1.2}
                                />
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
        <div className="border-foreground mt-12 grid grid-cols-1 border-t md:grid-cols-2 lg:hidden">
          {websiteTypes.map((type, index) => (
            <motion.article
              key={type.id}
              className="border-foreground relative flex min-h-50 flex-col gap-5 border-b py-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex flex-wrap justify-between gap-4">
                <span className="text-3xl font-light">{type.number}</span>
                <h3 className="text-3xl font-light">{type.title}</h3>
              </div>

              {type.description && <p className="text-xl font-medium">{type.description}</p>}

              {type.price && (
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-3xl font-light">{type.price}</p>
                  <ContactModal>
                    <Button
                      variant={'ghost'}
                      className={cn(
                        `px-0 font-serif text-2xl font-medium hover:cursor-pointer`,
                        'font-sans font-normal',
                      )}
                    >
                      <div className="nav-link flex flex-col">
                        <div className="flex items-center gap-2">
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
          *Этапы разработки могут меняться в зависимости от задачи и&nbsp;формата проекта, но обычно
          состоят из пяти основных этапов.
        </p>
      </div>
    </section>
  );
}
