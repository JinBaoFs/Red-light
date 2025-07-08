'use client'

import { PayPalScriptProvider } from '@paypal/react-paypal-js'

export default function PayPalWrapper({ children }) {
  return (
    <PayPalScriptProvider
      options={{
        'client-id': process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
        currency: 'USD',
        intent: 'capture', // 或 authorize
        components: 'buttons',
      }}
    >
      {children}
    </PayPalScriptProvider>
  )
}
