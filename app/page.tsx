import Header from '@/components/Header';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen w-full">
      <div>
        <Header />
      </div>
      <div>Body</div>
    </div>
  );
}
