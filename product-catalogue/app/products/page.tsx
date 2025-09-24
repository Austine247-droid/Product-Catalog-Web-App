'use client'
import ProductItem from '@/components/ProductItem'
import { Product } from '@/interfaces'

import { useEffect, useState } from 'react'

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch('/api/products')
      if (!res.ok) throw new Error('Failed to fetch products')
      const data = await res.json()
      console.log(data)
      setProducts(data)
    }
    fetchProduct()
  }, [])

  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  )
}
