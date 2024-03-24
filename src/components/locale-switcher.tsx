"use client";

import { usePathname } from "next/navigation";

import { i18n } from "@/config/i18n-config";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LocaleSwitcher() {
  const [menu, setMenu] = useState(false);

  const router = useRouter();
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) {
      return "/";
    }
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const changeLanguage = (locale: string) => {
    router.push(redirectedPathName(locale));
    setMenu(false);
  };

  return (
    <div onClick={() => setMenu(!menu)} className="menu-language">
      {pathName.split("/")[1]}
      {menu && (
        <ul>
          {i18n.locales.map((locale) => (
            <li
              onClick={() => changeLanguage(locale)}
              key={locale}
              value={locale}
            >
              {locale}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
