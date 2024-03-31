'use client';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import { useState } from 'react';
interface HeaderItem {
  title: string;
  children?: [{ title: string; link: string }];
  link: string;
  button?: string;
}
export default function ResponsiveItens({ item }: { item: HeaderItem }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <li className="nav-item-responsive">
        {item.children ? (
          <>
            <div className="ajust">
              <Link
                href={item.link ?? '#'}
                className="nav-link responsive-title"
              >
                {item.title}
              </Link>
              {open ? (
                <IoIosArrowDown onClick={() => setOpen(false)} size={20} />
              ) : (
                <IoIosArrowForward onClick={() => setOpen(true)} size={20} />
              )}
            </div>
          </>
        ) : (
          <Link href={item.link} className="nav-link responsive-title">
            {item.title}
          </Link>
        )}
        {item.children && open && (
          <ul className="submenu-responsive">
            {item.children.map((child, index) => {
              return (
                <li className="nav-item" key={index}>
                  <Link href={child.link ?? '#'} className="nav-link">
                    {child.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </li>
    </>
  );
}
