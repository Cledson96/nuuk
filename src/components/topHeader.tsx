import { FiClock } from 'react-icons/fi';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import LocaleSwitcher from '@/components/locale-switcher';
import Link from 'next/link';
const itens = [
  {
    title: 'Sun - Thu : 10:00AM - 06:00PM',
    icon: <FiClock className="me-1" />,
  },
  {
    title: '28/A Street, New York City',
    icon: <FaLocationDot className="me-1" />,
  },
  {
    title: '+88 0123 456 789',
    icon: <FaPhoneAlt className="me-1" />,
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
