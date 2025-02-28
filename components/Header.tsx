'use client';

import { ArrowRight, MenuIcon, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const data = [
  { index: 0, label: 'Home', link: '/' },
  { index: 1, label: 'Features', link: '/features' },
  { index: 2, label: 'Community', link: '/community' },
  { index: 3, label: 'Blog', link: '/blog' },
  { index: 4, label: 'Pricing', link: '/pricing' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('White');

  const HandleMenuButton = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#F5F7FA');
        setTextColor('#000000');
      } else {
        setColor('#000000');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  });

  return (
    <div
      className={`fixed h-16 w-full lg:max-w-[1280px] b min-w-[375px] bg-[${color}] text-[${textColor}]`}
    >
      <div className="flex h-full justify-between items-center md:px-16 sm:px-12 px-5 lg:px-[6rem]">
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
        <button
          onClick={HandleMenuButton}
          className="lg:hidden block"
        >
          {isOpen ? <X /> : <MenuIcon />}
        </button>
      </div>
      {isOpen && (
        <div className="h-screen lg:hidden duration-150 flex bg-[#F5F7FA]">
          <ul className="flex flex-col w-full pt-10 md:px-16 sm:px-12 px-5 lg:px-[6rem]">
            {data.map((data) => {
              return (
                <li
                  className="text-2xl border-b-2 border-black/25 w-full py-5 font-bold"
                  key={data.index}
                >
                  <Link href={data.link}>{data.label}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
