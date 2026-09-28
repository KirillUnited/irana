'use client';

import { skills, tools } from '@/lib/content';
import { motion } from 'framer-motion';

export function Skills() {
  return (
    <section className="py-10 border-b">
      <div className="container">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Skills */}
          <motion.div
            className='flex flex-col gap-6'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[clamp(36px,5vw,64px)] font-serif font-medium">
              МОИ НАВЫКИ
            </h2>
            <ul className="flex flex-col gap-2 lg:gap-6">
              {skills.map((skill, index) => (
                <motion.li
                  key={skill.id}
                  className={`lg:text-5xl font-light max-lg:ml-0!`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  style={{ marginLeft: `${index * 100}px` }}
                >
                  {skill.title}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Tools */}
          <motion.div
            className='flex flex-col gap-6'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-[clamp(36px,5vw,64px)] font-serif font-medium">
              МОИ ИНСТРУМЕНТЫ
            </h2>
            <ul className="flex flex-col gap-2 lg:gap-6">
              {tools.map((tool, index) => (
                <motion.li
                  key={tool.id}
                  className="lg:text-5xl font-light max-lg:ml-0!"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  style={{ marginLeft: `${index * 100}px` }}
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
