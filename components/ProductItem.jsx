'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';


const ProductItem = ({ product }) => {
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      {/* 图片容器 */}
      <div className="relative overflow-hidden aspect-square bg-gray-100 cursor-pointer">
        {/* 默认图 */}
        <Image
          src={product.defaultImage}
          alt={product.name}
          fill
          className="object-cover transition-opacity duration-300 group-hover:opacity-0"
          priority
        />
        {/* 悬停图 */}
        <Image
          src={product.hoverImage}
          alt={`${product.name} hover`}
          fill
          className="object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        />

        {/* 添加购物车按钮 */}
        <button
          onClick={handleAddToCart}
          className="absolute cursor-pointer bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-purple-500/90 text-white font-medium py-2"
        >
          {isAdded ? '✓ Added to cart' : '+ Add to cart'}
        </button>

        {/* 成功提示 */}
        {isAdded && (
          <div className="absolute inset-0 bg-orange-500/80 flex items-center justify-center z-10">
            <p className="text-white font-bold text-lg">Added to cart!</p>
          </div>
        )}
      </div>

      <div className="p-4 text-center">
        <h3 className="text-xs font-semibold line-clamp-2">{product.name}</h3>
        <p className="text-gray-600 font-medium mt-1 text-xs">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductItem;