'use client';

import { projects } from '@/lib/content';
import { ProjectCard } from './ProjectCard';
import { motion } from 'framer-motion';
import {StarIcon} from './Icons';

export function Projects() {
  return (
    <section id="works" className='border-b py-10 lg:py-20 overflow-hidden'>
      <div className="container ">
        <div className="lg:grid grid-cols-8 gap-6">
          <div className="col-span-4 col-start-3 relative">
            <motion.h2
              className="text-[clamp(36px,5vw,72px)] text-center font-serif font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              МОИ РАБОТЫ
            </motion.h2>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 mt-10 relative">
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
        <StarIcon className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 -z-10" />
            </div>
	        </div>
        </div>
      </div>
    </section>
  );
}
