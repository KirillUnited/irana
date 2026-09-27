'use client';

import { processSteps } from '@/lib/content';
import { motion } from 'framer-motion';

export function Process() {
  return (
    <section id="process" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <motion.h2 
          className="text-5xl leading-[0.9] md:text-6xl lg:text-8xl xl:text-9xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ЭТАПЫ РАБОТЫ
        </motion.h2>
        
        {/* Mobile: Vertical timeline */}
        <div className="mt-12 flex flex-col gap-10 lg:hidden">
          {processSteps.map((step, index) => (
            <motion.div 
              key={step.id} 
              className="border-b border-border pb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <span className="text-4xl leading-none text-foreground/55">{step.number}</span>
              <h3 className="mt-4 text-lg font-medium">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:mt-12">
          {processSteps.map((step, index) => (
            <motion.div 
              key={step.id} 
              className="border-t border-border pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-4xl leading-none text-foreground/55">{step.number}</span>
                <span className="mt-1 text-xs uppercase tracking-widest text-foreground/55">этап</span>
              </div>
              <h3 className="mt-9 text-sm font-medium">{step.title}</h3>
              <p className="mt-2 max-w-[12rem] text-xs leading-[1.55] text-foreground/60">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
