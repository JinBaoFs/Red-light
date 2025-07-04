import { products } from '../lib/products';
import { ProductCard } from '../components/ProductCard';
import ScrollFadeUpSection from "../components/ScrollFadeUpSection"
import RedLightTherapyProducts from '@/components/RedLightTherapyProducts';
import Link from 'next/link';

import Image from 'next/image';

const timelineData = [
  {
    title: '1–2 Months',
    description:'Shedding may temporarily increase as feeble hairs begin to make room for the new and stronger hair to grow.',
  },
  {
    title: '3–4 Months',
    description: 'You may begin to see a decrease in shedding while new hairs start to grow. Do not stop here, keep going!',
  },
  {
    title: '5–6 Months',
    description:'Shedding should have slowed down, and you should begin to see minor visible results.',
  },
  {
    title: '6+ Months',
    description: 'At this point, shedding may have stopped, and now your hair follicles should be growing new hair.',
  },
];

export default function Home() {
  return (
    <div className="bg-[#f8f8f8]">
      {/* 广告图 */}
      <div className="relative w-full">
        <img src="/images/banner.webp" alt="amex" className="w-full h-auto object-cover" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold px-4">
          <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase leading-snug">
            Red light therapy makes
          </span>
          <span className="block text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl uppercase leading-snug">
            life better!
          </span>
        </div>
      </div>

      {/* 介绍 */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Youlumi's Solution for Hair Loss</h2>
          <p className="text-gray-600 mb-12 py-4">
            Youlumi's red light therapy cap offers a safe and effective solution to promote hair growth and combat thinning
            hair. The following is a general guideline of what to expect in your hair restoration journey.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {timelineData.map((item, index) => (
              <ScrollFadeUpSection delay={index*0.2} key={index}>
                <div className="flex flex-col items-center">
                  <Image src="/images/desc.webp" alt={item.title} width={80} height={80} className="mb-4" />
                  <h3 className="font-bold text-2xl mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                    {item.description}
                  </p>
                </div>
              </ScrollFadeUpSection>
            ))}
          </div>
        </div>
      </section>

      {/* 人物 */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* 左侧文本 */}
          <ScrollFadeUpSection>
            <div>
              <p className="uppercase tracking-wide text-sm font-semibold text-gray-600 mb-2">Your Family Hairdresser</p>
              <h2 className="text-3xl font-bold mb-4">Red Light Therapy Cap</h2>
              <p className="text-gray-700 mb-6">
                Red light therapy cap ideal for hair regrowth & headache pain relief and insomnia troubles with clinically proven.
              </p>
              <Link href="/product/red-light-cap">
                <button className="bg-[#f15b2a] cursor-pointer hover:bg-[#d94916] text-white font-bold py-3 px-6 rounded transition">SHOP NOW</button>
              </Link>
            </div>
          </ScrollFadeUpSection>

          {/* 右侧图片 */}
          <ScrollFadeUpSection>
            <div className="w-full h-auto">
              <Image
                src="/images/people_01.webp"
                alt="Red Light Therapy Cap"
                width={600}
                height={500}
                className="rounded-md object-cover w-full"
              />
            </div>
          </ScrollFadeUpSection>
        </div>
      </section>

      {/* 人物2 */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* 左侧图片 */}
          <ScrollFadeUpSection>
            <div className="w-full h-auto">
              <Image
                src="/images/people_02.webp"
                alt="Red Light Therapy Cap"
                width={600}
                height={500}
                className="rounded-md object-cover w-full"
              />
            </div>
          </ScrollFadeUpSection>

          {/* 右侧文本，右对齐 */}
          <ScrollFadeUpSection>
            <div className="text-right">
              <p className="uppercase tracking-wide text-sm font-semibold text-gray-600 mb-2">
                Take Control of the small cold sores!
              </p>
              <h2 className="text-3xl font-bold mb-4">Cold Sore Treatment Device</h2>
              <p className="text-gray-700 mb-6">
                With our innovative, handheld device that delivers concentrated, medically-grade wavelengths of light, get recovered from cold sores!
              </p>
              <Link href="/product/red-light-cap">
                <button className="bg-[#f15b2a] hover:bg-[#d94916] text-white font-bold py-3 px-6 rounded transition">
                  SHOP NOW
                </button>
              </Link>
            </div>
          </ScrollFadeUpSection>
        </div>
      </section>

      {/* 视频 */}
      <section className="py-10 px-4 max-w-7xl mx-auto">
        <video controls className="w-full h-full object-cover" autoPlay muted loop playsInline>
          <source src="https://www.youlumistore.com/cdn/shop/videos/c/vp/59a7b203b68e4b3e91084cf4df3be8fc/59a7b203b68e4b3e91084cf4df3be8fc.HD-1080p-7.2Mbps-27495730.mp4?v=0" type="video/mp4" />
        </video>
      </section>

      {/* 产品1 */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Red Light Therapy Belt</h2>
          <p className="text-center text-gray-600 mb-8">
            Youlumi offers a transformative line of red light therapy devices to elevate your well-being. Explore our collection
            of red light therapy panels, belts, core sore devices, and caps, designed to target pain relief, skin rejuvenation, and
            overall wellness.
          </p>
          <div className="w-full">
            <RedLightTherapyProducts></RedLightTherapyProducts>
          </div>
        </div>
      </section>

      {/* 产品2 */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Red Light Therapy Panel</h2>
          <p className="text-center text-gray-600 mb-8">
            Experience the transformative power of Youlumi's red light therapy panels. Our collection offers a range of sizes and wavelengths to address various wellness needs, from pain relief and skin rejuvenation to improved sleep and mood.
          </p>
          <div className="w-full">
            <RedLightTherapyProducts></RedLightTherapyProducts>
          </div>
        </div>
      </section>
    </div>
  );
}