'use server';

import { ContactFormData } from '@/lib/forms';

interface TelegramSendOptions {
  chatId?: string;
  channelId?: string;
}

interface TelegramResponse {
  ok: boolean;
  description?: string;
}

/**
 * Send contact form data to Telegram chat or channel
 * @param data - Contact form data (name, phone, email, message)
 * @param options - Optional chat or channel ID
 * @returns Success status and error description if failed
 */
export async function sendTelegramMessage(
  data: ContactFormData,
  options: TelegramSendOptions = {}
): Promise<{ success: boolean; error?: string }> {
  const {
    TELEGRAM_BOT_TOKEN,
    TELEGRAM_CHAT_ID,
    TELEGRAM_CHANNEL_ID,
  } = process.env;

  const chatId = options.chatId || TELEGRAM_CHAT_ID;
  const channelId = options.channelId || TELEGRAM_CHANNEL_ID;

  if (!TELEGRAM_BOT_TOKEN) {
    return {
      success: false,
      error: 'TELEGRAM_BOT_TOKEN is not configured',
    };
  }

  if (!chatId && !channelId) {
    return {
      success: false,
      error: 'No chat or channel ID provided',
    };
  }

  // Format message with contact data
  const message = `
📝 <b>Новая заявка с сайта</b>

👤 <b>Имя:</b> ${data.name}
📱 <b>Телефон:</b> ${data.phone}
📧 <b>Email:</b> ${data.email}

💬 <b>Сообщение:</b>
${data.message}
  `.trim();

  const targets = [chatId, channelId].filter(Boolean) as string[];
  const errors: string[] = [];

  // Send to all configured targets
  for (const target of targets) {
    try {
      const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: target,
          text: message,
          parse_mode: 'HTML',
        }),
      });

      const result: TelegramResponse = await response.json();

      if (!result.ok) {
        errors.push(`Failed to send to ${target}: ${result.description || 'Unknown error'}`);
      }
    } catch (error) {
      errors.push(`Failed to send to ${target}: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  if (errors.length > 0) {
    return {
      success: false,
      error: errors.join('; '),
    };
  }

  return {
    success: true,
  };
}
