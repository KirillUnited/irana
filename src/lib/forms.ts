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
