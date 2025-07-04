// app/product/[id]/page.jsx
'use client';
import { useParams } from 'next/navigation';
import { products } from '../../../lib/products';
import { PayPalButton } from '../../../components/PayPalButton';
import ProductImageGallery from '@/components/ProductImageGallery';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  if (!product) return <p>Loading...</p>;

  const productImages = [
    '/images/pro-01.webp',
    '/images/pro-02.webp',
    '/images/pro-01.webp'
  ]

  const handleStripeCheckout = async () => {
    const res = await fetch('/api/create-stripe-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    });
    const { sessionId } = await res.json();
    const stripe = await stripePromise;
    stripe?.redirectToCheckout({ sessionId });
  };

  return (
    <div className="p-4">
      <div className="max-w-7xl p-6 w-[50%]">
        <ProductImageGallery images={productImages} />
      </div>
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-lg">{product.description}</p>
      <p className="text-xl">${product.price}</p>

      <div className="mt-6">
        <h3 className="mb-2">🅿️ 使用 PayPal 支付：</h3>
        <PayPalButton price={product.price} />
      </div>
    </div>
  );
}
