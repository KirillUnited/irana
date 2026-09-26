import type {
  NavigationItem,
  SocialLink,
  Project,
  Skill,
  Tool,
  ProcessStep,
  WebsiteType,
  ContactInfo,
} from "./types";

export const navigation: NavigationItem[] = [
  { label: 'Обо мне', href: '#about' },
  { label: 'Виды услуг', href: '#services' },
  { label: 'Этапы работы', href: '#process' },
];

export const projects: Project[] = [
  {
    id: 'laser-salon',
    number: '01',
    title: 'Сайт для студии лазерной эпиляции',
    category: 'Landing Page',
    description: 'Сайт, который помогает записаться на процедуру и почувствовать заботу ещё до первого визита.',
    image: '/images/project-laser.jpg',
    imageAlt: 'Презентация сайта студии лазерной эпиляции',
    href: 'https://www.behance.net/gallery/254806671/WebsiteDepilation-salon',
    featured: true,
  },
  {
    id: 'eco-beauty',
    number: '02',
    title: 'Интернет-магазин EcoBeauty',
    category: 'Интернет-магазин',
    description: 'Спокойный и чистый дизайн для бренда натуральной косметики с акцентом на продукт.',
    image: '/images/project-ecobeauty.jpg',
    imageAlt: 'Презентация интернет-магазина косметики EcoBeauty',
    href: '#contact',
    featured: true,
  },
];

export const processSteps: ProcessStep[] = [
  { id: 'introduction', number: '01', title: 'Знакомство', description: 'Обсуждаем задачу, цели бизнеса и формат будущего сайта.' },
  { id: 'brief', number: '02', title: 'Брифование', description: 'Собираю информацию о вас, клиентах и том, чем вы отличаетесь.' },
  { id: 'prototype', number: '03', title: 'Прототип', description: 'Выстраиваю структуру и логику страниц до начала визуальной работы.' },
  { id: 'design', number: '04', title: 'Дизайн', description: 'Создаю визуальную концепцию и довожу каждую деталь до результата.' },
  { id: 'final', number: '05', title: 'Финальный этап', description: 'Передаю готовый макет, отвечаю на вопросы и остаюсь на связи.' },
];

export const websiteTypes: WebsiteType[] = [
  { id: 'landing', number: '01', title: 'Landing Page' },
  { id: 'website', number: '02', title: 'Веб-сайты' },
  { id: 'shop', number: '03', title: 'Интернет-магазин' },
  {
    id: 'marketplace',
    number: '04',
    title: 'Карточки WB/Ozon',
    description: 'Оформление главной фотографии и галереи товара с помощью инфографики, которое поможет привлечь покупателя и увеличить ваши продажи.',
    price: 'от 10 BYN/1 шт',
    actionLabel: 'Заказать',
  },
];

export const socialLinks: SocialLink[] = [
  { label: 'Телефон', href: 'tel:+375290000000', external: false },
  { label: 'Viber', href: 'viber://chat?number=%2B375290000000', external: true },
  { label: 'Telegram', href: 'https://t.me/', external: true },
  { label: 'Mail', href: 'mailto:hello@irinakorzh.by', external: false },
  { label: 'Behance', href: 'https://behance.net/', external: true },
  { label: 'Instagram', href: 'https://instagram.com/', external: true },
];

export const contactInfo: ContactInfo = {
  phone: '+375 29 000 00 00',
  email: 'hello@irinakorzh.by',
  viber: 'viber://chat?number=%2B375290000000',
  telegram: 'https://t.me/',
  behance: 'https://behance.net/',
  instagram: 'https://instagram.com/',
  qrCode: '/images/qr-code.png',
};

export const skills: Skill[] = [
  { id: 'communication', title: 'Коммуникабельность' },
  { id: 'attentiveness', title: 'Внимательность' },
  { id: 'responsibility', title: 'Ответственность' },
  { id: 'creativity', title: 'Креативность' },
];

export const tools: Tool[] = [
  { id: 'figma', name: 'Figma' },
  { id: 'ai', name: 'AI' },
  { id: 'photoshop', name: 'Photoshop' },
];
