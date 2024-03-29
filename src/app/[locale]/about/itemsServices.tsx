import { BsGraphDownArrow } from 'react-icons/bs';
import { MdLoop } from 'react-icons/md';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { MdOutlineSwapHoriz } from 'react-icons/md';
import { GiDiamondHard } from 'react-icons/gi';
import { IoMdTime } from 'react-icons/io';
import { getDictionary } from '@/config/get-dictionary';

export default async function About({
  locale,
}: {
  locale: 'en' | 'pt' | 'fr';
}) {
  const dictionary = await getDictionary(locale);

  const about = {
    about: dictionary.about.about,
    home: dictionary.header.home.title,
  };

  const title = {
    title: dictionary.about.title.title,
    subtitle: dictionary.about.title.subTitle,
  };

  const itemsServices = [
    {
      title: dictionary.about.items.cost,
      icon: <BsGraphDownArrow className="me-2" />,
    },
    {
      title: dictionary.about.items.flexibility,
      icon: <MdOutlineSwapHoriz className="me-2" />,
    },
    {
      title: dictionary.about.items.quality,
      icon: <GiDiamondHard className="me-2" />,
    },
    {
      title: dictionary.about.items.supervision,
      icon: <HiMagnifyingGlass className="me-2" />,
    },

    {
      title: dictionary.about.items.suport,
      icon: <IoMdTime className="me-2" />,
    },
    {
      title: dictionary.about.items.Development,
      icon: <MdLoop className="me-2" />,
    },
  ];

  return { itemsServices, title, about };
}
