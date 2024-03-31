import { getDictionary } from '@/config/get-dictionary';

export default async function HeaderlItens({
  locale,
}: {
  locale: 'en' | 'pt' | 'fr';
}) {
  const dictionary = await getDictionary(locale);

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
      children: [
        {
          title: dictionary.header.services.children.administration.title,
          link: '/services/administrative',
        },
        {
          title: dictionary.header.services.children.cleaning_commercial.title,
          link: '/services/commercial-cleaning',
        },
        {
          title: dictionary.header.services.children.cleaning_residential.title,
          link: '/services/residential-cleaning',
        },
        {
          title: dictionary.header.services.children.construction.title,
          link: '/services/construction',
        },
        {
          title: dictionary.header.services.children.hospitality.title,
          link: '/services/hospitality',
        },
        {
          title: dictionary.header.services.children.industry.title,
          link: '/services/industry',
        },
      ],
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
