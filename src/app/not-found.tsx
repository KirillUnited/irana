import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex-1">
      <section className="paper-grid border-b">
        <div className="container flex min-h-[calc(100dvh-4.5rem)] flex-col items-center justify-center gap-8 py-20 text-center">
          <p className="uppercase tracking-widest text-base text-muted-foreground">Ошибка 404</p>

          <h1 className="display-title max-w-4xl text-6xl sm:text-7xl lg:text-8xl">
            Страница<br />
            не найдена
          </h1>

          <p className="max-w-xl text-lg font-light text-muted-foreground">
            Кажется, такой страницы не существует или она была перемещена.
            Вернитесь на главную, чтобы посмотреть портфолио и услуги.
          </p>

          <Button asChild size="lg" className="font-serif font-medium text-xl hover:cursor-pointer">
            <Link href="/" className="arrow-link flex items-center gap-2">
              <span>На главную</span>
              <ArrowRightIcon className="arrow-link-icon" size={24} strokeWidth={1.2} />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
