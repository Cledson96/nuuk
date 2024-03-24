import { getDictionary } from '@/config/get-dictionary';
import hotelaria from '@/img/slider/hotelaria.jpg';
import clean1 from '@/img/slider/commercial.jpeg';
import clean2 from '@/img/slider/residence.jpg';
import adm from '@/img/slider/adm.jpg';
import industry from '@/img/slider/industry.jpg';
import build from '@/img/slider/build.jpg';
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
      title: dictionary.home.slider.cleaning_commercial.title,
      text: dictionary.home.slider.cleaning_commercial.description,
      image: clean1,
      button: dictionary.home.slider.cleaning_commercial.button,
    },
    {
      title: dictionary.home.slider.cleaning_residential.title,
      text: dictionary.home.slider.cleaning_residential.description,
      image: clean2,
      button: dictionary.home.slider.cleaning_residential.button,
    },
    {
      title: dictionary.home.slider.administration.title,
      text: dictionary.home.slider.administration.description,
      image: adm,
      button: dictionary.home.slider.administration.button,
    },
    {
      title: dictionary.home.slider.industry.title,
      text: dictionary.home.slider.industry.description,
      image: industry,
      button: dictionary.home.slider.industry.button,
    },
    {
      title: dictionary.home.slider.construction.title,
      text: dictionary.home.slider.construction.description,
      image: build,
      button: dictionary.home.slider.construction.button,
    },
  ];

  return itens;
}
