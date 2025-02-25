'use client';
import React, { Children } from 'react';

interface props {
  children: React.ReactNode;
}

const Wrapper = ({ children }: props) => {
  return (
    <div className="w-full max-w-[1280px] min-w-[375px] md:px-16 sm:px-12 px-5 lg:px-[6rem]">
      {children}
    </div>
  );
};

export default Wrapper;
