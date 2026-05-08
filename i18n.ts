import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

const locales = ['en', 'hi'];

export default getRequestConfig(async ({locale}) => {
  const baseLocale = locales.includes(locale as any) ? locale : 'en';

  let messages;
  try {
    messages = (await import(`./messages/${baseLocale}.json`)).default;
  } catch (error) {
    console.error(`Failed to load messages for locale ${baseLocale}`, error);
    messages = (await import(`./messages/en.json`)).default;
  }

  return {
    locale: baseLocale as string,
    messages
  };
});
