'use client';

import { FaAngleDoubleRight } from 'react-icons/fa';
import Link from 'next/link';
import img from '@/img/about/about2.jpg';
import Image from 'next/image';
import { Locale } from '@/config/i18n-config';
import { useState, useEffect } from 'react';
import text from './itemsServices';

interface Items {
  title: string;
  icon: JSX.Element;
}

interface Texts {
  aboutInit: {
    title: string;
    description: string;
    benefits: string;
  };
  benefits: { title: string; icon: JSX.Element }[];
  about: {
    about: string;
    home: string;
  };
  itemsServices: Items[];
  title: {
    title: string;
    subtitle: string;
  };
}
export default function Page({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const [texts, setTexts] = useState<Texts>({
    aboutInit: {
      title: '',
      description: '',
      benefits: '',
    },
    benefits: [],
    about: {
      about: '',
      home: '',
    },
    itemsServices: [],
    title: {
      title: '',
      subtitle: '',
    },
  });
  useEffect(() => {
    text({ locale }).then(res => setTexts(res));
  }, [locale]);

  return (
    <>
      <div className="about-title about-title-bg about-image paralax">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="about-title-text">
                <h2>{texts.about.about}</h2>
                <ul>
                  <li>
                    <Link href="/">{texts.about.home}</Link>
                  </li>
                  <li>
                    <FaAngleDoubleRight color="blue" className="mx-2" />
                    {texts.about.about}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="service-section pt-100 " id="services">
        <div className="container">
          <div className="section-head text-center">
            <h2>
              <span>{texts.aboutInit.title}</span>{' '}
            </h2>
            {<p>{texts.aboutInit.description}</p>}
          </div>

          <div className="row mt-4">
            <div className=" text-center mb-4">
              <h2 className="fs-1 color-default-title">
                {texts.aboutInit.benefits}
              </h2>
            </div>

            {texts.benefits.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                <div className="service-card">
                  {service.icon}
                  <h3 className="fs-6">{service.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="about-style-two about-style-three pt-100 pb-70 mx-4">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-5 p-0">
              <div className="about-img">
                <Image src={img} alt="about image" className="height-auto" />
              </div>
            </div>

            <div className="col-lg-7">
              <div className="about-text">
                <div className="section-head">
                  <h2>{texts.title.title}</h2>
                  <p>{texts.title.subtitle}</p>
                </div>

                <ul className="about-ul">
                  {texts.itemsServices.map((item, index) => (
                    <li key={index}>
                      {item.icon}
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
