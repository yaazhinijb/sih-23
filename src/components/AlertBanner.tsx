import Link from 'next/link';
import React from 'react'

function AlertBanner({ alertText = "Some Info", productID = 10000 }: { alertText?: string; productID?: number; }) {
    return (
        <div className='width-full rounded-md py-2 px-5 bg-green-200 flex'>
            <div className='mx-4'>
                <svg width="40" height="40" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="31.5" cy="31.5" r="31.5" fill="#3AE000" />
                    <path d="M27.5181 46V24.1818H34.4641V46H27.5181ZM30.9982 21.6392C30.0228 21.6392 29.1848 21.3172 28.484 20.6733C27.7833 20.0199 27.4329 19.2339 27.4329 18.3153C27.4329 17.4062 27.7833 16.6297 28.484 15.9858C29.1848 15.3324 30.0228 15.0057 30.9982 15.0057C31.9831 15.0057 32.8211 15.3324 33.5124 15.9858C34.2132 16.6297 34.5636 17.4062 34.5636 18.3153C34.5636 19.2339 34.2132 20.0199 33.5124 20.6733C32.8211 21.3172 31.9831 21.6392 30.9982 21.6392Z" fill="white" />
                </svg>
            </div>
            <div className={`p-1 text-2xl font-semibold  w-full cursor-pointer`}>{alertText}</div>
        </div>
    )
}

export default AlertBanner