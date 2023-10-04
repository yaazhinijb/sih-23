import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <div className="w-full min-h-[60px] bg-gray-800 flex flex-row justify-between fixed top-0">
            <Link href={"/"}>
                <h1 className="text-white text-3xl p-2 px-5 font-semibold cursor-pointer">GeM Compare</h1>
            </Link>
            <div>
                <Link href={"/"}>
                    <p className="text-white underline text-xl p-3 px-10 cursor-pointer">Looking for something else?</p>
                </Link>
            </div>
        </div>
    )
}

export default Navbar