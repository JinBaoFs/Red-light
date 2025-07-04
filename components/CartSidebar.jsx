'use client';

import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';

export default function CartSidebar({ onClose }) {
  const { items, totalPrice, removeItem, updateQuantity, clearCart } = useCart();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 延迟激活动画，先设置visible再触发动画
    setIsVisible(true);
    requestAnimationFrame(() => {
      setIsAnimating(true);
    });
  }, []);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 300);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      const sidebarElement = document.querySelector('.cart-sidebar-content');
      if (sidebarElement && !sidebarElement.contains(e.target)) {
        handleClose();
      }
    };
    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex ${isAnimating ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} style={{ transition: 'opacity 0.3s ease' }}>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50"
        style={{ opacity: isAnimating ? 1 : 0, transition: 'opacity 0.3s ease' }}
        onClick={handleClose}
      ></div>

      {/* Sidebar */}
      <div 
        className="cart-sidebar-content relative bg-white w-[360px] max-w-md ml-auto h-full shadow-xl flex flex-col"
        style={{ 
          transform: isAnimating ? 'translateX(0)' : 'translateX(100%)', 
          transition: 'transform 0.3s ease' 
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4 5H19M7 13L5.4 7M19 13l1.4 5M6 18a2 2 0 100 4 2 2 0 000-4zm12 0a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            <h2 className="text-sm font-semibold">{items.length} item</h2>
          </div>
          <button onClick={handleClose} className="p-2 hover:text-orange-500 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Free shipping note */}
        {items.length > 0 && (
          <div className="px-4 pt-2 text-sm text-center text-gray-600 font-medium">
            You are eligible for free shipping!
          </div>
        )}

        {/* Progress bar */}
        {items.length > 0 && (
          <div className="px-4 pt-2">
            <div className="h-1 bg-black rounded-full"></div>
          </div>
        )}
        

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.map((item) => (
            <div key={item.id} className="flex mb-6">
              <img 
                src={item.image || '/images/pro_01.jpg'} 
                alt={item.name} 
                className="w-20 h-20 object-cover rounded" 
              />
              <div className="ml-4 flex-1">
                <div className="flex justify-between text-sm font-medium">
                  <div>
                    <h3 className="text-sm font-semibold">{item.name}</h3>
                    <p className="text-xs text-blue-600">{item.sku || 'IRW-002'}</p>
                  </div>
                  <p>${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center mt-2">
                  <div className="flex border rounded">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity === 1}
                      className="w-6 h-6 flex items-center justify-center text-sm border-r disabled:opacity-50"
                    >
                      -
                    </button>
                    <span className="w-8 h-6 flex items-center justify-center text-sm">
                      {item.quantity}
                    </span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-6 h-6 flex items-center justify-center text-sm border-l"
                    >
                      +
                    </button>
                  </div>
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="ml-4 text-xs text-gray-500 underline hover:text-black"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-4 border-t">
            {/* <div className="flex items-center justify-between text-xs mb-2">
              <span className="border border-gray-300 px-2 py-1 bg-gray-100 font-mono">🏷️ YLMFST5OFF</span>
              <span className="text-red-500">- $5.00</span>
            </div> */}
            {/* <div className="flex justify-between text-xs text-gray-500 mb-4">
              <span className="underline">Add order note</span>
              <span>Shipping & taxes calculated at checkout</span>
            </div> */}
            <button className="w-full py-3 bg-orange-500 text-white text-sm font-bold rounded hover:bg-orange-600 transition-colors">
              🔒 CHECKOUT • ${totalPrice.toFixed(2)} USD
            </button>
          </div>
        )}
        
      </div>
    </div>
  );
}