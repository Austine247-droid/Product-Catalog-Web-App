import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params // 👈 await here because params is a Promise

  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      cache: 'no-store',
    })

    if (!res.ok) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    }

    const product = await res.json()
    return NextResponse.json(product)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 })
  }
}
