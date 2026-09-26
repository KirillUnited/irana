'use client';

import { websiteTypes } from '@/lib/content';
import { ArrowLink } from '@/components/portfolio';
import { motion } from 'framer-motion';

export function WebsiteTypes() {
  return (
    <section id="services" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <motion.h2 
          className="text-5xl leading-[0.9] md:text-6xl lg:text-8xl xl:text-9xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ВИДЫ САЙТОВ
        </motion.h2>
        
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {websiteTypes.map((type, index) => (
            <motion.article
              key={type.id}
              className={`relative min-h-[12.5rem] border-l border-border px-4 py-4 md:px-5 ${type.price ? 'bg-[#e8f0ed]' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <span className="text-xs uppercase tracking-widest text-foreground/55">{type.number}</span>
              <h3 className="serif mt-7 text-[clamp(1.2rem,2vw,1.7rem)] leading-[1.05]">
                {type.title}
              </h3>
              {type.description && (
                <p className="mt-4 max-w-[16rem] text-xs leading-[1.5] text-foreground/70">
                  {type.description}
                </p>
              )}
              {type.price && (
                <>
                  <p className="mt-4 text-xs">{type.price}</p>
                  <ArrowLink className="mt-5 h-11 flex items-center" href="#contact">
                    {type.actionLabel || 'Заказать'}
                  </ArrowLink>
                </>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
