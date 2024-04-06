import { getDictionary } from '@/config/get-dictionary';

export default async function HeaderlItens({
  locale,
}: {
  locale: 'en' | 'pt' | 'fr';
}) {
  const dictionary = await getDictionary(locale);

  const services = Object.values(dictionary.services.service).map(service => {
    return {
      title: service.title,
      link: service.link,
    };
  });
  const itens = [
    {
      title: dictionary.header.home.title,
      button: dictionary.header.home.button,
      children: [
        {
          title: dictionary.header.home.children.service,
          link: '/#services',
        },
      ],
      link: '/',
    },

    {
      title: dictionary.header.services.title,
      children: services,
      link: '#',
    },
    {
      title: dictionary.header.about,
      link: '/about',
    },
    {
      title: dictionary.header.contact,
      link: '/contact',
    },
  ];

  return itens;
}
