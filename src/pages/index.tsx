import Image from 'next/image'
import { Inter } from 'next/font/google'
import PDP from '@/components/PDP'
import { gem_products } from "@/data/products"
import Navbar from '@/components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const productsList = gem_products.products

  return (
    <>
      {/* <Navbar />
      <PDP pname={productsList[0].pname} desc={productsList[0].desc} imgURL={productsList[0].imgURL} offer={productsList[0].offer} price={productsList[0].price} /> */}
    </>
  )
}
