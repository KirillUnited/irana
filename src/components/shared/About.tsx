'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { StarIcon2 } from './Icons';

export function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-8">
          {/* Photo */}
          <motion.div
            className="relative order-1 h-full lg:order-0 lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-muted overflow-hidden">
              <Image
                src="/images/portrait.jpg"
                alt="Ирина Коржель"
                width={0}
                height={0}
                sizes="100vw"
                quality={60}
                loading="eager"
                className="h-full w-full object-cover"
              />
            </div>
            <StarIcon2
              className="text-foreground/50 absolute right-0 -bottom-1/6 -z-10 translate-x-1/2"
              color="currentColor"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            className="relative order-2 flex flex-col lg:order-0 lg:col-span-4 lg:col-start-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="lg:absolute lg:top-0 lg:left-0 lg:-translate-x-1/2">
              <h2 className="relative z-10 text-center font-serif text-[clamp(64px,8vw,136px)] leading-normal font-medium text-balance">
                ОБО МНЕ
              </h2>
              <div className="bg-background absolute inset-0 z-0 hidden blur-3xl lg:block"></div>
            </div>
            <div className="text-foreground space-y-4 leading-snug tracking-tighter md:text-xl lg:mt-52 lg:space-y-8">
              <p className="text-4xl font-light">Привет, меня зовут Ирина.</p>
              <div className="flex grid-cols-4 flex-col gap-4 text-pretty md:gap-10 lg:grid lg:gap-20">
                <p className="col-span-4">
                  Я начинающий веб-дизайнер, поэтому для меня Ваш проект — это не поток,
                  а&nbsp;возможность создать что-то выдающееся для своего портфолио.
                </p>
                <p className="col-span-3 col-start-2">
                  Я уделю вашему сайту в 10 раз больше времени и&nbsp;внимания, чем перегруженный
                  профи, и&nbsp;сделаю всё, чтобы результат превзошел ожидания и&nbsp;помог вашему
                  бизнесу вырасти.
                </p>
                <p className="col-span-4">
                  Я гарантирую полную точность в проекте, современные тенденции и&nbsp;дизайн
                  по цене ниже рыночной в обмен на подробный отзыв и&nbsp;возможность использовать
                  проект в моем портфолио.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
