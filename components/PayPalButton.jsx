// components/PayPalButton.jsx
'use client';
import { useEffect } from 'react';

export function PayPalButton({ price }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.paypal) {
      window.paypal.Buttons({
        createOrder: (_, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: price.toFixed(2)
                }
              }
            ]
          });
        },
        onApprove: async (_, actions) => {
          const details = await actions.order.capture();
          alert(`✅ Payment completed by ${details.payer.name.given_name}`);
        },
        onError: (err) => {
          console.error('❌ PayPal error:', err);
          alert('PayPal payment failed');
        }
      }).render('#paypal-button-container');
    }
  }, [price]);

  return <div id="paypal-button-container"></div>;
}
