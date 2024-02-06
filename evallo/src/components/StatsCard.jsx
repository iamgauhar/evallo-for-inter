import React from 'react'

const StatsCard = () => {
    return (
        <div className='py-6 flex justify-between flex-col md:flex-row gap-6'>
            <div className='flex gap-2 items-start bg-white border p-4 rounded-xl w-full hover:-translate-y-1 transition-all duration-500'>
                <div className='rounded-full bg-gray-300 p-2 h-12 min-w-12 grid place-content-center'>
                    <i className='bx bxs-dollar-circle text-2xl text-[#425a8b]' ></i>
                </div>
                <div>
                    <h2 className='font-semibold text-gray-800 text-sm pb-2'>Revenue</h2>
                    <h1 className='font-bold text-xl text-gray-600'>$13,456.5</h1>
                    <p className='text-xs text-gray-500'>Shipping fees are not included</p>
                </div>
            </div>
            <div className='flex gap-2 items-start bg-white border p-4 rounded-xl w-full hover:-translate-y-1 transition-all duration-500'>
                <div className='rounded-full bg-green-200 p-2 h-12 min-w-12 grid place-content-center'>
                    <i className='bx bxs-truck text-2xl text-green-500' ></i>
                </div>
                <div>
                    <h2 className='font-semibold text-gray-800 text-sm'>Orders</h2>
                    <h1 className='font-bold text-xl text-gray-600'>53,668</h1>
                    <p className='text-xs text-gray-500'>Excluding orders in transit</p>
                </div>
            </div>
            <div className='flex gap-2 items-start bg-white border p-4 rounded-xl w-full hover:-translate-y-1 transition-all duration-500'>
                <div className='rounded-full bg-orange-200 p-2 h-12 min-w-12 grid place-content-center'>
                    <i className='bx bx-package text-2xl text-orange-500' ></i>
                </div>
                <div>
                    <h2 className='font-semibold text-gray-800 text-sm'>Products</h2>
                    <h1 className='font-bold text-xl text-gray-600'>9,856</h1>
                    <p className='text-xs text-gray-500'>In 19 Categories</p>
                </div>
            </div>
            <div className='flex gap-2 items-start bg-white border p-4 rounded-xl w-full hover:-translate-y-1 transition-all duration-500'>
                <div className='rounded-full bg-emerald-200 p-2 h-12 min-w-12 grid place-content-center'>
                    <i className='bx bx-basket text-2xl text-sky-400' ></i>
                </div>
                <div>
                    <h2 className='font-semibold text-gray-800 text-sm'>Monthly Earning</h2>
                    <h1 className='font-bold text-xl text-gray-600'>$6,982</h1>
                    <p className='text-xs text-gray-500'>Based in your local time</p>
                </div>
            </div>
        </div>
    )
}

export default StatsCard