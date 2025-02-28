import Header from '@/components/Header';
import Wrapper from '@/components/Wrapper';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen sm:h-auto w-full overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <Header />
      </div>
      <div className="pt-16 h-screen sm:h-auto  ">
        <Wrapper className="w-full h-screen sm:h-auto mx-auto pt-10 ">
          <div className="w-full sm:h-full lg:h-[800px] flex flex-col gap-20 sm:flex-row lg:gap-24 lg:justify-center justify-between items-center">
            <div className="max-w-[28.5625rem] ">
              <h1 className="font-semibold text-[2.784375rem] text-[#4d4d4d] leading-[3.30625rem] flex">
                Lessons and insignts
              </h1>
              <h1 className="font-semibold text-[2.784375rem] text-[#4caf4f] leading-[3.30625rem]">
                from 8 years
              </h1>
              <p className="text-xs leading-[1.04475rem] mt-3">
                Where to grow your business as photographer site or social
                media?
              </p>
              <button className="w-[5.596875rem] px-6 py-3 bg-[#4caf4f] font-medium text-xs text-[#ffffff] mt-6 rounded-sm">
                Register
              </button>
            </div>
            <img
              src="/Hero-img.jpg"
              alt=""
              className="object-cover  "
            />
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
