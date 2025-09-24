import { NextResponse } from 'next/server'

// GET all products
export async function GET() {
  try {
    const res = await fetch('https://fakestoreapi.com/products', {
      cache: 'no-store',
    })

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
    }

    const products = await res.json()
    return NextResponse.json(products)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
