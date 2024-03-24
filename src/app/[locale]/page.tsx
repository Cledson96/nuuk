import { Carousel, Services } from '@/components';

import { Locale } from '@/config/i18n-config';

export default async function IndexPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  return (
    <>
      <Carousel locale={locale} />
      <Services locale={locale} />
    </>
  );
}
