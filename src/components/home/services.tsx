import { getDictionary } from '@/config/get-dictionary';
import img1 from '@/img/shapes/1.png';
import img2 from '@/img/shapes/2.png';
import img3 from '@/img/shapes/3.png';
import img4 from '@/img/shapes/4.png';
import img5 from '@/img/shapes/5.png';
import img6 from '@/img/shapes/6.png';
import img7 from '@/img/shapes/7.png';
import img8 from '@/img/shapes/8.png';
import img9 from '@/img/shapes/9.png';
import img10 from '@/img/shapes/10.png';
import Image from 'next/image';
import Link from 'next/link';
import { PiBroomThin } from 'react-icons/pi';
import { BsSuitcaseLg } from 'react-icons/bs';
import { FaRegBuilding } from 'react-icons/fa';
import { LuHotel } from 'react-icons/lu';
import { LiaIndustrySolid } from 'react-icons/lia';

export default async function Services({
  locale,
}: {
  locale: 'en' | 'pt' | 'fr';
}) {
  const dictionary = await getDictionary(locale);

  const services = [
    {
      title: dictionary.home.services.service.administration.title,
      description: dictionary.home.services.service.administration.description,
      icon: <BsSuitcaseLg size={50} color="#6096fd" />,
    },
    {
      title: dictionary.home.services.service.cleaning_commercial.title,
      description:
        dictionary.home.services.service.cleaning_commercial.description,
      icon: <PiBroomThin size={50} color="#6096fd" />,
    },
    {
      title: dictionary.home.services.service.cleaning_residential.title,
      description:
        dictionary.home.services.service.cleaning_residential.description,
      icon: <PiBroomThin size={50} color="#6096fd" />,
    },
    {
      title: dictionary.home.services.service.construction.title,
      description: dictionary.home.services.service.construction.description,
      icon: <FaRegBuilding size={50} color="#6096fd" />,
    },
    {
      title: dictionary.home.services.service.hospitality.title,
      description: dictionary.home.services.service.hospitality.description,
      icon: <LuHotel size={50} color="#6096fd" />,
    },
    {
      title: dictionary.home.services.service.industry.title,
      description: dictionary.home.services.service.industry.description,
      icon: <LiaIndustrySolid size={50} color="#6096fd" />,
    },
  ];
  return (
    <section className="service-section pt-100 pb-70" id="services">
      <div className="container">
        <div className="section-head text-center">
          <h2>
            <span>{dictionary.home.services.title}</span>
          </h2>
          <p>{dictionary.home.services.description}</p>
        </div>

        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-card">
                {service.icon}

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <div className="theme-button">
                  <Link href="/" className="default-btn">
                    {dictionary.home.services.button}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="service-shapes">
          <Image src={img1} alt="shape" />
          <Image src={img2} alt="shape" />
          <Image src={img3} alt="shape" />
          <Image src={img4} alt="shape" />
          <Image src={img5} alt="shape" />
          <Image src={img6} alt="shape" />
          <Image src={img7} alt="shape" />
          <Image src={img8} alt="shape" />
          <Image src={img9} alt="shape" />
          <Image src={img10} alt="shape" />
        </div>
      </div>
    </section>
  );
}
