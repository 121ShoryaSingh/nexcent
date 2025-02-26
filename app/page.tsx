import Header from '@/components/Header';
import Wrapper from '@/components/Wrapper';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen w-full">
      <div className="max-w-screen-xl mx-auto">
        <Header />
      </div>
      <div className="pt-16 h-screen bg-[#F5F7FA]">
        <Wrapper className="">Body</Wrapper>
      </div>
    </div>
  );
}
