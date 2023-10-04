import React from 'react'
import { IPDPProps } from './PDP'

function Card({ pname = "Unbranded Single Stage oxygen gas regulators", desc = "(OXYGEN FLOW METERS (with HUMIDIFIER & PRESSURE REGULATORS))", imgURL = "", offer = 50, price = "452.35" }: IPDPProps) {
    return (
        <>
            <div className="min-w-[300px] max-w-[300px] flex flex-col py-5 px-3 shadow-lg shadow-gray-400 transition cursor-pointer hover:shadow-gray-600 mx-12 my-5">
                <div className="flex flex-row justify-center p-2">
                    <img src={imgURL} alt="productImage" width="250px" />
                </div>
                <p className="text-xl font-semibold">{pname.length > 50 ? <>{pname.slice(0, 50)}...</> : pname}</p>
                <p className="text-lg font-bold text-gray-500">Description:</p>
                <p className="text-xl font-normal text-gray-500">{desc.length > 50 ? <>{desc.slice(0, 50)}...</> : pname}</p>
                <div className="flex flex-row my-5">
                    <p className="text-xl font-bold mx-5 mt-2">Rs. {price}</p>
                    <p className="text-md font-bold text-black py-2 px-3 bg-yellow-400 rounded-lg">{offer}% OFF</p>
                </div>
            </div>
        </>
    )
}

export default Card