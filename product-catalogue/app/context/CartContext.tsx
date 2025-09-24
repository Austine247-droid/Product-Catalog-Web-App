'use client'

import { CartItem } from '@/interfaces'
import { createContext, ReactNode, useState } from 'react'

interface CartContextType {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: number) => void
  clearCart: () => void
  total: number
}
export const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  // Add item
  const addToCart = (item: CartItem) => {
    setCart(prev => [...prev, item])
  }

  // Remove one item
  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  // Clear all items
  const clearCart = () => setCart([])

  // Total price
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, total }}>
      {children}
    </CartContext.Provider>
  )
}
