import { getDictionary } from '@/config/get-dictionary';

interface Dictionary {
  services: {
    title: string;
    service: {
      [key: string]: {
        title: string;
        link: string;
        title_text: string;
        img: string;
        text1: string;
        text2: string;
        ul: string[];
      };
    };
  };
  header: {
    home: {
      title: string;
    };
  };
}
type ServiceKeys = keyof Dictionary['services']['service'];
export default async function TextServices({
  locale,
  service,
}: {
  locale: 'en' | 'pt' | 'fr';
  service: ServiceKeys;
}) {
  const dictionary = (await getDictionary(locale)) as Dictionary;
  const services = Object.values(dictionary.services.service).map(service => {
    return {
      title: service.title,
      link: service.link,
    };
  });

  const textServices = {
    service: dictionary.services.title,
    home: dictionary.header.home.title,
    title: dictionary.services.service[service].title,
    title_text: dictionary.services.service[service].title_text,
    text1: dictionary.services.service[service].text1,
    text2: dictionary.services.service[service].text2,
    ul: dictionary.services.service[service].ul,
    img: dictionary.services.service[service].img,
    services: services,
  };

  return textServices;
}
