'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="py-10 lg:py-20 lg:pb-0">
      <div className="container relative">
        {/* Grid layout for hero */}
        <div className="lg:grid grid-cols-1 lg:grid-cols-8 lg:min-h-112.25">
          <div className="lg:col-span-8 lg:col-start-2 flex flex-col gap-6">
            <motion.div className="flex flex-col lg:grid grid-cols-1 lg:grid-cols-6 relative h-full gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Left: UI/UX label */}
              <div className="hidden lg:flex items-end lg:absolute left-0 lg:-bottom-3">
                <div className="hidden lg:block bg-background blur-3xl absolute inset-0"></div>
                <p
                  className="text-[clamp(64px,8vw,136px)] relative z-10 font-serif leading-none"
                >
                  UI/UX
                </p>
              </div>

              {/* Center: portrait image */}
              <div className="col-span-2 col-start-2 w-full h-full">
                <Image
                  src="/images/hero.jpg"
                  alt="Ирина Коржель"
                  width={0}
                  height={0}
                  sizes='100vw'
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              {/* Intro text — below heading on the right */}
              <div className="col-span-7 col-start-4 font-light self-end flex flex-col gap-4 lg:gap-10 lg:pb-20">
                <p
                  className="text-[clamp(16px,2vw,32px)]"
                >
                  Привет, я Ирина из Минска, Беларусь.
                </p>
                <p
                  className="text-[clamp(16px,2vw,32px)] self-end"
                >
                  Создаю не просто красивый дизайн,
                  <br />а сайт, который работает на Вас.
                </p>
              </div>
            </motion.div>

            <motion.div className="lg:absolute lg:-top-7 lg:right-0 lg:pointer-events-none flex lg:items-start lg:justify-end"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 , delay: 0.6}}
            >
              <div className="hidden lg:block bg-background blur-3xl absolute inset-0"></div>
              <h1
                className="font-serif font-medium text-[clamp(40px,8vw,140px)] text-right lg:text-right pointer-events-auto relative leading-none tracking-tight"
              >
                ВЕБ-ДИЗАЙН
              </h1>
            </motion.div>



            {/* Mobile: UI/UX label */}
            <motion.div className="lg:hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p
                className="text-[clamp(64px,9vw,136px)] font-serif font-medium leading-none"
              >
                UI/UX
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
