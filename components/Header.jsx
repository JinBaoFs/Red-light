'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import CartSidebar from './CartSidebar';
import Image from 'next/image';

const navItems = [
  { label: 'Red Light Therapy Cap', href: '/product-center' },
  {
    label: 'Red Light Therapy Panel',
    href: '#',
    subItems: [
      {
        id: 1,
        image: "/images/pro_01.jpg",
        name: "IMG-01"
      },
      {
        id: 1,
        image: "/images/pro_01.jpg",
        name: "IMG-02"
      },
      {
        id: 1,
        image: "/images/pro_01.jpg",
        name: "IMG-03"
      }
    ]
  },
  { 
    label: 'Red Light Therapy Belt',
    href: '#',
    subItems: [
      {
        id: 1,
        image: "/images/pro-02.webp",
        name: "IMG-01"
      },
      {
        id: 1,
        image: "/images/pro-01.webp",
        name: "IMG-02"
      },
      {
        id: 1,
        image: "/images/pro-02.webp",
        name: "IMG-03"
      },
      {
        id: 1,
        image: "/images/pro-01.webp",
        name: "IMG-02"
      },
    ]
  },
  { label: 'Cold Sore Treatment Device', href: '/product-center' },
  { label: 'Contact', href: '/contact' }
];

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalQuantity } = useCart();

  return (
    <div className="relative z-50 sticky top-0">
      {/* 顶部导航栏 */}
      <header className="bg-[#2d2d2d] text-white py-5 md:py-0">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="text-2xl font-bold flex items-center gap-1 cursor-pointer">
              <span className="text-white">You</span>
              <span className="text-orange-500">Lumi</span>
            </div>
          </Link>

          {/* 中间导航菜单 */}
          <nav className="hidden md:flex gap-6 text-sm font-medium relative">
            {navItems.map((item) => (
              <div
                key={item.label}
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
                className="relative py-10 cursor-pointer"
              >
                <Link href={item.href} className="hover:text-orange-500 transition-colors">
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>

          {/* 图标区 */}
          <div className="flex items-center gap-6 text-lg">
            <Link href="/login">
              <FiUser className="cursor-pointer hover:text-orange-500 transition-colors" />
            </Link>
            <div 
              className="relative cursor-pointer hover:text-orange-500 transition-colors"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <FiShoppingCart />
              <span className="absolute -top-2 -right-2 text-xs bg-orange-500 text-white rounded-full px-1.5 py-0.5">
                {totalQuantity}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* 全宽下拉菜单区域 */}
      {navItems.map(
        (item) =>
          item.subItems &&
          activeDropdown === item.label && (
            <div
              key={item.label}
              className="absolute left-0 w-full bg-white text-black shadow-md animate-fadeIn z-40"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-5 gap-4">
                {item.subItems.map((sub, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center cursor-pointer"
                  >
                    <Link href={`/product/${sub.id}`}><img src={sub.image}></img></Link>
                    <div>{sub.name}</div>
                  </div>
                ))}
              </div>
            </div>
          )
      )}

      {/* 购物车侧边栏 */}
      {isCartOpen && (
        <CartSidebar onClose={() => setIsCartOpen(false)} />
      )}
    </div>
  );
}