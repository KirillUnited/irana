import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";
import type { Project } from "@/lib/types";



export function ProjectCard({ project }: { project: Project }) {
  return (
      <Link href={project.href || '/'} target="_blank" data-testid={`link-project-${project.number}`} className="block">
    <Card className="group overflow-hidden">
        <div className="aspect-[4/3] overflow-hidden">
          <Image 
            src={project.image} 
            alt={project.imageAlt} 
            sizes="100vw" 
            width={0} 
            height={0} 
            className="h-full w-full object-cover transition-transform group-hover:scale-105" 
          />
        </div>

        <CardContent className="pt-6">
          <CardTitle>
            <p className="text-foreground/55">{project.number}</p>
            <h3 className="serif mt-2 max-w-[20rem] text-[clamp(1.25rem,2.2vw,1.85rem)] leading-[1.04]">{project.title}</h3>
          </CardTitle>
          <p className="mt-2 text-xs leading-[1.55] text-foreground/65">{project.category}</p>
          <ArrowUpRight className="mt-1 shrink-0 opacity-50 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={18} strokeWidth={1} />
        </CardContent>
        <CardFooter><p className="text-xs leading-[1.55] text-foreground/65">{project.description}</p></CardFooter>
    </Card>
      </Link>
  );
}
