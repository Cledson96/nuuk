import { BsGraphDownArrow } from 'react-icons/bs';
import { MdLoop } from 'react-icons/md';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { MdOutlineSwapHoriz } from 'react-icons/md';
import { GiDiamondHard } from 'react-icons/gi';
import { IoMdTime } from 'react-icons/io';
import { getDictionary } from '@/config/get-dictionary';
import { FaTools } from 'react-icons/fa';
import { MdAttachMoney } from 'react-icons/md';
import { SlBookOpen } from 'react-icons/sl';
import { MdSwapHoriz } from 'react-icons/md';
import { LiaBinocularsSolid } from 'react-icons/lia';
import { PiTreeThin } from 'react-icons/pi';

export default async function About({
  locale,
}: {
  locale: 'en' | 'pt' | 'fr';
}) {
  const dictionary = await getDictionary(locale);

  const about = {
    about: dictionary.about.about.about,
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

  const aboutInit = {
    title: dictionary.about.about.title,
    description: dictionary.about.about.description,
    benefits: dictionary.about.about.benefits.benefits,
  };
  const benefits = [
    {
      title: dictionary.about.about.benefits.equipament,
      icon: <FaTools size={30} className="mb-3 " />,
    },

    {
      title: dictionary.about.about.benefits.reduction,
      icon: <MdAttachMoney size={30} className="mb-3" />,
    },
    {
      title: dictionary.about.about.benefits.responsability,
      icon: <PiTreeThin size={30} className="mb-3" />,
    },
    {
      title: dictionary.about.about.benefits.substitution,
      icon: <MdSwapHoriz size={30} className="mb-3" />,
    },
    {
      title: dictionary.about.about.benefits.supervision,
      icon: <LiaBinocularsSolid size={30} className="mb-3" />,
    },
    {
      title: dictionary.about.about.benefits.treinament,
      icon: <SlBookOpen size={30} className="mb-3" />,
    },
  ];
  return { itemsServices, title, about, aboutInit, benefits };
}
