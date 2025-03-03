'use client';
import React, { Children } from 'react';

interface props {
  children: React.ReactNode;
  className?: string;
}

const Wrapper = ({ children, className }: props) => {
  return (
    <div
      className={`w-full max-w-[1280px] mx-auto min-w-[320px] md:px-16 sm:px-12 px-5 lg:px-[6rem] ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
