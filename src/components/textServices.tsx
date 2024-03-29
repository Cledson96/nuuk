import { getDictionary } from '@/config/get-dictionary';

export default async function TextServices({
  locale,
  service,
}: {
  locale: 'en' | 'pt' | 'fr';
  service:
    | 'administration'
    | 'cleaning_commercial'
    | 'construction'
    | 'hospitality'
    | 'industry'
    | 'cleaning_residential';
}) {
  const dictionary = await getDictionary(locale);

  const textServices = {
    service: dictionary.services.title,
    home: dictionary.header.home.title,
    title: dictionary.services.service[service].title,
    title_text: dictionary.services.service[service].title_text,
    text1: dictionary.services.service[service].text1,
    text2: dictionary.services.service[service].text2,
    ul: dictionary.services.service[service].ul,
  };

  return textServices;
}
