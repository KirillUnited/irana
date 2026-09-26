import Image from 'next/image';

export function Hero() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Photo */}
          <div className="order-1 lg:order-none">
            <div className="aspect-[4/5] overflow-hidden bg-muted">
              <Image
                src="/images/hero-photo.jpg"
                alt="Ирина Коржель"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-2 flex flex-col justify-center lg:order-none">
            <h1 className="text-5xl leading-[0.9] md:text-6xl lg:text-8xl xl:text-9xl">
              UI/UX
            </h1>
            <h2 className="mt-4 text-4xl leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl">
              ВЕБ-ДИЗАЙНЕР
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-foreground/70 md:text-base">
              Привет, я Ирина. Создаю дизайны, которые помогают бизнесу быть увиденным и понятным.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
