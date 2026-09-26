import { projects } from '@/lib/content';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  return (
    <section id="works" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="text-5xl leading-[0.9] md:text-6xl lg:text-8xl xl:text-9xl">
          МОИ РАБОТЫ
        </h2>
        
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
