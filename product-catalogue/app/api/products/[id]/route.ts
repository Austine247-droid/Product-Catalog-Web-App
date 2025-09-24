import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`, {
      cache: 'no-store',
    })
    if (!res.ok) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    }
    const product = await res.json()
    return NextResponse.json(product)
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 })
  }
}
