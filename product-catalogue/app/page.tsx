import { HeroSection } from '@/components/HeroSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
    </>
  )
}

// import Image from 'next/image'

// export default async function HomePage() {
//   const res = await fetch('https://fakestoreapi.com/products')
//   const data = await res.json()

//   return (
//     <div>
//       {data.map(product => (
//         <div key={product.id}>
//           <p>{product.id}</p>
//           <Image src={product.image} alt="image" width={50} height={50} />
//         </div>
//       ))}
//     </div>
//   )
// }
