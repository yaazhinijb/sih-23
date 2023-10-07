import BarChart from '@/components/Barchart';
import Navbar from '@/components/Navbar'
import PDP from '@/components/PDP'
import AlertBanner from '@/components/AlertBanner';
import { gem_products } from "@/data/data"
import { useRouter } from 'next/router';
import React from 'react'
import Link from 'next/link';
export interface IProductTypes {
    ids: string;
    pname: string;
    product: string;
    "imgURL-src": string;
    offer: string;
    price: string;
    rating: string;
}

function Compare() {
    const router = useRouter()

    const productDetails = gem_products.products.find(p => p.ids === router.query.id) as IProductTypes
    return (
        <>
            <Navbar />
            {
                productDetails &&
                <>
                    <div className="w-full flex flex-row justify-between mb-5 pl-[5%]">
                        <Link href={`/`} className='w-1/5 shadow-md flex flex-row justify-center bg-orange-500 rounded-md px-5 py-2 text-white'><p className='text-2xl font-semibold'>&lt; Back to Search</p></Link>
                        <div></div>
                    </div>
                    <PDP pId={productDetails?.ids} pname={productDetails?.product} imgURL={productDetails?.['imgURL-src']} offer={productDetails?.offer} price={productDetails?.price} ratings={productDetails?.rating} desc={productDetails.pname.replaceAll("\n", "")} />
                    <div className="w-full flex flex-row justify-center mb-12">
                        <div className='flex flex-col w-4/5'>
                            <p className='text-4xl underline my-5 font-semibold'>Price Comparision in Rs</p>
                            <AlertBanner alertText='GeM offers the lowest price of all' />
                            <div className='w-full mt-5 h-[600px] border-2 border-black rounded-md p-5'>
                                <BarChart type={"price"} />
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-row justify-center mb-20">
                        <div className='flex flex-col w-4/5'>
                            <p className='text-4xl underline my-5 font-semibold'>Offers Comparision in %</p>
                            <AlertBanner alertText='GeM offers the highest offer of all' />
                            <div className='w-full mt-5 h-[600px] border-2 border-black rounded-md p-5'>
                                <BarChart type={"offer"} />
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-row justify-center mb-20">
                        <Link href={`/compare/additional/${router.query.id}`} className='w-2/5 shadow-md flex flex-row justify-center bg-blue-500 rounded-md px-5 py-2 text-white'><p className='text-2xl font-semibold'>Show additional Analytics</p></Link>
                    </div>
                </>
            }
        </>
    )
}

export default Compare