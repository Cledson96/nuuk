import { getDictionary } from '@/config/get-dictionary';
import hotelaria from '@/img/slider/hotelaria.jpg';

export default async function CarrouselItens({
  locale,
}: {
  locale: 'en' | 'pt' | 'fr';
}) {
  const dictionary = await getDictionary(locale);

  const itens = [
    {
      title: dictionary.home.slider.hospitality.title,
      text: dictionary.home.slider.hospitality.description,
      image: hotelaria,
      button: dictionary.home.slider.hospitality.button,
    },
    {
      title: dictionary.home.slider.hospitality.title,
      text: dictionary.home.slider.hospitality.description,
      image: hotelaria,
      button: dictionary.home.slider.hospitality.button,
    },
    {
      title: dictionary.home.slider.hospitality.title,
      text: dictionary.home.slider.hospitality.description,
      image: hotelaria,
      button: dictionary.home.slider.hospitality.button,
    },
  ];

  return itens;
}
