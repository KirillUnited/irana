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

import { Figma, AI, Photoshop } from '@/components/shared/Icons';

export const siteConfig = {
  seo: {
    title: 'Irina Korzhel - Portfolio',
    description: '',
  },
};

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
  {
    id: 'introduction',
    number: '01',
    title: 'Знакомство',
    description: [
      'Знакомлюсь с задачами и целями.',
      'Обсуждаем рамки — цену и сроки.',
      'Получаю материалы от заказчика.',
      'Назначаем дату и время брифинга.',
    ],
  },
  {
    id: 'brief',
    number: '02',
    title: 'Брифование',
    description: [
      'Обсуждаем важные моменты разработки и уточняем пожелания, чтобы избежать недопонимания.',
      'Заполняем анкету.',
      'Обсуждаем детали проекта.',
      'Анализируем конкурентов.',
    ],
  },
  {
    id: 'prototype',
    number: '03',
    title: 'Прототип',
    description: [
      'Составляю структуру сайта: количество блоков и страниц.',
      'Разрабатываю стилистику сайта: подбираю референсы, цвета и шрифты.',
      'Создаю схематичное изображение всех элементов в чёрно-белом варианте.',
    ],
  },
  {
    id: 'design',
    number: '04',
    title: 'Дизайн',
    description: [
      'Перевожу прототип в дизайн для десктопной и мобильной версий с учётом ваших пожеланий.',
    ],
  },
  {
    id: 'final',
    number: '05',
    title: 'Финальный этап',
    description: [
      'Согласовываем финальную версию проекта.',
      'Подготавливаю макеты для передачи разработчику.',
      'Настраиваю адаптивность и анимацию.',
    ],
  },
];

export const websiteTypes: WebsiteType[] = [
  { id: 'landing', number: '01', title: 'Landing Page', 
    description: 'Сайт представляет из себя одностраничник (лендинг пейдж). Поэтому вся информация представлена на одной страницей по блокам. Первый экран: Заголовок с главным предложением (УТП), яркая картинка или видео и кнопка действия. Офер / Описание товара: Характеристики, цены, варианты использования. Отзывы реальных клиентов, кейсы, сертификаты, контакты.',
    price: 'от 300 BYN',
    actionLabel: 'Заказать',
},
  { id: 'website', number: '02', title: 'Веб-сайты',
    description: 'Сайт будет состоять из нескольских страниц, как правило включая главную на которой заголовок с главным предложением (УТП), яркая картинка или видео и кнопка действия, объемную фотогалерею - страницу-каталогс характеристиками, ценами, страница отзывов и пр.',
    price: 'от 900 BYN',
    actionLabel: 'Заказать',
   },
  { id: 'shop', number: '03', title: 'Интернет-магазин',
    description: '',
    price: '',
    actionLabel: 'Заказать', },
  {
    id: 'marketplace',
    number: '04',
    title: 'Карточки WB/Ozon',
    description: 'Оформление главной фотографии и галереи товара с помощью инфографики, которое поможет привлечь покупателя и увеличить Ваши продажи.',
    price: 'от 10 BYN/1 шт',
    actionLabel: 'Заказать',
  },
];

export const socialLinks: SocialLink[] = [
  { label: 'Телефон', href: 'tel:+375445764476', external: false },
  { label: 'Viber', href: 'viber://chat?number=%2B375445764476', external: true },
  { label: 'Telegram', href: 'https://t.me/webdesigner_Korzhel', external: true },
  { label: 'Mail', href: 'mailto:hello@irinakorzh.by', external: false },
  { label: 'Behance', href: 'https://behance.net/', external: true },
  { label: 'Instagram', href: 'https://instagram.com/', external: true },
];

export const contactInfo: ContactInfo = {
  phone: '+375(44)576-44-76',
  email: 'hello@irinakorzh.by',
  viber: 'viber://chat?number=%2B375445764476',
  telegram: 'https://t.me/webdesigner_Korzhel',
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
  { id: 'figma', name: 'Figma', icon: Figma },
  { id: 'ai', name: 'AI', icon: AI },
  { id: 'photoshop', name: 'Photoshop', icon: Photoshop },
];
