'use client';

import { skills, tools } from '@/lib/content';
import { motion } from 'framer-motion';

export function Skills() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl leading-[0.9] md:text-6xl lg:text-8xl xl:text-9xl">
              МОИ НАВЫКИ
            </h2>
            <ul className="mt-8 space-y-4">
              {skills.map((skill, index) => (
                <motion.li 
                  key={skill.id} 
                  className="text-sm leading-relaxed text-foreground/70 md:text-base"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  {skill.title}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-5xl leading-[0.9] md:text-6xl lg:text-8xl xl:text-9xl">
              МОИ ИНСТРУМЕНТЫ
            </h2>
            <ul className="mt-8 space-y-4">
              {tools.map((tool, index) => (
                <motion.li 
                  key={tool.id} 
                  className="text-sm leading-relaxed text-foreground/70 md:text-base"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                >
                  {tool.name}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
