import Image from 'next/image'
import { Inter } from 'next/font/google'
import PDP from '@/components/PDP'
import { gem_products } from "@/data/data"
import Card from '@/components/Card'
import Navbar from '@/components/Navbar'
import { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [productsList, setProductsList] = useState(gem_products.products)

  const [query, setQuery] = useState("")
  const [querySearched, setquerySearched] = useState("")
  const [searched, setsearched] = useState(false)

  const searchProductfromGeM = () => {
    setsearched(true)
    setquerySearched(query)
    setProductsList(gem_products.products.filter(product => product.product.toLocaleLowerCase().includes(query.toLocaleLowerCase())))
  }

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
              <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="eg. revolving chair..." className="border-none outline-none text-xl w-4/5" />
            </div>
            <div className="cursor-pointer" onClick={searchProductfromGeM}>
              <img src="https://cdn-icons-png.flaticon.com/128/751/751381.png" alt="searchIcon" width="30px" />
            </div>
          </div>
          <div className="my-10">
            <h1 className="text-3xl font-semibold py-10">{searched ? "Search Results" : "Top Selling Products"}</h1>
            <div className="flex flex-wrap">
              {productsList.length > 0 ?
                <>
                  {productsList.map(product => (
                    <Card pId={product["ids"]} pname={product["product"]} desc={product["pname"].replaceAll("\n", "")} imgURL={product["imgURL-src"]} offer={product["offer"]} price={product["price"]} ratings={product["rating"]} />
                  ))}
                </> :
                <>
                  <p className="text-4xl font-medium text-gray-700">No Results found for "{querySearched}"</p>
                </>
              }

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
