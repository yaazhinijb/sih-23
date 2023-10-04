import React from 'react'

export interface IPDPProps {
    pId?: string;
    pname: string;
    desc?: string;
    imgURL: string;
    offer: string;
    price: string;
    ratings: string;
}

function PDP({ pId = "0", pname = "Unbranded Single Stage oxygen gas regulators", desc = "(OXYGEN FLOW METERS (with HUMIDIFIER & PRESSURE REGULATORS))", imgURL = "", offer = "50%", price = "452.35", ratings = "3.1 - 3.5" }: IPDPProps) {
    return (
        <>
            <div className="w-full flex flex-row justify-center my-5">
                <div className="w-full md:w-4/5 flex flex-col md:flex-row border-2 border-black rounded-2xl p-10 ">
                    <div className="w-full md:w-1/2 flex flex-row justify-center bg-slate-100 rounded-md">
                        <div className="flex flex-col justify-center">
                            <img src={imgURL} alt="product image" className="h-fit md:h-[300px]" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-row justify-center p-5">
                        <div className="flex flex-col justify-center">
                            <h1 className="text-2xl font-bold">{pname}</h1>
                            <h2 className="text-xl font-semibold text-gray-500">{desc}</h2>
                            <div className="flex flex-row w-1/5 py-2 px-3 bg-green-600 rounded-lg justify-between mt-4">
                                <p className="text-sm font-bold text-white  ">{ratings === "" ? "3.1 - 3.5" : ratings}</p>
                                <img src="https://cdn-icons-png.flaticon.com/128/3334/3334338.png" alt="star" width="20px" />
                            </div>
                            <div className="flex flex-row my-5">
                                <p className="text-4xl font-semibold mr-5">Rs. {price}</p>
                                <p className="text-xl font-bold text-black py-2 px-3 bg-yellow-400 rounded-lg">{offer}% OFF</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PDP