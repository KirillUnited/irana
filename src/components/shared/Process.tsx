'use client';

import { processSteps } from '@/lib/content';
import { motion } from 'framer-motion';
import { ContactModal } from './Contact';
import { Button } from '../ui/button';
import { ArrowRightIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Process() {
  return (
    <section id="process" className="py-16 lg:py-24 border-b">
      <div className="container">
        <motion.h2
          className="text-[clamp(64px,8vw,136px)] leading-none font-serif text-center"
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
              <ul className="mt-5 font-light list-disc pl-6">
                {step.description.map((item: string) => (
                    <li key={item}>{item}</li>
                  ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden lg:grid lg:grid-cols-8 lg:gap-8 lg:mt-12">
          {processSteps.map((step, index) => {
            const placements = [
              'col-start-1 col-span-2 row-start-1', // 01
              'col-start-2 col-span-2 row-start-2', // 02
              'col-start-4 col-span-2 row-start-1', // 03
              'col-start-5 col-span-2 row-start-2', // 04
              'col-start-7 col-span-2 row-start-1', // 05
            ];

              return (
            <motion.div
              key={step.id}
              className={cn("grid grid-cols-[auto_minmax(0,1fr)] gap-6", placements[index])}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <span className='text-4xl font-light'>{step.number}</span>
              <div>
                <h3 className="text-4xl font-light">
                  {step.title}</h3>
                <ul className="mt-5 font-light list-disc">
                  {step.description.map((item: string) => (
                      <li key={item}>{item}</li>
                    ))}
                </ul>
                </div>
            </motion.div>
          )})}
        </div>
        <div className='flex flex-wrap justify-between items-center mt-8 lg:mt-16 gap-6'>
          <p>*Этапы разработки могут меняться в зависимости от задачи и формата проекта, но обычно состоят из пяти основных этапов.</p>
          <ContactModal>
            <Button variant={'ghost'} size={'lg'} className={`font-serif font-medium text-2xl hover:cursor-pointer px-0`}>
              <div className='flex flex-col nav-link'>
                <div className="flex items-center gap-2 ">
                <span>Связаться со мной</span>
                <ArrowRightIcon className="arrow-link-icon" size={24} strokeWidth={1.2} />
              </div>
                </div>
            </Button>
          </ContactModal>
        </div>
      </div>
    </section>
  );
}
