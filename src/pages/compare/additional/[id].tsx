import Navbar from '@/components/Navbar'
import PriceSuggestion from '@/components/PriceSuggestion'
import SatisfactionBar from '@/components/SatisfactionBar'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function Additional() {
    const choices = [true, true, true, false]
    const satisfactionList = [
        {
            tag: "Quality",
            satisfaction: true
        },
        {
            tag: "Size",
            satisfaction: false
        },
        {
            tag: "Features",
            satisfaction: true
        },
        {
            tag: "Color",
            satisfaction: false
        },
    ]
    const router = useRouter()
    return (
        <>
            <Navbar />
            <div className="w-full flex flex-row justify-between mb-5 pl-[5%]">
                <Link href={`/compare/${router.query.id}`} className='w-1/5 shadow-md flex flex-row justify-center bg-orange-500 rounded-md px-5 py-2 text-white'><p className='text-2xl font-semibold'>&lt; Back to Comparision</p></Link>
                <div></div>
            </div>
            <div className="w-full flex flex-row justify-center my-5">
                <div className="w-full md:w-4/5 flex flex-col md:flex-row border-2 border-black rounded-2xl p-10 ">
                    <div className="flex flex-col w-full">
                        <p className="text-4xl font-semibold underline mb-5">Price Suggestion</p>
                        <div className="flex flex-col">
                            <PriceSuggestion minPrice='7,188.00' maxPrice='7,650.00' optimalPrice='7,300.00' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-row justify-center my-5">
                <div className="w-full md:w-4/5 flex flex-col md:flex-row border-2 border-black rounded-2xl p-10 ">
                    <div className="flex flex-col w-full">
                        <p className="text-4xl font-semibold underline mb-5">Additional Analytics</p>
                        <div className="flex flex-col">
                            {
                                satisfactionList.map(item => (
                                    <div key={item.tag}>
                                        <SatisfactionBar tag={item.tag} satisfaction={item.satisfaction} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Additional