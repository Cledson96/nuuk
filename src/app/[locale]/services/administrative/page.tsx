'use client';
import { AboutPage } from '@/components';
import { Locale } from '@/config/i18n-config';
import { useState, useEffect } from 'react';
import { TextServices } from '@/components';
import { FaRegCheckCircle } from 'react-icons/fa';
import Image from 'next/image';
import img from '@/img/services/adm.jpg';
interface Text {
  service: string;
  home: string;
  title: string;
  title_text: string;
  text1: string;
  text2: string;
  ul: string[];
}

export default function Service({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const [texts, setTexts] = useState<Text>({
    service: '',
    home: '',
    title: '',
    title_text: '',
    text1: '',
    text2: '',
    ul: [],
  });
  useEffect(() => {
    TextServices({ locale, service: 'administration' }).then(res =>
      setTexts(res),
    );
  }, [locale]);

  return (
    <>
      <AboutPage
        image="services/adm.jpg"
        title={texts.title}
        home={texts.home}
      />
      <div className="service-details-area main-service-area pt-20 services-details-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Image src={img} alt="service" />
              <div className="service-details-post">
                <h3 className="color-default-title">{texts.title_text}</h3>

                <p>{texts.text1}</p>

                <ul>
                  {texts.ul.map((item, index) => (
                    <li key={index} className="color-blue">
                      <FaRegCheckCircle className="me-1" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p>{texts.text2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
