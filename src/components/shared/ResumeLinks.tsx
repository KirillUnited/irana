import Link from 'next/link';
import { Eye, Download } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ResumeLinksProps {
  className?: string;
}

export function ResumeLinks({ className }: ResumeLinksProps) {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <Link
        href="https://canva.link/ctntt6jnhapq614"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-link flex items-center gap-3 font-serif text-lg font-medium"
      >
        <Eye className="size-5" strokeWidth={1.5} />
        <span>Посмотреть резюме</span>
      </Link>
      <Link
        href="/docs/resume.pdf"
        download
        className="nav-link flex items-center gap-3 font-serif text-lg font-medium"
      >
        <Download className="size-5" strokeWidth={1.5} />
        <span>Скачать резюме</span>
      </Link>
    </div>
  );
}
