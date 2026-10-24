'use server';

import { contactFormSchema, type ContactFormData } from '@/lib/forms';

interface TelegramSendOptions {
  chatId?: string;
}

interface TelegramResponse {
  ok: boolean;
  description?: string;
}

function escapeHtml(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/**
 * Send contact form data to a Telegram chat or channel
 * @param data - Contact form data (name, phone, email, message)
 * @param options - Optional chat ID override
 * @returns Success status and error description if failed
 */
export async function sendTelegramMessage(
  data: ContactFormData,
  options: TelegramSendOptions = {},
): Promise<{ success: boolean; error?: string }> {
  // Server actions can be invoked directly, so validate again on the server
  const parsed = contactFormSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.issues[0]?.message ?? 'Invalid form data',
    };
  }

  const {
    TELEGRAM_BOT_TOKEN,
    NEXT_PUBLIC_TELEGRAM_GROUP_CHAT_ID: TELEGRAM_GROUP_CHAT_ID,
    NEXT_PUBLIC_TELEGRAM_THREAD_ID: TELEGRAM_THREAD_ID,
  } = process.env;

  const chatId = options.chatId || TELEGRAM_GROUP_CHAT_ID;

  if (!TELEGRAM_BOT_TOKEN) {
    return {
      success: false,
      error: 'TELEGRAM_BOT_TOKEN is not configured',
    };
  }

  if (!chatId) {
    return {
      success: false,
      error: 'No chat or channel ID provided',
    };
  }

  const { name, phone, email, message } = parsed.data;

  const text = `
📝 <b>Новая заявка с сайта</b>

👤 <b>Имя:</b> ${escapeHtml(name)}
📱 <b>Телефон:</b> ${escapeHtml(phone)}
📧 <b>Email:</b> ${escapeHtml(email)}

💬 <b>Сообщение:</b>
${escapeHtml(message)}
  `.trim();

  try {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'HTML',
        ...(TELEGRAM_THREAD_ID ? { message_thread_id: Number(TELEGRAM_THREAD_ID) } : {}),
      }),
    });

    const result: TelegramResponse = await response.json();

    if (!result.ok) {
      return {
        success: false,
        error: `Failed to send: ${result.description || 'Unknown error'}`,
      };
    }
  } catch (error) {
    return {
      success: false,
      error: `Failed to send: ${error instanceof Error ? error.message : 'Unknown error'}`,
    };
  }

  return { success: true };
}
