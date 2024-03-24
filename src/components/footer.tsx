'use client';

import { useState, useEffect } from 'react';
import Contact from './contactFooter';
import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import logo from '@/img/logo.png';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FooterlItens } from './itensFooter';
import { IoIosArrowForward } from 'react-icons/io';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

interface ServicesItem {
  title: string;
  principal?: string;
  about?: string;
  find?: string;
}

const socialItens = [
  {
    title: 'Facebook',
    icon: <FaFacebookF />,
    link: 'https://www.facebook.com/',
  },

  {
    title: 'Linkedin',
    icon: <FaLinkedinIn />,
    link: 'https://www.facebook.com/',
  },
  {
    title: 'Instagram',
    icon: <FaInstagram />,
    link: 'https://www.facebook.com/',
  },
];
export default function Footer() {
  const [services, setServices] = useState<ServicesItem[]>([]);
  const pathName = usePathname();

  const locale = pathName.split('/')[1] as 'en' | 'pt' | 'fr';
  useEffect(() => {
    FooterlItens({ locale }).then(res => setServices(res as ServicesItem[]));
  }, [pathName]);

  return (
    <>
      <Contact locale={locale} />
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="footer-widget">
                <div className="logo">
                  <Image
                    src={logo}
                    alt="logo"
                    style={{ width: 'auto', height: '100%' }}
                  />
                </div>
                <p>{services[0]?.about ?? ''}</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="footer-widget pl-40">
                <h3>{services[0]?.principal ?? ''}</h3>
                <ul>
                  {services.map((item, index) => {
                    return (
                      <li key={index}>
                        <IoIosArrowForward color="white" className="me-1" />
                        <Link href="/">{item.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="footer-widget">
                <h3>{services[0]?.find ?? ''}</h3>

                <ul className="find-us">
                  <li>
                    <FaLocationDot className="me-1" />
                    28/A Street, New York City
                  </li>
                  <li>
                    <FaPhoneAlt className="me-1" />
                    <a href="tel:+880123456789"> +88 0123 456 789 </a>
                  </li>
                  <li>
                    <IoMail className="me-1" />
                    <a href="mailto:info@viscous.com"> info@viscous.com </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="footer-social">
                  <ul className="menu-header">
                    {socialItens.map((itemSocial, index) => {
                      return (
                        <li key={index}>
                          <Link href={itemSocial.link}>{itemSocial.icon}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="copyright-text text-end">
                  <p>
                    &copy;2024 Nuuk -
                    <Link
                      href="https://www.cwbpartners.net.br"
                      target="_blank"
                      className="ms-1"
                    >
                      Developed by CWB Partners
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
