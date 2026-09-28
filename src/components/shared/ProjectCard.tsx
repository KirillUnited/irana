import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import type { Project } from "@/lib/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
      <Link href={project.href || '/'} target="_blank" data-testid={`link-project-${project.number}`} className="block h-full">
    <Card className="group overflow-hidden rounded-none h-full">
        <div className="aspect-square overflow-hidden">
          <Image
            src={project.image}
            alt={project.imageAlt}
            sizes="100vw"
            width={0}
            height={0}
            quality={60}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
 
        <CardContent className="p-4">
          <CardTitle className="text-balance">
            <p className="text-foreground/55">{project.number}</p>
            <h3 className="font-serif mt-2 text-[clamp(1.25rem,2.2vw,1.85rem)] line-clamp-3">{project.title}</h3>
          </CardTitle>
          <div className="flex items-center mt-2 line-clamp-1">
            <p className="text-xs leading-[1.55] text-foreground/65 line-clamp-1">{project.category}</p>
            <ArrowUpRight className="mt-1 shrink-0 opacity-50 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={18} strokeWidth={1} />
          </div>
        <CardDescription className="mt-4 text-pretty line-clamp-3">{project.description}</CardDescription>
        </CardContent>
    </Card>
      </Link>
  );
}
