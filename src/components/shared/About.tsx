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
            className="order-1 lg:order-0 relative col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="overflow-hidden bg-muted">
              <Image
                src="/images/portrait.jpg"
                alt="Ирина Коржель"
                width={0}
                height={0}
                sizes='100vw'
                quality={60}
                loading="eager"
                className="object-cover w-full"
              />
            </div>
            <StarIcon2 className="absolute -bottom-1/6 right-0 translate-x-1/2 -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            className="order-2 flex flex-col lg:order-0 relative col-span-4 col-start-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-[clamp(64px,9vw,136px)] font-serif font-medium">
              ОБО МНЕ
            </h2>
            <div className="space-y-8 leading-snug tracking-tighter text-foreground/70 md:text-xl">
              <p className='text-4xl font-light'>Привет, меня зовут Ирина.</p>
              <div className="flex flex-col lg:grid grid-cols-4 gap-4 lg:gap-20">
                <p className='col-span-4'>
                  Я начинающий веб-дизайнер, поэтому для меня Ваш проект — это не поток, а возможность создать что-то выдающееся для своего портфолио.
                </p>
                <p className='col-span-3 col-start-2'>
                  Я уделю вашему сайту в 10 раз больше времени и внимания, чем перегруженный профи, и сделаю всё, чтобы результат превзошел ожидания и помог вашему бизнесу вырасти.
                </p>
                <p className='col-span-4'>
                  Я гарантирую полную точность в проекте, современные тенденции и дизайн по цене ниже рыночной в обмен на подробный отзыв и возможность использовать проект в моем портфолио.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
