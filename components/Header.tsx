'use client';

import { ArrowRight, MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const data = [
  { index: 0, label: 'Home', link: '/' },
  { index: 1, label: 'Features', link: '/features' },
  { index: 2, label: 'Community', link: '/community' },
  { index: 3, label: 'Blog', link: '/blog' },
  { index: 4, label: 'Pricing', link: '/pricing' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed h-16 w-full max-w-[1280px] min-w-[375px] border border-red-500 md:px-16 sm:px-12 px-5 lg:px-[6rem]">
      <div className="flex h-full justify-between items-center">
        <Link href="/">
          <Image
            className="object-cover"
            src="/Logo.svg"
            alt=""
            height={17}
            width={107}
            priority
          />
        </Link>
        <div className="lg:flex hidden">
          <ul className="flex gap-4">
            {data.map((data) => {
              return (
                <li
                  className="text-sm text-center w-20 flex items-center justify-center"
                  key={data.index}
                >
                  <Link href={data.link}>{data.label}</Link>
                </li>
              );
            })}
          </ul>
          <button className="w-[8.3125rem] h-9 bg-[#4caf4f] text-white text-sm text-center flex items-center justify-center gap-1 ml-5 rounded-sm">
            Register Now
            <ArrowRight size={12} />
          </button>
        </div>
        <button>
          <MenuIcon />
        </button>
      </div>
      {}
    </div>
  );
};

export default Header;
