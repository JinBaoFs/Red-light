'use client';

import { Suspense } from "react";
import { useSearchParams, useRouter } from 'next/navigation'

function PayPalSuccessContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const orderId = searchParams.get('id') || 'N/A'

  return (
    <div className="flex flex-col items-center justify-center py-[50px] px-4 text-center">
      <svg className="w-16 h-16 text-green-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2l4-4m5 2a9 9 0 11-18 0a9 9 0 0118 0z" />
      </svg>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h2>
      <p className="text-gray-600 mb-2">Your payment has been processed successfully.</p>
      <p className="text-sm text-gray-500 mb-6">Order ID: <span className="font-semibold">{orderId}</span></p>
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={() => router.push('/')}
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition cursor-pointer"
        >
          Back to Home
        </button>
        <button
          onClick={() => router.push('/user-center')}
          className="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 transition"
        >
          View Orders
        </button>
      </div>
    </div>
  )
}

export default function PayPalSuccessPage() {
  return (
    <Suspense fallback={<div>加载中...</div>}>
      <PayPalSuccessContent />
    </Suspense>
  )
}