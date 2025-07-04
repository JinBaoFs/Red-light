import { Geist, Geist_Mono } from "next/font/google";
import { CartProvider } from '../context/CartContext';
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Youlumi Store',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <script src="https://www.paypal.com/sdk/js?client-id=ATbHmUD7kjh5sRO8YEKwsSlT1yHtQcnY8nuDBSsbEV4htpfHeIknFHR1Rinc867Li5_6NCwlczZVShpI&currency=USD" async></script>
      <head />
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
