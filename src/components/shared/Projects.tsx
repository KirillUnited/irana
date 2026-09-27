'use client';

import { projects } from '@/lib/content';
import { ProjectCard } from './ProjectCard';
import { motion } from 'framer-motion';

export function Projects() {
  return (
    <section id="works" className='border-b pb-10 lg:pb-20'>
      <div className="container">
        <motion.h2
          className="text-[clamp(36px,5vw,72px)] text-center font-serif"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          МОИ РАБОТЫ
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mt-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
