import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  const store = await cookies();

  const cookie = store.get('locale');
  const locale: string = cookie?.value || 'en';

  return {
    locale,
    messages: (await import(`./lang/${locale}.json`)).default
  };
});
