# 1. Общая стратегия responsive

Я бы использовал **mobile-first**:

```text
0–639 px       → Mobile
640–767 px     → Large mobile / small tablet
768–1023 px    → Tablet
1024+ px       → Desktop
1280+ px       → Large desktop
```

В Tailwind это естественно раскладывается так:

```text
default → mobile
sm:     → 640px+
md:     → 768px+
lg:     → 1024px+
xl:     → 1280px+
```

Tailwind v4 использует именно mobile-first подход: классы без префикса применяются к мобильным, а `md:`, `lg:` и т.д. добавляют изменения начиная с соответствующей ширины. Стандартные breakpoint'ы Tailwind: `sm=640`, `md=768`, `lg=1024`, `xl=1280`, `2xl=1536`. ([Tailwind CSS][1])

**Для этого проекта я бы пока не создавал кастомные breakpoint'ы.**

Основные точки:

```tsx
// mobile
default

// tablet
md:

// desktop
lg:

// large desktop
xl:
```

---

# 2. Header → мобильная навигация

На desktop сейчас:

```text
Ирина Коржель
        Обо мне
        Виды услуг
        Этапы работы
        Связаться со мной →
```

На mobile:

```text
┌─────────────────────────────┐
│ Ирина                 ☰     │
└─────────────────────────────┘
```

### Структура

```tsx
<header>
  <div className="...">
    
    <Logo />

    {/* Desktop navigation */}
    <nav className="hidden lg:flex">
      ...
    </nav>

    {/* Mobile */}
    <div className="lg:hidden">
      <MobileNavigation />
    </div>

  </div>
</header>
```

### shadcn → `Sheet`

Для hamburger-menu я бы использовал:

```bash
npx shadcn@latest add sheet
```

`Sheet` как раз предназначен для выезжающей панели, а направление можно задавать через `side="right"`. ([shadcn/ui][2])

Структура:

```tsx
<Sheet>
  <SheetTrigger asChild>
    <Button variant="ghost" size="icon">
      <Menu />
    </Button>
  </SheetTrigger>

  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Меню</SheetTitle>
    </SheetHeader>

    <nav className="flex flex-col">
      <a href="#about">Обо мне</a>
      <a href="#services">Виды услуг</a>
      <a href="#process">Этапы работы</a>
      <a href="#portfolio">Мои работы</a>
    </nav>
  </SheetContent>
</Sheet>
```

### Важный момент

Не нужно делать отдельную страницу `/menu`.

`Sheet` должен быть **частью Header** и открываться поверх текущей страницы.

---

# 3. Кнопка «Связаться со мной»

На desktop у тебя это фактически небольшой popup в правом верхнем углу.

На мобильном **не стоит пытаться сохранить эту маленькую форму такого же размера**.

Лучше:

```text
Desktop:
Button
   ↓
Dialog / Popover

Mobile:
Button
   ↓
Drawer
```

shadcn прямо предусматривает responsive-композицию `Dialog + Drawer`, когда desktop использует dialog, а mobile — drawer. ([shadcn/ui][3])

### Mobile

Я бы сделал:

```text
┌─────────────────────────┐
│       Связаться         │
│                         │
│ Ваши контакты           │
│                         │
│ Имя                     │
│ ─────────────────────   │
│                         │
│ Телефон                 │
│ ─────────────────────   │
│                         │
│ E-mail                  │
│ ─────────────────────   │
│                         │
│ Сообщение               │
│ ┌─────────────────────┐ │
│ │                     │ │
│ │                     │ │
│ └─────────────────────┘ │
│                         │
│ Отправить →             │
│                         │
│ Мои контакты             │
│ Phone                   │
│ Mail                    │
│ Viber                   │
│ Instagram               │
│ Behance                 │
│ Telegram                │
│                         │
│ QR                      │
└─────────────────────────┘
```

То есть на mobile:

```tsx
<Drawer>
  <DrawerContent>
    <ContactForm />
    <SocialLinks />
  </DrawerContent>
</Drawer>
```

У `Drawer` есть scrollable content и настройка высоты/ширины, что удобно для длинной контактной формы на смартфоне. ([shadcn/ui][3])

---

# 4. Hero

На desktop у тебя достаточно сложная композиция:

```text
          [PHOTO]
UI/UX             БЕ...
        Привет, я...
```

На mobile я бы **полностью убрал absolute-positioning, если оно используется сейчас**.

Сделать:

```text
┌─────────────────────┐
│                     │
│      [ PHOTO ]      │
│                     │
│      UI/UX          │
│                     │
│  ВЕБ-ДИЗАЙНЕР       │
│                     │
│  Привет, я Ирина... │
│                     │
└─────────────────────┘
```

Например:

```tsx
<section className="px-4 py-10 lg:px-8">
  <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">

    <div>
      <Image ... />
    </div>

    <div>
      <h1>UI/UX</h1>
      <h2>ВЕБ-ДИЗАЙНЕР</h2>
      <p>Привет, я Ирина...</p>
    </div>

  </div>
</section>
```

### Главное правило

На mobile:

```tsx
flex-col
```

На desktop:

```tsx
lg:grid-cols-2
```

---

# 5. Типографика

У тебя огромные serif-заголовки:

```text
ОБО МНЕ
ЭТАПЫ РАБОТЫ
ВИДЫ САЙТОВ
МОИ РАБОТЫ
```

На mobile нельзя оставлять desktop-размер.

Например:

```tsx
<h2
  className="
    text-5xl
    leading-[0.9]
    md:text-6xl
    lg:text-8xl
    xl:text-9xl
  "
>
  ОБО МНЕ
</h2>
```

То есть:

```text
mobile → 48px
tablet → 60px
desktop → 96px+
```

Причём я бы обязательно оставил:

```css
leading-[0.9]
```

потому что твой дизайн держится на плотной editorial typography.

---

# 6. Секция «Мои работы»

Это один из самых важных responsive-переходов.

На desktop:

```text
┌────────────┐ ┌────────────┐
│ Project 01 │ │ Project 02 │
│            │ │            │
└────────────┘ └────────────┘
```

На mobile:

```text
┌─────────────────────┐
│                     │
│      Project 01     │
│                     │
└─────────────────────┘

┌─────────────────────┐
│                     │
│      Project 02     │
│                     │
└─────────────────────┘
```

### Tailwind

```tsx
<div className="
  grid
  grid-cols-1
  gap-8
  md:grid-cols-2
  lg:grid-cols-2
">
```

То есть именно:

```tsx
grid-cols-1 lg:grid-cols-2
```

Для твоего дизайна я бы даже не вводил `sm:grid-cols-2`.

На телефоне **одна работа на всю ширину** выглядит гораздо чище.

---

# 7. Карточка проекта

Desktop:

```text
image
↓
название
↓
описание
```

Mobile:

```text
┌─────────────────────────┐
│                         │
│         IMAGE           │
│                         │
└─────────────────────────┘

01
Landing Page

Короткое описание проекта

Смотреть проект →
```

Карточка:

```tsx
<article className="group">
  <div className="aspect-[4/3] overflow-hidden">
    <Image
      className="h-full w-full object-cover transition-transform group-hover:scale-105"
      ...
    />
  </div>

  <div className="mt-4">
    <span>01</span>
    <h3>Landing Page</h3>
    <p>...</p>
  </div>
</article>
```

На mobile желательно:

```tsx
aspect-[4/3]
```

или, если изображения вертикальные:

```tsx
aspect-[3/4]
```

Но **не задавать фиксированную высоту типа `h-[500px]`**.

---

# 8. Секция «Обо мне»

Desktop у тебя:

```text
┌──────────────┬───────────────────┐
│              │ ОБО МНЕ           │
│     PHOTO    │ Привет, я Ирина   │
│              │                   │
│              │ текст             │
└──────────────┴───────────────────┘
```

Mobile:

```text
┌─────────────────────┐
│                     │
│        PHOTO        │
│                     │
└─────────────────────┘

ОБО МНЕ

Привет, я Ирина.

текст...

текст...
```

Использовать:

```tsx
<div className="
  grid
  grid-cols-1
  lg:grid-cols-2
">
```

На mobile изображение **первым**, текст вторым.

Если desktop требует другой порядок, можно использовать:

```tsx
order-1
lg:order-none
```

---

# 9. Декоративная графика

На твоём desktop есть большая декоративная форма между блоками:

```text
      \ | /
       \|/
    --- ✦ ---
       /|\
      / | \
```

На mobile я бы **не сохранял её в том же масштабе**.

Вариант:

```tsx
<div className="
  absolute
  right-[-20px]
  top-[30%]
  w-24
  md:w-40
  lg:w-64
">
```

Или вообще:

```tsx
hidden md:block
```

если декоративный элемент начинает мешать контенту.

Главное правило для mobile:

> декоративный элемент не должен влиять на layout и создавать горизонтальный overflow.

Проверять:

```css
overflow-x-hidden
```

на уровне страницы, если графика выходит за пределы viewport.

---

# 10. «Мои навыки» + «Мои инструменты»

На desktop:

```text
┌─────────────────────┬─────────────────────┐
│ МОИ НАВЫКИ          │ МОИ ИНСТРУМЕНТЫ     │
│                     │                     │
│ Коммуникабельность  │ Figma               │
│ Внимательность      │ AI                  │
│ Ответственность     │ Photoshop           │
│ Креативность        │                     │
└─────────────────────┴─────────────────────┘
```

На mobile:

```text
МОИ НАВЫКИ

Коммуникабельность
Внимательность
Ответственность
Креативность


МОИ ИНСТРУМЕНТЫ

Figma
AI
Photoshop
```

То есть:

```tsx
<div className="
  grid
  grid-cols-1
  gap-12
  lg:grid-cols-2
">
```

Не пытаться держать два блока рядом на телефоне.

---

# 11. «Этапы работы»

Desktop у тебя очень горизонтальная композиция:

```text
01          03          05
Знакомство  Прототип    Финальный этап

       02          04
       Брифование  Дизайн
```

На mobile это лучше превратить в **вертикальный timeline**:

```text
01
ЗНАКОМСТВО
──────────────
описание


02
БРИФОВАНИЕ
──────────────
описание


03
ПРОТОТИП
──────────────
описание


04
ДИЗАЙН
──────────────
описание


05
ФИНАЛЬНЫЙ ЭТАП
──────────────
описание
```

Это намного лучше, чем пытаться сохранить desktop zig-zag.

### Компонент

```tsx
<ProcessStep
  number="01"
  title="Знакомство"
  description="..."
/>
```

И:

```tsx
<div className="flex flex-col gap-10 lg:grid lg:grid-cols-2">
```

На desktop можно вернуть исходное позиционирование через `grid`.

---

# 12. «Виды сайтов»

На desktop:

```text
01       02       03       04
Landing  Веб      Магазин  WB/Ozon
```

На mobile я бы сделал **вертикальные карточки**:

```text
01
Landing Page
────────────────────

02
Веб-сайты
────────────────────

03
Интернет-магазин
────────────────────

04
Карточки WB/Ozon

Описание...

от 10 BYN / 1 шт
Заказать →
```

Grid:

```tsx
<div className="
  grid
  grid-cols-1
  md:grid-cols-2
  lg:grid-cols-4
">
```

Здесь `md:grid-cols-2` уже имеет смысл: на планшете две карточки в ряд.

---

# 13. Footer

Desktop footer у тебя очень широкий:

```text
Ирина Коржель
Обо мне
Портфолио
Виды услуг
...
Phone
Mail
Viber
...
QR
```

На mobile:

```text
Ирина Коржель

Обо мне
Портфолио
Виды услуг
Этапы работы

────────────────

Связаться со мной →

Phone
Mail
Viber
Instagram
Behance
Telegram

       QR
```

Grid:

```tsx
<footer>
  <div className="
    grid
    grid-cols-1
    gap-8
    sm:grid-cols-2
    lg:grid-cols-5
  ">
```

QR-код на mobile можно сделать:

```tsx
mx-auto
```

или расположить справа в отдельном блоке.

---

# 14. Отступы страницы

Это очень важно для соответствия дизайну.

На desktop:

```tsx
px-4 md:px-8 lg:px-16
```

На mobile я бы держал:

```tsx
px-4
```

то есть примерно:

```text
320px viewport

16px │ content │ 16px
```

На 375px:

```text
16px │ content │ 16px
```

На 430px:

```text
20px │ content │ 20px
```

Можно использовать:

```tsx
px-4 sm:px-6 lg:px-8
```

---

# 15. Контейнер страницы

Я бы сделал общий компонент:

```tsx
<section className="px-4 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-[1440px]">
    ...
  </div>
</section>
```

Так все секции будут иметь одинаковую ширину.

Например:

```tsx
export function Section({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1440px]">
        {children}
      </div>
    </section>
  )
}
```

---

# 16. Рекомендуемая архитектура компонентов

Я бы в итоге разложил страницу примерно так:

```text
src/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── sheet.tsx
│   │   ├── drawer.tsx
│   │   ├── dialog.tsx
│   │   ├── input.tsx
│   │   └── textarea.tsx
│   │
│   ├── shared/
│   │   ├── header.tsx
│   │   ├── mobile-navigation.tsx
│   │   ├── contact-dialog.tsx
│   │   ├── contact-drawer.tsx
│   │   └── footer.tsx
│   │
│   └── portfolio/
│       ├── hero.tsx
│       ├── about.tsx
│       ├── projects.tsx
│       ├── project-card.tsx
│       ├── skills.tsx
│       ├── process.tsx
│       ├── process-step.tsx
│       ├── website-types.tsx
│       └── website-type-card.tsx
│
└── lib/
    └── content.ts
```

Это хорошо соответствует уже существующей структуре проекта, где `components/ui` предназначен для shadcn-компонентов, а проект построен вокруг переиспользуемых компонентов.

---

# 17. Какие shadcn-компоненты реально нужны

Я бы **не добавлял десятки новых shadcn-компонентов только ради mobile**.

| Задача               | shadcn                          |
| -------------------- | ------------------------------- |
| Hamburger menu       | `Sheet`                         |
| Contact mobile       | `Drawer`                        |
| Contact desktop      | `Dialog`                        |
| Кнопки               | `Button`                        |
| Поле имени           | `Input`                         |
| Телефон              | `Input`                         |
| Email                | `Input`                         |
| Сообщение            | `Textarea`                      |
| Разделители          | `Separator`                     |
| Скролл внутри Drawer | `ScrollArea` — если потребуется |

Для меню:

```text
Menu
 ↓
Sheet
 ↓
navigation
```

Для контактов:

```text
Связаться
    │
    ├── desktop → Dialog
    │
    └── mobile  → Drawer
```

---

# 18. Breakpoint-логика именно для твоего сайта

Я бы зафиксировал такую систему:

```text
┌─────────────────────────────────────────────┐
│ MOBILE                                      │
│ 0–639                                       │
│                                             │
│ 1 column                                    │
│ Sheet navigation                            │
│ Drawer contact                              │
│ stacked sections                            │
│ typography ↓                                │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ TABLET                                      │
│ 640–1023                                    │
│                                             │
│ 1–2 columns                                 │
│ larger typography                           │
│ projects → 2 columns                        │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ DESKTOP                                     │
│ 1024+                                       │
│                                             │
│ original Figma composition                  │
│ desktop navigation                          │
│ 2/4 column grids                            │
│ Dialog contact                              │
└─────────────────────────────────────────────┘
```

В Tailwind:

```tsx
// Mobile
grid-cols-1

// Tablet
md:grid-cols-2

// Desktop
lg:grid-cols-2
lg:grid-cols-4
```

Это соответствует рекомендованному Tailwind mobile-first подходу. ([Tailwind CSS][1])

---

# 19. Самая важная рекомендация по реализации

**Не делай два отдельных сайта: desktop и mobile.**

Делай одну DOM-структуру и меняй layout:

```tsx
<div
  className="
    grid
    grid-cols-1
    gap-8
    md:grid-cols-2
    lg:grid-cols-4
  "
>
```

А там, где действительно меняется UX:

```text
Desktop                     Mobile
────────────────────────────────────────
Desktop nav                 Sheet
Dialog                      Drawer
2-column hero               1-column hero
2 project cards             1 project card
horizontal process          vertical process
4 service columns           1/2 columns
wide footer                 stacked footer
```

То есть **CSS отвечает за layout, а shadcn — за изменение interaction pattern**.

---

## Итоговая схема страницы на mobile

Я бы целился примерно в такую последовательность:

```text
┌─────────────────────────────┐
│ Ирина Коржель          ☰   │ ← Header / Sheet
├─────────────────────────────┤
│                             │
│          PHOTO              │
│                             │
│          UI/UX              │
│       ВЕБ-ДИЗАЙН            │
│                             │
│ Привет, я Ирина...          │ ← Hero
│                             │
├─────────────────────────────┤
│                             │
│       МОИ РАБОТЫ             │
│                             │
│ ┌─────────────────────────┐ │
│ │ Project 01              │ │
│ └─────────────────────────┘ │
│                             │
│ ┌─────────────────────────┐ │
│ │ Project 02              │ │
│ └─────────────────────────┘ │
│                             │
├─────────────────────────────┤
│                             │
│         ОБО МНЕ             │
│                             │
│          PHOTO              │
│                             │
│ Привет, я Ирина...          │
│ текст                       │
│ текст                       │
│                             │
├─────────────────────────────┤
│ МОИ НАВЫКИ                  │
│                             │
│ Коммуникабельность          │
│ Внимательность              │
│ Ответственность             │
│ Креативность                │
│                             │
│ МОИ ИНСТРУМЕНТЫ             │
│ Figma / AI / Ps             │
│                             │
├─────────────────────────────┤
│       ЭТАПЫ РАБОТЫ          │
│                             │
│ 01 Знакомство               │
│ 02 Брифование               │
│ 03 Прототип                 │
│ 04 Дизайн                   │
│ 05 Финальный этап           │
│                             │
├─────────────────────────────┤
│       ВИДЫ САЙТОВ           │
│                             │
│ 01 Landing Page             │
│ 02 Веб-сайты                │
│ 03 Интернет-магазин         │
│ 04 WB/Ozon                  │
│                             │
├─────────────────────────────┤
│          FOOTER             │
│                             │
│      Связаться со мной      │
│                             │
└─────────────────────────────┘
```

**Главный принцип:** на мобильном сохраняем твою визуальную систему — кремовый фон, serif-заголовки, тонкие borders, декоративные элементы и много воздуха — но переводим desktop-композицию из **ширины в вертикальный ритм**. Это даст гораздо более точное ощущение исходного Figma-макета, чем попытка уменьшить desktop pixel-for-pixel.

Если хочешь реализовать это непосредственно в текущем проекте, следующий логичный шаг — сделать **единый `responsive` план классов Tailwind для каждой существующей секции (`Header → Hero → Works → About → Skills → Process → WebsiteTypes → Footer`)**, чтобы его можно было практически сразу передать в Cursor/Replit/Lovable как техническое задание.

[1]: https://tailwindcss.com/docs/responsive-design?utm_source=chatgpt.com "Responsive design - Core concepts - Tailwind CSS"
[2]: https://ui.shadcn.com/docs/components/aria/sheet?utm_source=chatgpt.com "Sheet - shadcn/ui"
[3]: https://ui.shadcn.com/docs/components/base/drawer?utm_source=chatgpt.com "Drawer - shadcn/ui"
