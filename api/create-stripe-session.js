import Stripe from 'stripe';
const stripe = new Stripe('sk_test_xxx', { apiVersion: '2024-04-10' }); // 替换为你的密钥
export default async function handler(req, res) {
  const { name, price } = req.body;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: { name },
        unit_amount: Math.round(price * 100)
      },
      quantity: 1
    }],
    mode: 'payment',
    success_url: 'https://yourdomain.com/success',
    cancel_url: 'https://yourdomain.com/cancel'
  });
  res.json({ sessionId: session.id });
}