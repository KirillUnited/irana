'use client';

import { processSteps } from '@/lib/content';
import { motion } from 'framer-motion';
import { ContactModal } from './Contact';
import { Button } from '../ui/button';
import { ArrowRightIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Process() {
  return (
    <section id="process" className="border-b py-16 lg:py-24">
      <div className="container">
        <motion.h2
          className="text-center font-serif text-[clamp(64px,8vw,136px)] leading-none"
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
              className="border-border border-b pb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <span className="text-foreground/55 text-4xl leading-none">{step.number}</span>
              <h3 className="mt-4 text-lg font-medium">{step.title}</h3>
              <ul className="mt-5 list-disc pl-6 font-light">
                {step.description.map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden lg:mt-12 lg:grid lg:grid-cols-8 lg:gap-8">
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
                className={cn('grid grid-cols-[auto_minmax(0,1fr)] gap-6', placements[index])}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <span className="text-4xl font-light">{step.number}</span>
                <div>
                  <h3 className="text-4xl font-light">{step.title}</h3>
                  <ul className="mt-5 list-disc pl-6 font-light">
                    {step.description.map((item: string) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-6 lg:mt-16">
          <p>
            *Этапы разработки могут меняться в зависимости от задачи и&nbsp;формата проекта, но
            обычно состоят из пяти основных этапов.
          </p>
          <ContactModal>
            <Button
              variant={'ghost'}
              size={'lg'}
              className={`px-0 font-serif text-2xl font-medium hover:cursor-pointer`}
            >
              <div className="nav-link flex flex-col">
                <div className="flex items-center gap-2">
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
