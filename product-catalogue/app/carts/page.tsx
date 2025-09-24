'use client'

import { useContext } from 'react'
import { CartContext } from '@/app/context/CartContext'
import Image from 'next/image'

export default function CartPage() {
  const addTo = useContext(CartContext)
  if (!addTo) throw new Error('CartPage must be inside CartProvider')

  const { cart, removeFromCart, clearCart, total } = addTo

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">You Cart is empty 📪</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 mb-3 border rounded-md shadow-md bg-white"
            >
              <div>
                <Image src={item.image} alt="image" width={100} height={100} />
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-600">${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 cursor-pointer"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total Price Section */}
          <div className="mt-6 p-4 border-t flex justify-between items-center bg-gray-100 rounded-md">
            <h2 className="text-xl font-bold">Total: ${total}</h2>
            <button
              onClick={clearCart}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  )
}
