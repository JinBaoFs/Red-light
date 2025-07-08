'use client'

import { useState } from 'react'
import AddressDrawer from '@/components/AddressDrawer'

export default function UserCenter() {
  const [activeTab, setActiveTab] = useState('orders')
  const [addresses, setAddresses] = useState([])
  const [orders] = useState([]) // 你可以根据需要替换为实际订单数据
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleAddAddress = (address) => {
    setAddresses([...addresses, address])
    setIsDrawerOpen(false)
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col">
        {/* 顶部 Tab 菜单 */}
        <div className="border-b px-6 py-4 flex items-center gap-6 text-sm font-medium">
          <button
            className={activeTab === 'orders' ? 'underline' : 'text-gray-500 hover:text-black'}
            onClick={() => setActiveTab('orders')}
          >
            Orders
          </button>
          <button
            className={activeTab === 'addresses' ? 'underline' : 'text-gray-500 hover:text-black'}
            onClick={() => setActiveTab('addresses')}
          >
            Addresses <span className="text-xs bg-gray-200 px-2 py-0.5 rounded ml-1">{addresses.length}</span>
          </button>
          <button className="ml-auto text-gray-500 hover:text-black">Logout</button>
        </div>

        {/* 内容区域 */}
        <div className="px-6 py-12 text-center">
          {activeTab === 'orders' && (
            <>
              <h2 className="text-xl font-semibold mb-4">Your Orders</h2>
              {orders.length === 0 ? (
                <div className="text-gray-600">
                  {/* <img src="/images/empty-orders.png" alt="No orders" className="mx-auto w-20 h-20 mb-4" /> */}
                  <p>You have not placed any orders yet.</p>
                </div>
              ) : (
                <div className="text-left">{/* 订单列表渲染区域 */}</div>
              )}
            </>
          )}

          {activeTab === 'addresses' && (
            <>
              <h2 className="text-xl font-semibold mb-4">Addresses</h2>
              {addresses.length === 0 ? (
                <div className="flex justify-center">
                  <div className="border border-dashed p-10 rounded text-sm text-gray-600 w-80">
                    <div className="flex justify-center text-2xl mb-3">📍</div>
                    <p>You have not saved any addresses yet.</p>
                    <button
                      onClick={() => setIsDrawerOpen(true)}
                      className="mt-4 inline-block text-blue-600 underline"
                    >
                      Add a new address
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-left">
                  <button
                    onClick={() => setIsDrawerOpen(true)}
                    className="mb-4 text-blue-600 underline"
                  >
                    Add another address
                  </button>
                  <ul className="grid gap-4 max-w-3xl mx-auto">
                    {addresses.map((addr, idx) => (
                      <li key={idx} className="border p-4 rounded text-left">
                        <div className="font-semibold">
                          {addr.firstName} {addr.lastName}
                        </div>
                        <div className="text-sm text-gray-600">
                          {addr.address1}, {addr.city}, {addr.province} {addr.zip} <br />
                          {addr.country} | {addr.phone}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>

        {/* 添加地址弹窗 */}
        <AddressDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          onSubmit={handleAddAddress}
        />
      </div>
    </div>
  )
}
