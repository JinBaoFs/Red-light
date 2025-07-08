'use client'
import { useEffect, useState } from 'react';

export default function AddressDrawer({ isOpen, onClose, onSubmit }) {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    zip: '',
    country: 'United States',
    province: 'Alabama',
    isDefault: false,
  });

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 300); // 动画延迟卸载
    }
  }, [isOpen]);

  if (!isOpen && !isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* 半透明背景 */}
      <div
        className={`fixed inset-0 bg-black/30 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      ></div>

      {/* 右侧滑出框 */}
      <div
        className={`ml-auto h-full w-full max-w-md bg-white shadow-lg transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* 顶部标题 */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h2 className="text-sm font-bold">Add a new address</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            ✕
          </button>
        </div>

        {/* 表单内容 */}
        <form
          className="p-5 space-y-4 overflow-y-auto"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit?.(formData);
            onClose();
          }}
        >
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="First name"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="w-1/2 border px-3 py-2 text-sm"
              required
            />
            <input
              type="text"
              placeholder="Last name"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="w-1/2 border px-3 py-2 text-sm"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full border px-3 py-2 text-sm"
          />
          <input
            type="tel"
            placeholder="Phone number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full border px-3 py-2 text-sm"
            required
          />
          <input
            type="text"
            placeholder="Address 1"
            value={formData.address1}
            onChange={(e) => setFormData({ ...formData, address1: e.target.value })}
            className="w-full border px-3 py-2 text-sm"
            required
          />
          <input
            type="text"
            placeholder="Address 2"
            value={formData.address2}
            onChange={(e) => setFormData({ ...formData, address2: e.target.value })}
            className="w-full border px-3 py-2 text-sm"
          />
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="City"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-1/2 border px-3 py-2 text-sm"
              required
            />
            <input
              type="text"
              placeholder="Zip code"
              value={formData.zip}
              onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
              className="w-1/2 border px-3 py-2 text-sm"
              required
            />
          </div>
          <select
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            className="w-full border px-3 py-2 text-sm"
          >
            <option>United States</option>
            <option>Canada</option>
          </select>
          <select
            value={formData.province}
            onChange={(e) => setFormData({ ...formData, province: e.target.value })}
            className="w-full border px-3 py-2 text-sm"
          >
            <option>Alabama</option>
            <option>California</option>
          </select>

          <label className="flex items-center text-sm">
            <input
              type="checkbox"
              checked={formData.isDefault}
              onChange={(e) => setFormData({ ...formData, isDefault: e.target.checked })}
              className="mr-2"
            />
            Set as default
          </label>

          <button
            type="submit"
            className="w-full mt-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded hover:bg-orange-600"
          >
            ADD A NEW ADDRESS
          </button>
        </form>
      </div>
    </div>
  );
}
