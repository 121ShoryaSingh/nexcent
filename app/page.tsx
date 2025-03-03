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
        <Wrapper className="w-full h-screen sm:h-auto mx-auto ">
          <div className="w-full sm:h-full lg:h-[600px] flex flex-col sm:gap-20 gap-5 sm:flex-row lg:gap-24 lg:justify-between justify-between items-center">
            <div className="max-w-[28.5625rem] xl:max-w-[600px] w-full flex flex-col text-[2.784375rem] xl:text-6xl justify-start">
              <h1 className="font-semibold text-[#4d4d4d] leading-[3.30625rem] flex">
                Lessons and insignts
              </h1>
              <h1 className="font-semibold text-[#4caf4f] leading-[3.30625rem]">
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
              className="object-cover xl:w-[380px] w-full "
            />
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
