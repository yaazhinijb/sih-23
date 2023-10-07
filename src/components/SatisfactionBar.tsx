import React from 'react'

function SatisfactionBar({ tag = "Quality", satisfaction = true }: { tag: string; satisfaction: boolean; }) {


    return (
        <>
            <div className="flex flex-row justify-between w-full my-5">
                <p className="text-2xl w-[300px] max-w-[300px] text-center text-white px-3 py-6 rounded-md bg-blue-500 font-semibold mr-5">{tag}</p>
                {satisfaction ?
                    <div className="flex flex-row w-full justify-center bg-green-400 py-5 px-3 rounded-md">
                        <img src="https://cdn-icons-png.flaticon.com/128/2584/2584606.png" alt="emoji" width="50px" />
                        <p className="text-2xl font-medium text-white py-2 px-5">Customers are satisfied</p>
                    </div>
                    :
                    <div className="flex flex-row w-full justify-center bg-red-500 py-5 px-3 rounded-md">
                        <img src="https://cdn-icons-png.flaticon.com/128/1791/1791330.png" alt="emoji" width="50px" />
                        <p className="text-2xl font-medium text-white py-2 px-5">Customers not satisfied</p>
                    </div>
                }
            </div>
        </>
    )
}

export default SatisfactionBar