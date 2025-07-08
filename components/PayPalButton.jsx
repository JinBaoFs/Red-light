'use client';

import { PayPalButtons } from '@paypal/react-paypal-js';

export default function PayPalButton({ amount, onSuccess }) {
  return (
    <PayPalButtons
      style={{
        layout: 'horizontal', // 横向排列
        color: 'gold',        // 金黄色背景
        shape: 'rect',        // 矩形按钮
        label: 'paypal',      // 显示 PayPal logo
        height: 48,           // 调整高度
        tagline: false,       // 不显示小字标语
      }}
      forceReRender={[amount]}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: amount,
              },
            },
          ],
        });
      }}
      onApprove={(data, actions) => {
        return actions.order.capture().then((details) => {
          console.log('支付成功：', details);
          if (onSuccess) {
            onSuccess(details);
          }
        });
      }}
      onError={(err) => {
        console.error('PayPal 错误：', err);
        alert('支付失败，请稍后再试');
      }}
    />
  );
}
