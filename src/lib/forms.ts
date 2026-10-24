import { z } from 'zod';

import { BY_PHONE_REGEX } from '@/lib/phone';

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, 'Введите имя').max(100, 'Имя слишком длинное'),

  phone: z.string().trim().regex(BY_PHONE_REGEX, 'Введите номер в формате +375 (XX) XXX-XX-XX'),

  email: z.string().trim().email('Введите корректный e-mail').max(254, 'E-mail слишком длинный'),

  // Telegram messages are limited to 4096 characters, keep headroom for the other fields
  message: z.string().trim().max(2000, 'Сообщение слишком длинное'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
