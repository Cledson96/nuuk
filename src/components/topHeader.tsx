import { FaLocationDot } from 'react-icons/fa6';

import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import LocaleSwitcher from '@/components/locale-switcher';
import Link from 'next/link';
const itens = [
  {
    title: '14 C Rua Castilho, 5th Floor, Lisbon 1250-069',
    icon: <FaLocationDot className="me-1" />,
  },
];

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
export default function TopHeader() {
  return (
    <div className="header-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-12">
            <div className="header-widget">
              <ul>
                {itens.map((item, index) => {
                  return (
                    <li key={index}>
                      {item.icon}
                      {item.title}
                    </li>
                  );
                })}
                <li>
                  <LocaleSwitcher />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="header-social text-end">
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
        </div>
      </div>
    </div>
  );
}
