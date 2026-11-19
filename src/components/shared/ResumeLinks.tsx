import Link from 'next/link';
import { Eye, Download } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ResumeLinksProps {
  className?: string;
}

export function ResumeLinks({ className }: ResumeLinksProps) {
  return (
    <div className={cn('flex flex-col items-start gap-4 text-2xl', className)}>
      <Link
        href="https://canva.link/ctntt6jnhapq614"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-link"
      >
        <div className="flex items-center gap-3 font-serif font-medium">
          <Eye className="size-5" strokeWidth={1.5} />
          <span>Посмотреть резюме</span>
        </div>
      </Link>
      <Link href="/docs/resume.pdf" download className="nav-link">
        <div className="flex items-center gap-3 font-serif font-medium">
          <Download className="size-5" strokeWidth={1.5} />
          <span>Скачать резюме</span>
        </div>
      </Link>
    </div>
  );
}
