import { ProcessItem, ProjectCard, ServiceItem } from "@/components/portfolio";
import { processSteps, projects, services } from '@/lib/content';


export default function Home() {
  return (
    <main className="flex-1 container font-sans">
      {/*<div className="flex flex-col items-center gap-8 text-center">
        <h1 className="display-title text-6xl md:text-8xl">
          Irina Korzh
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
          Web Designer & Creative Developer
        </p>
        <div className="flex gap-4 mt-8">
          <Button size="lg">View Portfolio</Button>
          <Button size="lg" variant="outline">Contact</Button>
        </div>
      </div>*/}
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
      {processSteps.map((step, index) => (
        <ProcessItem key={index} item={step} />
      ))}
      {services.map((service, index) => (
        <ServiceItem key={index} item={service} />
      ))}
    </main>
  );
}
