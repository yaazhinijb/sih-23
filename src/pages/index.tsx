import Image from 'next/image'
import { Inter } from 'next/font/google'
import PDP from '@/components/PDP'
import { gem_products } from "@/data/products"
import Card from '@/components/Card'
import Navbar from '@/components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const productsList = gem_products.products

  return (
    <>
      <Navbar />
      {/* <PDP pname={productsList[0].pname} desc={productsList[0].desc} imgURL={productsList[0].imgURL} offer={productsList[0].offer} price={productsList[0].price} /> */}
      <div className="w-full flex flex-row justify-center">
        <div className="w-4/5 flex flex-col">
          <p className="text-center text-5xl my-16 font-semibold">Search and Compare Products in GeM</p>
          <div className="w-full border-2 border-gray-500 rounded-lg h-[50] p-3 flex flex-row justify-between">
            <div className="flex flex-row w-full">
              <p className="text-xl border-r-2 border-gray-600 max-w-[100] mr-5 px-3">Search</p>
              <input type="search" placeholder="eg. revolving chair..." className="border-none outline-none text-xl w-4/5" />
            </div>
            <div className="cursor-pointer">
              <img src="https://cdn-icons-png.flaticon.com/128/751/751381.png" alt="searchIcon" width="30px" />
            </div>
          </div>
          <div className="my-10">
            <h1 className="text-3xl font-semibold py-10">Top Selling Products</h1>
            <div className="flex flex-wrap">
              {productsList.map(product => (
                <Card pname={product.pname} desc={product.desc} imgURL={product.imgURL} offer={product.offer} price={product.price} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
