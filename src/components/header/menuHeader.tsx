'use client';
import { useState, useEffect } from 'react';
import logo from '@/img/logo-azul-cortada.png';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import items from './itensHeader';
import LocaleSwitcher from '@/components/header/locale-switcher';
import LocaleResponsive from '@/components/header/locale-switcher-responsive';
import { usePathname } from 'next/navigation';
import ResponsiveItens from './responsiveItens';
import { IoMdMenu } from 'react-icons/io';

interface HeaderItem {
  title: string;
  children?: [{ title: string; link: string }];
  link: string;
  button?: string;
}
export default function MenuHeader() {
  const [isSticky, setIsSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [itens, setItens] = useState<HeaderItem[]>([]);
  const pathName = usePathname();

  const locale = pathName.split('/')[1] as 'en' | 'pt' | 'fr';
  const checkScroll = () => {
    const offset = window.scrollY;

    if (offset > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  useEffect(() => {
    items({ locale }).then(res => setItens(res as HeaderItem[]));
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [pathName]);

  return (
    <div className={`navbar-area ${isSticky ? 'sticky ' : ''}`}>
      <div className="main-nav responsive-menu">
        <div className="box-responsivo">
          <nav className="navbar navbar-expand-md navbar-light">
            <div className="top-responsive">
              <Link className="navbar-brand" href="/">
                <Image
                  src={logo}
                  style={{ width: 'auto', height: '100%' }}
                  alt="logo"
                />
              </Link>
              <LocaleResponsive />
            </div>
            <IoMdMenu size={30} onClick={() => setOpen(!open)} />
            {open && (
              <nav className="mean-nav menu-responsivo">
                <ul className="navbar-nav ms-auto">
                  {itens.map((item, index) => {
                    return <ResponsiveItens item={item} key={index} />;
                  })}
                </ul>
              </nav>
            )}
          </nav>
        </div>
      </div>
      <div className="main-nav normal-menu">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link className="navbar-brand" href="/">
              <Image
                src={logo}
                style={{ width: 'auto', height: '100%' }}
                alt="logo"
              />
            </Link>

            <div className="collapse navbar-collapse mean-menu justify-content-center">
              <ul className="navbar-nav">
                {itens.map((item, index) => {
                  return (
                    <li className="nav-item" key={index}>
                      {item.children ? (
                        <Link
                          href={item.link ?? '#'}
                          className="nav-link dropdown-toggle"
                        >
                          {item.title}
                          <IoIosArrowForward />
                        </Link>
                      ) : (
                        <a href={item.link} className="nav-link">
                          {item.title}
                        </a>
                      )}
                      {item.children && (
                        <ul className="dropdown-menu">
                          {item.children.map((child, index) => {
                            return (
                              <li className="nav-item" key={index}>
                                <Link
                                  href={child.link ?? '#'}
                                  className="nav-link"
                                >
                                  {child.title}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
                <LocaleSwitcher />
              </ul>

              <div className="navbar-button">
                <Link href="/">{itens[0]?.button ?? ''}</Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
