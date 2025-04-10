import Community from '@/components/Community';
import Header from '@/components/Header';
import Wrapper from '@/components/Wrapper';

const image = [
  { index: 0, imgUrl: '/companyLogo_7.svg' },
  { index: 1, imgUrl: '/companyLogo_6.svg' },
  { index: 2, imgUrl: '/companyLogo_1.svg' },
  { index: 3, imgUrl: '/companyLogo_4.svg' },
  { index: 4, imgUrl: '/companyLogo_2.svg' },
];

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto">
        <Header />
      </div>
      <div className="sm:pt-16 h-s sm:h-auto  ">
        <Wrapper className="w-full h-screen sm:h-auto mx-auto ">
          <div className="w-full pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48 flex flex-col sm:gap-20 gap-10 sm:flex-row lg:gap-24 lg:justify-between justify-center items-center">
            <div className="max-w-[28.5625rem] min-w-[280px] xl:max-w-[600px] w-full flex flex-col text-[2.4rem] sm:text-[2.784375rem] xl:text-6xl justify-start">
              <h1 className="flex-col xl:gap-2 font-semibold text-[#4d4d4d]  flex">
                Lessons and insignts
                <span className="font-semibold text-[#4caf4f]">
                  from 8 years
                </span>
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
              className="object-cover xl:w-[380px] "
            />
          </div>
          <div className="w-full">
            <div className="w-full text-center space-y-1">
              <h1 className="text-[#4d4d4d] font-semibold text-2xl">
                Our Clients
              </h1>
              <p className="text-xs text-[#717171]">
                We have been working with some Fortune 500+ clients
              </p>
            </div>
            <div className="py-4 flex justify-between max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4  gap-24">
              {image.map((data) => {
                return (
                  <img
                    className="h-9 mx-auto sm:mx-0 sm:h-8 lg:h-12"
                    key={data.index}
                    src={data.imgUrl}
                    alt="company logo"
                  />
                );
              })}
            </div>
          </div>
          <div>
            <Community />
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
