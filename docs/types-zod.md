# TYPESCRIPT TYPES + ZOD FORMS

## 1. Структура файлов

Добавить:

```text
src/
├── lib/
│   ├── types.ts
│   ├── forms.ts
│   └── content.ts
│
└── components/
    └── ...
```

Ответственность:

```text
types.ts
    ↓
Типы данных приложения
Project
Service
ProcessStep
SocialLink
NavigationItem
...

forms.ts
    ↓
Zod-схемы пользовательского ввода
ContactFormSchema
...

content.ts
    ↓
Конкретные данные портфолио
projects
services
processSteps
socialLinks
...
```

---

# 2. `src/lib/types.ts`

Я бы заложил следующие типы:

```ts
import type { z } from "zod";
import { contactFormSchema } from "./forms";

export type ContactFormData = z.infer<typeof contactFormSchema>;

export type NavigationItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  href?: string;
  featured?: boolean;
};

export type Skill = {
  id: string;
  title: string;
};

export type Tool = {
  id: string;
  name: string;
  icon?: string;
};

export type ProcessStep = {
  id: string;
  number: string;
  title: string;
  description: string;
};

export type WebsiteType = {
  id: string;
  number: string;
  title: string;
  description?: string;
  price?: string;
  actionLabel?: string;
};

export type ContactInfo = {
  phone?: string;
  email?: string;
  viber?: string;
  instagram?: string;
  behance?: string;
  telegram?: string;
  qrCode?: string;
};
```

### Почему именно так

`Project` не должен быть связан с React-компонентом:

```tsx
<ProjectCard project={project} />
```

Компонент только отображает данные.

Это позволит потом легко заменить:

```ts
const projects: Project[] = [...]
```

на данные из:

* JSON;
* CMS;
* API;
* базы данных.

При этом UI менять не придётся.

---

# 3. `src/lib/forms.ts`

Для формы из твоего дизайна:

```text
Имя
Телефон
E-mail
Сообщение
```

создаём Zod schema:

```ts
import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Введите имя")
    .max(100, "Имя слишком длинное"),

  phone: z
    .string()
    .trim()
    .min(5, "Введите номер телефона")
    .max(30, "Неверный формат телефона"),

  email: z
    .string()
    .trim()
    .email("Введите корректный e-mail")
    .max(254, "E-mail слишком длинный"),

  message: z
    .string()
    .trim()
    .min(10, "Введите сообщение")
    .max(2000, "Сообщение слишком длинное"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
```

---

# 4. Важное правило для агента

Я бы явно указал:

> **Не создавать отдельные TypeScript-интерфейсы для формы в компонентах.**

То есть нельзя:

```tsx
interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}
```

внутри:

```text
contact-form.tsx
```

Источник истины должен быть:

```text
forms.ts
     ↓
contactFormSchema
     ↓
z.infer
     ↓
ContactFormData
```

Так Zod и TypeScript всегда синхронизированы.

---

# 5. Более правильная схема импорта

Чтобы не получить дублирование типов, я бы немного изменил предыдущий вариант.

### `forms.ts`

```ts
import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Введите имя")
    .max(100, "Имя слишком длинное"),

  phone: z
    .string()
    .trim()
    .min(5, "Введите номер телефона")
    .max(30, "Неверный формат телефона"),

  email: z
    .string()
    .trim()
    .email("Введите корректный e-mail")
    .max(254, "E-mail слишком длинный"),

  message: z
    .string()
    .trim()
    .min(10, "Введите сообщение")
    .max(2000, "Сообщение слишком длинное"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
```

### `types.ts`

```ts
export type NavigationItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  href?: string;
  featured?: boolean;
};

export type Skill = {
  id: string;
  title: string;
};

export type Tool = {
  id: string;
  name: string;
  icon?: string;
};

export type ProcessStep = {
  id: string;
  number: string;
  title: string;
  description: string;
};

export type WebsiteType = {
  id: string;
  number: string;
  title: string;
  description?: string;
  price?: string;
  actionLabel?: string;
};

export type ContactInfo = {
  phone?: string;
  email?: string;
  viber?: string;
  instagram?: string;
  behance?: string;
  telegram?: string;
  qrCode?: string;
};
```

И это архитектурно чище: **формы отвечают за формы, types.ts — за доменную модель портфолио.**

---

# 6. `content.ts` становится типизированным

Например:

```ts
import type {
  NavigationItem,
  Project,
  Skill,
  Tool,
  ProcessStep,
  WebsiteType,
  ContactInfo,
} from "./types";

export const navigation: NavigationItem[] = [
  {
    label: "Обо мне",
    href: "#about",
  },
  {
    label: "Виды услуг",
    href: "#services",
  },
  {
    label: "Этапы работы",
    href: "#process",
  },
];
```

Проекты:

```ts
export const projects: Project[] = [
  {
    id: "salon",
    number: "01",
    title: "Сайт для салона красоты",
    category: "Landing Page",
    description:
      "Современный сайт для презентации услуг салона красоты.",
    image: "/images/projects/salon.jpg",
    imageAlt: "Дизайн сайта салона красоты",
    href: "#",
    featured: true,
  },

  {
    id: "eco-beauty",
    number: "02",
    title: "EcoBeauty",
    category: "Интернет-магазин",
    description:
      "Дизайн интернет-магазина косметики.",
    image: "/images/projects/eco-beauty.jpg",
    imageAlt: "Дизайн интернет-магазина EcoBeauty",
    href: "#",
    featured: true,
  },
];
```

Теперь компонент:

```tsx
<ProjectCard project={project} />
```

получает полностью типизированный объект.

---

# 7. Этапы работы

Для твоей секции:

```ts
export const processSteps: ProcessStep[] = [
  {
    id: "introduction",
    number: "01",
    title: "Знакомство",
    description: "...",
  },
  {
    id: "brief",
    number: "02",
    title: "Брифование",
    description: "...",
  },
  {
    id: "prototype",
    number: "03",
    title: "Прототип",
    description: "...",
  },
  {
    id: "design",
    number: "04",
    title: "Дизайн",
    description: "...",
  },
  {
    id: "final",
    number: "05",
    title: "Финальный этап",
    description: "...",
  },
];
```

Это особенно полезно для mobile.

Desktop может отображать:

```text
01      03      05
02      04
```

а mobile:

```text
01
02
03
04
05
```

**Данные остаются одинаковыми — меняется только layout.**

---

# 8. Website Types

Для блока:

```text
01 Landing Page
02 Веб-сайты
03 Интернет-магазин
04 Карточки WB/Ozon
```

тип:

```ts
export const websiteTypes: WebsiteType[] = [
  {
    id: "landing",
    number: "01",
    title: "Landing Page",
  },
  {
    id: "website",
    number: "02",
    title: "Веб-сайты",
  },
  {
    id: "shop",
    number: "03",
    title: "Интернет-магазин",
  },
  {
    id: "marketplace",
    number: "04",
    title: "Карточки WB/Ozon",
    description:
      "Оформление главной фотографии и галереи товара с инфографикой.",
    price: "от 10 BYN / 1 шт",
    actionLabel: "Заказать",
  },
];
```

---

# 9. ContactInfo

Контактные данные тоже не стоит хардкодить внутри Footer:

```tsx
<a>Phone</a>
<a>Mail</a>
<a>Instagram</a>
```

Лучше:

```ts
export const contactInfo: ContactInfo = {
  phone: "+375...",
  email: "...",
  viber: "...",
  instagram: "...",
  behance: "...",
  telegram: "...",
  qrCode: "/images/qr-code.png",
};
```

Тогда один источник используется:

```text
Header Contact
       ↓
ContactDialog
       ↓
ContactDrawer
       ↓
Footer
```

---

# 10. Как будет выглядеть итоговая архитектура

```text
                         content.ts
                             │
          ┌──────────────────┼──────────────────┐
          ↓                  ↓                  ↓
       projects          processSteps       websiteTypes
          │                  │                  │
          ↓                  ↓                  ↓
   ProjectCard        ProcessStepCard     WebsiteTypeCard


                         forms.ts
                            │
                            ↓
                  contactFormSchema
                            │
                            ↓
                    ContactFormData
                            │
             ┌──────────────┴──────────────┐
             ↓                             ↓
       ContactDialog                 ContactDrawer
             │                             │
             └──────────────┬──────────────┘
                            ↓
                       ContactForm
```

---

## 11. Готовое ТЗ для кодирующего агента

```text
ШАГ 2 — TYPESCRIPT TYPES + ZOD FORMS

Создай типизированную архитектуру данных портфолио.

Файлы:

src/lib/types.ts
src/lib/forms.ts

1. types.ts

Создай типы:

- NavigationItem
- SocialLink
- Project
- Skill
- Tool
- ProcessStep
- WebsiteType
- ContactInfo

Не создавай типы для формы контактов вручную в types.ts.

2. forms.ts

Используй Zod.

Создай:

export const contactFormSchema = z.object({
  name: ...
  phone: ...
  email: ...
  message: ...
});

Экспортируй:

export type ContactFormData = z.infer<typeof contactFormSchema>;

Validation:
- name: 2–100 символов
- phone: 5–30 символов
- email: валидный email, max 254
- message: 10–2000 символов
- все значения trim()
- сообщения об ошибках на русском языке.

3. Не дублируй типы формы в React-компонентах.

4. Все динамические данные портфолио должны использовать типы из types.ts.

5. content.ts должен импортировать типы:

import type {
  NavigationItem,
  Project,
  Skill,
  Tool,
  ProcessStep,
  WebsiteType,
  ContactInfo,
} from "@/lib/types";

6. React-компоненты должны получать данные через props:

<ProjectCard project={project} />

<ProcessStep step={step} />

<WebsiteTypeCard type={type} />

7. Не хардкодить данные проектов, этапов и услуг непосредственно внутри JSX.

8. ContactForm должен использовать contactFormSchema как единственный источник validation logic.

9. Не использовать `any`.

10. Сохранять strict TypeScript compatibility.
```