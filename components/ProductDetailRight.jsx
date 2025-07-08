'use client'

import { useState } from 'react'
import PayPalWrapper from './PayPalWrapper'
import PayPalButton from './PayPalButton'

export default function ProductDetailsRight({ product }) {
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    // 这里是添加购物车的逻辑
    console.log('Add to cart', product, quantity)
  }

  const handlePaySuccess = (details) => {
    alert(`🎉 支付成功！欢迎 ${details.payer.name.given_name}`);
    // TODO: 提交订单到后端记录
  };

  return (
    <div className="w-full md:w-1/2 px-4 mt-6 md:mt-0">
      <p className="uppercase text-sm font-medium text-gray-400 mb-1">
        {product.brand || 'YOULUMI'}
      </p>

      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
        {product.title}
      </h1>

      <div className="flex items-center mb-4">
        <span className="text-xl font-bold text-red-600 mr-2">
          ${product.price.toFixed(2)}
        </span>
        {product.originalPrice && (
          <>
            <span className="line-through text-gray-500 text-sm mr-2">
              ${product.originalPrice.toFixed(2)}
            </span>
            <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded font-semibold">
              SAVE ${Math.round(product.originalPrice - product.price)}
            </span>
          </>
        )}
      </div>

      <div className="flex items-center text-yellow-500 text-sm mb-2">
        {'★'.repeat(Math.round(product.rating || 5))}
        <span className="ml-2 text-gray-700">{product.reviews} reviews</span>
      </div>

      <div className="text-sm text-gray-700 space-y-3 mb-6 leading-relaxed">
        <p><strong>Enhanced Home Therapy Sessions:</strong> {product.description1}</p>
        <p><strong>Flexible Powering:</strong> {product.description2}</p>
        <p>{product.specs}</p>
      </div>

      <button className="border border-gray-900 px-4 py-2 text-sm font-medium hover:bg-gray-900 hover:text-white transition-colors mb-6">
        For Hair Growth
      </button>

      {/* Quantity Selector */}
      <div className="mb-4">
        <p className="mb-2 font-medium">Quantity:</p>
        <div className="flex items-center w-32 border border-gray-300 rounded overflow-hidden">
          <button
            className="w-8 h-8 flex items-center justify-center text-lg"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            −
          </button>
          <span className="flex-1 text-center">{quantity}</span>
          <button
            className="w-8 h-8 flex items-center justify-center text-lg"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="w-full bg-black text-white py-3 font-bold uppercase text-sm tracking-wider hover:bg-gray-800 transition mb-3"
      >
        Add to cart
      </button>

      {/* PayPal Button */}
      <PayPalWrapper>
        <PayPalButton amount="149.99" onSuccess={handlePaySuccess} />
      </PayPalWrapper>

      <p className="text-sm underline text-center text-gray-600 hover:text-black cursor-pointer">
        More payment options
      </p>
    </div>
  )
}
