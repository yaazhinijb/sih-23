import React from 'react'

function PriceSuggestion({ maxPrice = "2,000.00", minPrice = "2,500.00", optimalPrice = "2,300.00" }: { maxPrice?: string; minPrice?: string; optimalPrice?: string; }) {
    return (
        <div className='w-full flex flex-row justify-center'>
            <div className='flex flex-col w-full'>

                <div className='flex flex-row justify-between my-5'>
                    <div className='bg-red-400 px-5 py-3 rounded-md'>
                        <p className='text-white font-semibold text-2xl'>₹ {maxPrice}</p>
                    </div>
                    <div className='bg-red-400 px-5 py-3 rounded-md'>
                        <p className='text-white font-semibold text-2xl'>₹ {optimalPrice}</p>
                    </div>
                    <div className='bg-red-400 px-5 py-3 rounded-md'>
                        <p className='text-white font-semibold text-2xl'>₹ {minPrice}</p>
                    </div>
                </div>
                <div className='w-full min-h-[20px] h-[20px] bg-red-200 rounded-md'>
                    <div className='flex flex-row justify-between'>
                        <div className=' bg-red-500 border-slate-100 border-4 outline-2 outline-black rounded-full min-h-[30px] min-w-[30px] mt-[-5px] ml-16'></div>
                        <div className=' bg-green-500 border-slate-100 border-4 outline-2 outline-black rounded-full min-h-[30px] min-w-[30px] mt-[-5px] '></div>
                        <div className=' bg-yellow-500 border-slate-100 border-4 outline-2 outline-black rounded-full min-h-[30px] min-w-[30px] mt-[-5px] mr-16'></div>
                    </div>
                </div>
                <div className='flex flex-row justify-between my-5'>
                    <div className='bg-orange-400 px-5 py-3 rounded-md'>
                        <p className='text-white font-semibold text-2xl'>MAX Price</p>
                    </div>
                    <div className='bg-green-400 px-5 py-3 rounded-md'>
                        <p className='text-white font-semibold text-2xl'>Optimal Price</p>
                    </div>
                    <div className='bg-yellow-400 px-5 py-3 rounded-md'>
                        <p className='text-white font-semibold text-2xl'>MIN Price</p>
                    </div>
                </div>
                <p className='text-xl mt-4'>The Prcie Suggestion is based on the customer reviews implying that the customers are satisfied within this price range.</p>
            </div>
        </div>
    )
}

export default PriceSuggestion