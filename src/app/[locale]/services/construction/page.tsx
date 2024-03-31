'use client';
import { AboutPage, ContactFooter } from '@/components';
import { Locale } from '@/config/i18n-config';
import { useState, useEffect } from 'react';
import { TextServices } from '@/components';
import { FaRegCheckCircle } from 'react-icons/fa';
import Link from 'next/link';
interface Text {
  service: string;
  home: string;
  title: string;
  title_text: string;
  text1: string;
  text2: string;
  ul: string[];
  services: { title: string; link: string }[];
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
    services: [],
  });
  useEffect(() => {
    TextServices({ locale, service: 'construction' }).then(res =>
      setTexts(res),
    );
  }, [locale]);

  return (
    <>
      <AboutPage
        image="services/cons.jpeg"
        title={texts.title}
        home={texts.home}
      />
      <div className="service-details-area main-service-area pt-20 services-details-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
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
            <div className="col-lg-4 main-service-area blog-side-bar">
              <div className="service-sidebar">
                <div className="service-list">
                  <p>{texts.service}</p>
                  <ul>
                    {texts.services.map((item, index) => (
                      <li key={index}>
                        <Link href={item.link}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="discount-text">
                  <h1>
                    Get <span>15% Discount</span> on your first Service
                  </h1>

                  <div className="theme-button">
                    <a href="#" className="default-btn">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactFooter locale={locale} footer />
    </>
  );
}
