import TelegramBot from 'node-telegram-bot-api';
import { supabase } from './superbaseClient';
import dotenv from 'dotenv';

dotenv.config();

// Ensure the TELEGRAM_BOT_TOKEN is defined
if (!process.env.TELEGRAM_BOT_TOKEN) {
  throw new Error('TELEGRAM_BOT_TOKEN environment variable is not defined');
}


// Replace with your actual Telegram bot token
const token = process.env.TELEGRAM_BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, async (msg) => {
  console.log('msg', msg);
  const chatId = msg.chat.id;
  const userId = msg.from?.id;

  if (!userId) {
    bot.sendMessage(chatId, 'Error identifying user.');
    return;
  }

  // Check if user already exists in Supabase
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single();

  if (!data) {
    // Insert new user
    const { error: insertError } = await supabase
      .from('users')
      .insert({ id: userId, coins: 0 });

    if (insertError) {
      console.error('Error inserting user:', insertError);
      bot.sendMessage(chatId, 'Error creating new user.');
      return;
    }

    bot.sendMessage(chatId, 'Welcome! You have been registered. Click the link below to start playing:');
  } else {
    bot.sendMessage(chatId, 'Welcome back! Click the link below to start playing:');
  }

  // Send the web app URL with embedded user ID
  const webAppUrl = `https://tap-me-webapp-vikramkadus-projects.vercel.app/id=${userId}`;
  bot.sendMessage(chatId, webAppUrl, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Open Game',
            web_app: { url: webAppUrl },
          },
        ],
      ],
    },
  });
});

export default bot;
