export type Project = {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type Service = {
  number: string;
  title: string;
  description?: string;
  price?: string;
  featured?: boolean;
};

export const navigation = [
  { label: 'Обо мне', href: '#about' },
  { label: 'Виды услуг', href: '#services' },
  { label: 'Этапы работы', href: '#process' },
];

export const projects: Project[] = [
  {
    number: '01',
    title: 'Сайт для студии лазерной эпиляции',
    description: 'Сайт, который помогает записаться на процедуру и почувствовать заботу ещё до первого визита.',
    image: '/images/project-laser.jpg',
    alt: 'Презентация сайта студии лазерной эпиляции',
    href: 'https://www.behance.net/gallery/254806671/WebsiteDepilation-salon',
  },
  {
    number: '02',
    title: 'Интернет-магазин EcoBeauty',
    description: 'Спокойный и чистый дизайн для бренда натуральной косметики с акцентом на продукт.',
    image: '/images/project-ecobeauty.jpg',
    alt: 'Презентация интернет-магазина косметики EcoBeauty',
    href: '#contact',
  },
];

export const processSteps: ProcessStep[] = [
  { number: '01', title: 'Знакомство', description: 'Обсуждаем задачу, цели бизнеса и формат будущего сайта.' },
  { number: '02', title: 'Брифование', description: 'Собираю информацию о вас, клиентах и том, чем вы отличаетесь.' },
  { number: '03', title: 'Прототип', description: 'Выстраиваю структуру и логику страниц до начала визуальной работы.' },
  { number: '04', title: 'Дизайн', description: 'Создаю визуальную концепцию и довожу каждую деталь до результата.' },
  { number: '05', title: 'Финальный этап', description: 'Передаю готовый макет, отвечаю на вопросы и остаюсь на связи.' },
];

export const services: Service[] = [
  { number: '01', title: 'Landing Page' },
  { number: '02', title: 'Веб-сайты' },
  { number: '03', title: 'Интернет-магазин' },
  {
    number: '04',
    title: 'Карточки WB/Ozon',
    description: 'Оформление главной фотографии и галереи товара с помощью инфографики, которое поможет привлечь покупателя и увеличить ваши продажи.',
    price: 'от 10 BYN/1 шт',
    featured: true,
  },
];

export const contacts = [
  { label: 'Телефон', value: '+375 29 000 00 00', href: 'tel:+375290000000' },
  { label: 'Viber', value: 'Написать в Viber', href: 'viber://chat?number=%2B375290000000' },
  { label: 'Telegram', value: '@irinakorzh', href: 'https://t.me/' },
  { label: 'Mail', value: 'hello@irinakorzh.by', href: 'mailto:hello@irinakorzh.by' },
  { label: 'Behance', value: 'behance.net/irinakorzh', href: 'https://behance.net/' },
  { label: 'Instagram', value: '@irinakorzh', href: 'https://instagram.com/' },
];
