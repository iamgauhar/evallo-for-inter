import React from 'react'

const ProfileTab = () => {
    return (
        <>
            <div className='bg-white shadow-md rounded-sm absolute right-4 top-16'>
                <ul className='py-2'>
                    <li className='flex items-center px-4 py-1 hover:bg-gray-50 cursor-pointer'>
                        <i className='text-gray-400 pr-3 bx bx-user' ></i>
                        <a className='text-sm' href="!#">Edit Profile</a>
                    </li>
                    <li className='flex items-center px-4 py-1 hover:bg-gray-50 cursor-pointer'>
                        <i className='text-gray-400 pr-3 bx bxs-cog' ></i>
                        <a className='text-sm' href="!#">Account Settings</a>
                    </li>
                    <li className='flex items-center px-4 py-1 hover:bg-gray-50 cursor-pointer'>
                        <i className='text-gray-400 pr-3 bx bxs-wallet-alt' ></i>
                        <a className='text-sm' href="!#">Wallet</a>
                    </li>
                    <li className='flex items-center px-4 py-1 hover:bg-gray-50 cursor-pointer'>
                        <i className='text-gray-400 pr-3 bx bx-receipt' ></i>
                        <a className='text-sm' href="!#">Billing</a>
                    </li>
                    <li className='flex items-center px-4 py-1 hover:bg-gray-50 cursor-pointer'>
                        <i className='text-gray-400 pr-3 bx bx-help-circle' ></i>
                        <a className='text-sm' href="!#">Help center</a>
                    </li>
                    <li className='flex items-center px-4 py-1 hover:bg-gray-50 cursor-pointer'>
                        <i className='text-gray-400 pr-3 bx bx-exit' ></i>
                        <a className='text-sm' href="!#">Logout</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ProfileTab