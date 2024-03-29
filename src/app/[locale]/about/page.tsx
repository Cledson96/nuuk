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
