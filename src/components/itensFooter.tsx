import { getDictionary } from '@/config/get-dictionary';

async function FooterlItens({ locale }: { locale: 'en' | 'pt' | 'fr' }) {
  const dictionary = await getDictionary(locale);

  const services = [
    {
      title: dictionary.header.services.children.administration.title,
      principal: dictionary.header.services.title,
      about: dictionary.about.footer,
      find: dictionary.about.find,
    },
    {
      title: dictionary.header.services.children.cleaning_commercial.title,
    },
    {
      title: dictionary.header.services.children.cleaning_residential.title,
    },
    {
      title: dictionary.header.services.children.construction.title,
    },
    {
      title: dictionary.header.services.children.hospitality.title,
    },
    {
      title: dictionary.header.services.children.industry.title,
    },
  ];

  return services;
}

export { FooterlItens };
