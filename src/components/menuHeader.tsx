'use client';
import { useState, useEffect } from 'react';
import logo from '@/img/logo-azul-cortada.png';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import items from './itensHeader';

import { usePathname } from 'next/navigation';
interface HeaderItem {
  title: string;
  children?: [{ title: string; link: string }];
  link: string;
  button?: string;
}
export default function MenuHeader() {
  const [isSticky, setIsSticky] = useState(false);
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
      <div className="mobile-nav">
        <Image src={logo} alt="logo" />
      </div>
      <div className="main-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <a className="navbar-brand" href="index.html">
              <Image
                src={logo}
                style={{ width: 'auto', height: '100%' }}
                alt="logo"
              />
            </a>
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
