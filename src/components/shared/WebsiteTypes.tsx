'use client';

import { useState } from 'react';
import { websiteTypes } from '@/lib/content';
import { ArrowLink } from '@/components/portfolio';
import { motion } from 'framer-motion';

export function WebsiteTypes() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // 8 columns total: hovered card = 3, others = 5/3 each
  const gridTemplateColumns =
    hoveredIndex === null
      ? 'repeat(4, 2fr)'
      : websiteTypes
          .map((_, i) => (i === hoveredIndex ? '3fr' : '5/3fr'))
          .join(' ');

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

        <div
          className="mt-12 grid grid-cols-1 gap-6 border-t border-foreground transition-[grid-template-columns] duration-500 ease-in-out"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            className="hidden lg:grid lg:grid-cols-8 lg:gap-6 transition-[grid-template-columns] duration-500 ease-in-out"
            style={{ gridTemplateColumns }}
          >
            {websiteTypes.map((type, index) => {
              const isHovered = hoveredIndex === index;

              return (
                <motion.article
                  key={type.id}
                  className={`relative min-h-50 border-foreground py-6 pr-5 transition-colors ${
                    index < websiteTypes.length - 1 ? 'border-r' : ''
                  } ${isHovered ? 'bg-background' : ''}`}
                  style={{
                    gridColumn: `span ${isHovered ? 2 : 1} / span ${isHovered ? 2 : 1}`,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                >
                  <div className="flex flex-wrap gap-5 justify-between">
                    <span className="text-3xl font-light">{type.number}</span>
                    <h3 className="text-3xl font-light">{type.title}</h3>
                  </div>

                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isHovered
                        ? 'grid-rows-[1fr] opacity-100 mt-4'
                        : 'grid-rows-[0fr] opacity-0 mt-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      {type.description && (
                        <p className="font-medium text-xl">{type.description}</p>
                      )}

                      {type.price && (
                        <>
                          <p className="mt-4 text-3xl font-light">{type.price}</p>
                          <ArrowLink className="font-sans font-normal">
                            {type.actionLabel || 'Заказать'}
                          </ArrowLink>
                        </>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Mobile / tablet: simple 1–2 column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden">
            {websiteTypes.map((type, index) => (
              <motion.article
                key={type.id}
                className="relative min-h-50 border-foreground border-b py-6 pr-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex flex-wrap gap-5 justify-between">
                  <span className="text-3xl font-light">{type.number}</span>
                  <h3 className="text-3xl font-light">{type.title}</h3>
                </div>

                {type.description && (
                  <p className="mt-4 font-medium text-xl">{type.description}</p>
                )}

                {type.price && (
                  <div className='flex flex-wrap gap-4 justify-between items-center'>
                    <p className="mt-4 text-3xl font-light">{type.price}</p>
                    <ArrowLink className="font-sans font-normal">
                      {type.actionLabel || 'Заказать'}
                    </ArrowLink>
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </div>

        <p className="mt-6 lg:mt-10">
          *Этапы разработки могут меняться в зависимости от задачи и формата проекта, но обычно состоят из пяти основных этапов.
        </p>
      </div>
    </section>
  );
}