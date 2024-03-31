'use client';

import { AboutPage, ContactFooter } from '@/components';
import { Locale } from '@/config/i18n-config';
import { useState, useEffect } from 'react';
import text from './itemsContact';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';
import { FaEnvelope } from 'react-icons/fa6';

interface Texts {
  contact: string;
  home: string;
  localization: string;
  number: string;
  email: string;
}
export default function Page({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const [texts, setTexts] = useState<Texts>({
    contact: '',
    home: '',
    localization: '',
    number: '',
    email: '',
  });
  useEffect(() => {
    text({ locale }).then(res => setTexts(res));
  }, [locale]);

  return (
    <>
      <AboutPage
        image="contact/contact.jpg"
        title={texts.contact}
        home={texts.home}
      />
      <div className="mb-5">
        <ContactFooter locale={locale} />
      </div>

      <div className="contact-info">
        <div className="container">
          <div className="row contact-card-area">
            <div className="col-md-4 col-sm-6">
              <div className="contact-card">
                <i>
                  <FaLocationDot />
                </i>
                <h3>{texts.localization}</h3>
                <p>14 C Rua Castilho, 5th Floor, Lisbon </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="contact-card">
                <i>
                  <FaPhone />
                </i>
                <h3>{texts.number}</h3>
                <p>+88 0123 456 789</p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="contact-card">
                <i>
                  <FaEnvelope />
                </i>
                <h3>{texts.email}</h3>
                <p>hello@viscous.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="map" style={{ marginBottom: '-250px' }}>
        <div className="container-fluid p-0">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.888031521295!2d-9.153762223348783!3d38.72037959473798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd193379a7f584ab%3A0x1f2cdf439f339bf0!2sR.%20Castilho%2014C%2C%201250-165%20Lisboa%2C%20Portugal!5e0!3m2!1spt-BR!2sbr!4v1711872451286!5m2!1spt-BR!2sbr"></iframe>
        </div>
      </div>
    </>
  );
}
