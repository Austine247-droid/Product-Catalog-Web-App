'use client'

import Image from 'next/image'
import { useContext } from 'react'
import { CartContext } from '@/app/context/CartContext'
import { Product } from '@/interfaces'
import Link from 'next/link'
// import { useRouter } from 'next/navigation'

interface ProductItemProps {
  product: Product
}

const ProductItem = ({ product }: ProductItemProps) => {
  const addItem = useContext(CartContext)
  if (!addItem) throw new Error('Product tem must be inside CartProvider')

  const { id, image, title, price } = product
  const { addToCart } = addItem
  //   const router = useRouter()

  const handleAddToCart = () => {
    addToCart({ title, price, id, image })
    // router.push('/carts')
  }

  return (
    <li className="p-4 border-[#F7F7F7] rounded-md shadow-lg flex flex-col bg-gray-300">
      <Link href={`/products/${id}`} className="cursor-pointer">
        <Image src={image} alt={title} width={100} height={100} className=" object-contain mb-2" />
        <h2 className="font-semibold max-w-[300px]">{title}</h2>
      </Link>
      <span className="text-md font-bold mb-2">${price}</span>
      <button
        className="px-[6px] py-[8px] bg-white/50 rounded-md flex w-fit cursor-pointer"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </li>
  )
}

export default ProductItem
