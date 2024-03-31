'use client';

import { usePathname } from 'next/navigation';
import { IoIosArrowForward } from 'react-icons/io';
import { i18n } from '@/config/i18n-config';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LocaleSwitcher() {
  const [menu, setMenu] = useState(false);

  const router = useRouter();
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) {
      return '/';
    }
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const changeLanguage = (locale: string) => {
    router.push(redirectedPathName(locale));
    setMenu(false);
  };

  return (
    <li className="nav-item">
      <Link href="" className="nav-link dropdown-toggle">
        {pathName.split('/')[1]}
        <IoIosArrowForward />
      </Link>

      <ul className="dropdown-menu lang">
        {i18n.locales.map(locale => (
          <li className="nav-item" key={locale}>
            <a onClick={() => changeLanguage(locale)} className="nav-link">
              {locale}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}
