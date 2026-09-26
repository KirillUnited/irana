import { ProcessItem, ServiceItem } from "@/components/portfolio";
import { ProjectCard } from "@/components/shared/ProjectCard";

import { processSteps, projects, websiteTypes } from '@/lib/content';
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex-1 container mx-auto">
      <section className="py-24 flex flex-col gap-8 items-center relative">
        <h2 className="font-serif text-7xl font-medium">МОИ РАБОТЫ</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto relative z-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
      ))}
        </div>
        <Image src="/images/star.svg" alt="star" width={400} height={400} className="absolute top-0 right-0 z-0" />
      </section>
      {processSteps.map((step, index) => (
        <ProcessItem key={index} item={step} />
      ))}
      {websiteTypes.map((service, index) => (
        <ServiceItem key={index} item={service} />
      ))}
    </main>
  );
}
