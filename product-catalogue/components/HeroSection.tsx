'use client'

import Link from 'next/link'

export const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center h-[90vh] -mt-[50px]">
      <h1 className="text-2xl sm:text-5xl font-bold text-[#1A1C1E] drop-shadow-lg">
        Discover Premium Products at Unbeatable Prices
      </h1>
      <p className="mt-4 text-lg text-gray-900 max-w-2xl">
        Shop the latest and greatest — curated just for you.
      </p>
      <Link href="/products" className="mt-6">
        <button className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 transition rounded-full text-lg font-medium text-white shadow-lg cursor-pointer">
          Shop Now
        </button>
      </Link>
    </section>
  )
}
