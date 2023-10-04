import Navbar from '@/components/Navbar'
import PDP from '@/components/PDP'
import { gem_products } from "@/data/data"
import { useRouter } from 'next/router';
import React from 'react'
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
            <PDP pId={productDetails?.ids} pname={productDetails?.product} imgURL={productDetails?.['imgURL-src']} offer={productDetails?.offer} price={productDetails?.price} ratings={productDetails?.rating} desc={productDetails["pname"].replaceAll("\n", "")} />
        </>
    )
}

export default Compare