// ✅ Next.js App Router + Tailwind CSS 自定义底部布局（根据你提供的设计）
// 文件路径：components/Footer.jsx

'use client';
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa6';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1d1d1d] text-white py-10 px-3 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* 左侧简介 */}
        <div>
          <h3 className="font-bold mb-4">YOULUMI RED LIGHT STORE</h3>
          <p className="text-gray-400">
            Youlumi website provides educational content only. It is not medical advice. Please consult a healthcare
            professional before using our products.
          </p>
          <p className="text-gray-500 mt-4">youlumistore</p>
        </div>

        {/* 产品列表 */}
        <div>
          <h3 className="font-bold mb-4 uppercase">Products</h3>
          <ul className="space-y-2 text-gray-300">
            <li>All Products</li>
            <li>Red Light Therapy Cap</li>
            <li>Red Light Therapy Belt</li>
            <li>Red Light Therapy Panel</li>
            <li>Cold Sore Treatment Device</li>
          </ul>
        </div>

        {/* 支持 */}
        <div>
          <h3 className="font-bold mb-4 uppercase">Support</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Affiliate Program</li>
          </ul>
        </div>

        {/* 政策 */}
        <div>
          <h3 className="font-bold mb-4 uppercase">Policy</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/shopping-policy">Shipping Policy</Link>
            </li>
            <li>Return/Refund Policy</li>
            <li>Terms Of Service</li>
            <li>Payment Method</li>
          </ul>
        </div>

        {/* 社交与支付方式 */}
        <div>
          <h3 className="font-bold mb-4 uppercase">Follow Us</h3>
          <p className="text-gray-400 mb-3">
            Youlumi will release new products and discount information from time to time
          </p>
          <div className="flex gap-2 mb-4">
            <button className="bg-[#2b2b2b] p-4 rounded cursor-pointer"><FaFacebookF /></button>
            <button className="bg-[#2b2b2b] p-4 rounded cursor-pointer"><FaXTwitter /></button>
            <button className="bg-[#2b2b2b] p-4 rounded cursor-pointer"><FaInstagram /></button>
            <button className="bg-[#2b2b2b] p-4 rounded cursor-pointer"><FaYoutube /></button>
          </div>
          {/* <p className="text-xs text-gray-500 mb-4">We accept</p>
          <div className="flex gap-2">
            <img src="/icons/amex.svg" alt="amex" className="h-6" />
            <img src="/icons/discover.svg" alt="discover" className="h-6" />
            <img src="/icons/jcb.svg" alt="jcb" className="h-6" />
            <img src="/icons/mastercard.svg" alt="mastercard" className="h-6" />
            <img src="/icons/paypal.svg" alt="paypal" className="h-6" />
            <img src="/icons/visa.svg" alt="visa" className="h-6" />
          </div> */}
        </div>
      </div>
    </footer>
  );
}
