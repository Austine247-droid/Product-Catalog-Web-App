import { Product } from '@/interfaces'
import Image from 'next/image'

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${params.id}`, {
    cache: 'no-store',
  })
  if (!res.ok) throw new Error('Failed to fetch product')
  const product: Product = await res.json()

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
      <Image
        src={product.image}
        alt={product.title}
        width={100}
        height={100}
        className="w-full h-64 object-contain mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
      <h1 className="text-3xl font-bold mb-2">{product.category}</h1>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-xl font-semibold mb-6">${product.price}</p>
      <button className="px-6 py-3 bg-cyan-600 text-white rounded-md hover:bg-cyan-500">
        Add to Cart
      </button>
    </div>
  )
}
