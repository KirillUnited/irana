'use client';

import { websiteTypes } from '@/lib/content';
import { ArrowLink } from '@/components/portfolio';
import { motion } from 'framer-motion';

export function WebsiteTypes() {
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

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 border-t border-foreground">
          {websiteTypes.map((type, index) => (
            <motion.article
              key={type.id}
              className={`relative min-h-50 border-r border-foreground pr-5 py-6 ${index === websiteTypes.length ? 'border-none': ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className='flex flex-wrap gap-5 justify-between'>
                <span className="text-3xl font-light">{type.number}</span>
                <h3 className="text-3xl font-light">
                  {type.title}
                </h3>
              </div>
              {type.description && (
                <p className="font-medium text-xl">
                  {type.description}
                </p>
              )}
              {type.price && (
                <>
                  <p className="mt-4 text-3xl font-light">{type.price}</p>
                  <ArrowLink className="font-sans font-normal">
                    {type.actionLabel || 'Заказать'}
                  </ArrowLink>
                </>
              )}
            </motion.article>
          ))}
        </div>
        
          <p className='mt-6 lg:mt-10'>*Этапы разработки могут меняться в зависимости от задачи и формата проекта, но обычно состоят из пяти основных этапов.</p>
      </div>
    </section>
  );
}
