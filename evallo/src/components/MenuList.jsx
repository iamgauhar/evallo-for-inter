import React from 'react'
import { Menu } from 'antd'
import { HomeFilled, HomeOutlined, ShoppingFilled } from '@ant-design/icons'
import { MdHome, MdShoppingBag, MdShoppingCart, MdMessage, MdStars, MdPieChart, MdAddBox, MdSettings } from "react-icons/md";
import { FaShop, FaUser, FaTag } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsTextIndentRight, BsDot } from "react-icons/bs";
import { useUtilityContext } from '../../context/UtilityContext';


const MenuList = () => {

    const { fullSidebar, setFullSidebar, mobileSidebar, setMobileSidebar } = useUtilityContext()

    return (
        <Menu className='min-h-screen overflow-auto flex flex-col' mode='inline'>
            <div className='flex justify-between items-center pl-4 pr-2 py-6'>
                {fullSidebar ? "" : <div className='cursor-pointer'>
                    <img src="https://wp.alithemes.com/html/ecom/dashboard/assets/imgs/theme/logo.svg" alt="" />
                </div>}
                <div onClick={() => setFullSidebar(!fullSidebar)} className='cursor-pointer hidden sm:block hover:bg-gray-200 p-2 rounded-md'>
                    <BsTextIndentRight size={22} color='#adb5bd' />
                </div>
                <div onClick={() => setMobileSidebar(!mobileSidebar)} className='cursor-pointer sm:hidden hover:bg-gray-200 p-2 rounded-md'>
                    <BsTextIndentRight size={22} color='#adb5bd' />
                </div>
            </div>
            <hr className='mb-2' />

            <Menu.Item className='font-medium flex items-center active:bg-gray-300' key='home' icon={<MdHome size={22} color='#425a8b' />}>
                Dashboard
            </Menu.Item>

            <Menu.SubMenu className=' font-medium text-[#425a8b]' title="Product" key='bag' icon={<MdShoppingBag size={22} color='#adb5bd' className='' />}>

                <Menu.Item className=' text-[#425a8b]' key='product-1' color='#425a8b' icon={<BsDot size={22} color='#adb5bd' />}>
                    Products 1
                </Menu.Item>
                <Menu.Item className=' text-[#425a8b]' key='product-2' color='#425a8b' icon={<BsDot size={22} color='#adb5bd' />}>
                    Products 2
                </Menu.Item>
                <Menu.Item className=' text-[#425a8b]' key='product-3' color='#425a8b' icon={<BsDot size={22} color='#adb5bd' />}>
                    Products 3
                </Menu.Item>
                <Menu.Item className=' text-[#425a8b]' key='product-4' color='#425a8b' icon={<BsDot size={22} color='#adb5bd' />}>
                    Products 4
                </Menu.Item>

            </Menu.SubMenu>

            <Menu.SubMenu className='font-medium  text-[#425a8b]' key='order' title="Orders" icon={<MdShoppingCart size={22} color='#adb5bd' />}>
                <Menu.Item className='font-medium text-[#425a8b]' key='cart-1' icon={<BsDot size={22} color='#adb5bd' />}>
                    Orders 1
                </Menu.Item>
                <Menu.Item className='font-medium text-[#425a8b]' key='cart-2' icon={<BsDot size={22} color='#adb5bd' />}>
                    Orders 2
                </Menu.Item>
                <Menu.Item className='font-medium text-[#425a8b]' key='cart-3' icon={<BsDot size={22} color='#adb5bd' />}>
                    Orders 3
                </Menu.Item>
            </Menu.SubMenu>

            <Menu.SubMenu className='font-medium text-[#425a8b]' key='seller' title="Sellers" icon={<FaShop size={22} color='#adb5bd' />}>
                <Menu.Item className='font-medium text-[#425a8b]' key='seller-1' icon={<BsDot size={22} color='#adb5bd' className='relative top-1' />}>
                    Sellers india
                </Menu.Item>
                <Menu.Item className='font-medium text-[#425a8b]' key='seller-2' icon={<BsDot size={22} color='#adb5bd' className='relative top-1' />}>
                    Sellers USA
                </Menu.Item>
                <Menu.Item className='font-medium text-[#425a8b]' key='seller-3' icon={<BsDot size={22} color='#adb5bd' className='relative top-1' />}>
                    Sellers Arabs
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item className='font-medium flex items-center text-[#425a8b]' key='add' icon={<MdAddBox size={22} color='#adb5bd' className='relative top-1' />}>
                Add product
            </Menu.Item>
            <Menu.Item className='font-medium flex items-center text-[#425a8b]' key='dollar' icon={<AiFillDollarCircle size={22} color='#adb5bd' className='relative top-1' />}>
                Transactions
            </Menu.Item>
            <Menu.SubMenu className='font-medium text-[#425a8b]' key='user' title="User" icon={<FaUser size={22} color='#adb5bd' />}>
                <Menu.Item className='font-medium text-[#425a8b]' key='sign' icon={<BsDot size={22} color='#adb5bd' />}>
                    Signup
                </Menu.Item>
                <Menu.Item className='font-medium text-[#425a8b]' key='log' icon={<BsDot size={22} color='#adb5bd' />}>
                    Login
                </Menu.Item>
                <Menu.Item className='font-medium text-[#425a8b]' key='out' icon={<BsDot size={22} color='#adb5bd' />}>
                    Logout
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item className='font-medium flex items-center text-[#425a8b]' key='review' icon={<MdMessage size={22} color='#adb5bd' className='relative top-1' />}>
                Reviews
            </Menu.Item>
            <Menu.Item className='font-medium flex items-center text-[#425a8b]' key='star' icon={<MdStars size={22} color='#adb5bd' className='relative top-1' />}>
                Brand
            </Menu.Item>
            <Menu.Item className='font-medium flex items-center text-[#425a8b]' key='stats' icon={<MdPieChart size={22} color='#adb5bd' className='relative top-1' />}>
                Statistics
            </Menu.Item>

            <hr className='my-4' />
            <Menu.Item className='font-medium flex items-center text-[#425a8b]' key='stats' icon={<MdSettings size={22} color='#adb5bd' className='relative top-1' />}>
                Settings
            </Menu.Item>
            <Menu.Item className='font-medium flex items-center text-[#425a8b]' key='stats' icon={<FaTag size={22} color='#adb5bd' className='relative top-1' />}>
                Starter page
            </Menu.Item>

        </Menu>
    )
}

export default MenuList