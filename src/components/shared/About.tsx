import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Photo */}
          <div className="order-1 lg:order-none">
            <div className="aspect-[4/5] overflow-hidden bg-muted">
              <Image
                src="/images/about-photo.jpg"
                alt="Ирина Коржель"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-2 flex flex-col justify-center lg:order-none">
            <h2 className="text-5xl leading-[0.9] md:text-6xl lg:text-8xl xl:text-9xl">
              ОБО МНЕ
            </h2>
            <div className="mt-8 space-y-4 text-sm leading-relaxed text-foreground/70 md:text-base">
              <p>
                Привет, я Ирина — UI/UX дизайнер с фокусом на создании чистых, функциональных и эстетичных интерфейсов.
              </p>
              <p>
                Мой подход к дизайну основан на понимании потребностей пользователей и бизнес-целей заказчика. Я верю, что хороший дизайн должен быть не только красивым, но и работать на результат.
              </p>
              <p>
                Работаю с проектами разного масштаба — от лендингов до интернет-магазинов, помогая брендам найти свой уникальный визуальный язык.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
