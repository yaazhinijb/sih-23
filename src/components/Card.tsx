import React from 'react'
import { IPDPProps } from './PDP'
import Link from 'next/link'

function Card({ pId = "0", pname = "Unbranded Single Stage oxygen gas regulators", desc = "(OXYGEN FLOW METERS (with HUMIDIFIER & PRESSURE REGULATORS))", imgURL = "", offer = 50, price = "452.35", ratings = "3.1 - 3.5" }: IPDPProps) {
    return (
        <>
            <Link href={`/compare/${pId}`} className="min-w-[300px] max-w-[300px] flex flex-col py-5 px-3 shadow-lg shadow-gray-400 transition cursor-pointer hover:shadow-gray-600 mx-12 my-5">
                <div className="flex flex-row justify-center p-2">
                    <img src={imgURL} alt="productImage" width="250px" />
                </div>
                <p className="text-xl font-semibold">{pname.length > 50 ? <>{pname.slice(0, 50)}...</> : pname}</p>
                <p className="text-md font-bold text-gray-500">Description:</p>
                <p className="text-sm font-normal text-gray-500">{desc.length > 150 ? <>{desc.slice(0, 150)}...</> : pname}</p>
                <div className="flex flex-row w-2/5 py-2 px-3 bg-green-600 rounded-lg justify-between my-4">
                    <p className="text-sm font-bold text-white  ">{ratings === "" ? "3.1 - 3.5" : ratings}</p>
                    <img src="https://cdn-icons-png.flaticon.com/128/3334/3334338.png" alt="star" width="20px" />
                </div>
                <div className="flex flex-row mb-5">
                    <p className="text-xl font-bold mx-5 mt-2">{price}</p>
                    <p className="text-md font-bold text-black py-2 px-3 bg-yellow-400 rounded-lg">{offer} OFF</p>
                </div>
            </Link>
        </>
    )
}

export default Card