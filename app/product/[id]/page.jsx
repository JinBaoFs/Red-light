// app/product/[id]/page.jsx
'use client';
import { useParams } from 'next/navigation';
import { products } from '../../../lib/products';
import { PayPalButton } from '../../../components/PayPalButton';
import ProductImageGallery from '@/components/ProductImageGallery';
import { loadStripe } from '@stripe/stripe-js';
import ProductDetailsRight from '@/components/ProductDetailRight';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  if (!product) return <p>Loading...</p>;

  const productImages = [
    '/images/pro-01.webp',
    '/images/pro-02.webp',
    '/images/pro-01.webp'
  ]

  return (
    <div className="bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-8">
        {/* 左侧图片模块 */}
        <ProductImageGallery images={productImages} />

        {/* 右侧详情模块 */}
        <ProductDetailsRight product={product}></ProductDetailsRight>
      </div>
    </div>
  );
}
