import React, { useState, useEffect, useRef } from 'react'
import ProfileTab from './ProfileTab'
import LanguageTab from './LanguageTab'
import { useUtilityContext } from '../../context/UtilityContext'

function Navbar() {
    const { mobileSidebar, setMobileSidebar, fullSidebar, setFullSidebar } = useUtilityContext()
    const [profieActive, setProfileActive] = useState(false)
    const [langActive, setLangActive] = useState(false)
    let menuTab = useRef()
    let menuLang = useRef()

    useEffect(() => {
        let tabHandler = (e) => {
            if (!menuTab.current.contains(e.target)) {
                setProfileActive(false)
            }

        }

        let secTabHandler = (e) => {
            if (!menuLang.current.contains(e.target)) {
                setLangActive(false)
            }
        }

        document.addEventListener("mousedown", tabHandler)
        document.addEventListener("mousedown", secTabHandler)
    })
    return (
        <div className='border-b flex items-center px-3 sm:px-7 py-3 flex-col-reverse sm:flex-row justify-between z-40'>
            <div>
                <div className='flex items-center bg-gray-100 overflow-hidden rounded '>
                    <div className='py-[2px] pl-[2px]'>
                        <input className='min-w-72 px-5 py-3 text-sm bg-gray-100 rounded-tl rounded-bl border-r focus:outline-none focus:bg-white focus:border-r-white' type="search" placeholder='Search term' />
                    </div>
                    <button className=' hover:text-white hover:bg-[#425a8b] '>
                        <i className='bx bx-search-alt-2 px-6 py-2.5 text-xl text-gray-400 hover:text-white'></i>
                    </button>
                </div>
            </div>
            <div className='w-full flex h-12 gap-4 items-center justify-between mb-2 sm:w-auto sm:mb-0'>
                <div onClick={() => {
                    if (fullSidebar !== false) {
                        setFullSidebar(false)
                    }
                    setMobileSidebar(!mobileSidebar)
                    console.log(mobileSidebar)
                }} className='block sm:hidden p-2 hover:bg-gray-300 cursor-pointer rounded-sm'>
                    <div>
                        <i className='bx bxs-grid text-xl' ></i>
                    </div>
                </div>
                <div className='flex h-12 gap-4 items-center'>
                    <div>
                        <div className='relative hover:cursor-pointer group '>
                            <i className='bx bxs-bell bx-tada text-[20px] text-gray-500 group-hover:text-[#425a8b]' ></i>
                            <span className='absolute -top-2 -right-2 bg-[#425a8b] text-xs text-white h-4 w-4 rounded-full flex justify-center items-center'>3</span>
                        </div>
                    </div>

                    <div>
                        <div className='hover:text-blue-500 cursor-pointer'>
                            <i className='bx bxs-moon text-[20px] text-gray-500 hover:text-[#425a8b]' ></i>
                        </div>
                    </div>
                    <div>
                        <div>
                            <i className='bx bx-cast text-[22px] text-gray-500 cursor-pointer hover:text-[#425a8b]' ></i>
                        </div>
                    </div>
                    <div ref={menuLang}>
                        <div onClick={() => setLangActive(!langActive)} className='cursor-pointer flex items-center gap-[2px]'>
                            <i className='bx bx-world text-[22px] text-gray-500'  ></i>
                            <span><i className='bx bxs-down-arrow text-[10px] text-gray-300'></i></span>
                        </div>
                        {langActive ? <LanguageTab /> : ""}
                    </div>
                    <div className='' ref={menuTab}>
                        <div onClick={() => setProfileActive(!profieActive)} className='flex items-center gap-[2px] cursor-pointer'>
                            <div className='h-10 w-10 rounded-full overflow-hidden border-2 hover:border-[#425a8b]'>
                                <img src="https://wp.alithemes.com/html/ecom/dashboard/assets/imgs/people/avatar2.jpg" alt="" />
                            </div>
                            <span><i className='bx bxs-down-arrow text-[10px] text-gray-300'></i></span>
                        </div>
                        {profieActive ? <ProfileTab /> : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar