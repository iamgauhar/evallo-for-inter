import React from 'react'

const LanguageTab = () => {
  return (
    <>
            <div className='bg-white shadow-md rounded-sm absolute right-24 top-16'>
                <ul className='py-2'>
                    <li className='flex items-center px-4 pr-12 py-1 hover:bg-gray-50 cursor-pointer gap-2'>
                        <div className='w-5 h-5 rounded-full overflow-hidden'>
                            <img className='object-cover w-full h-full' src="https://th.bing.com/th?id=OIP.nmPZhvg2mDsOnkmEsxQsEQAAAA&w=80&h=80&c=1&vt=10&bgcl=74f507&r=0&o=6&dpr=2&pid=5.1" alt="" />
                        </div>
                        <a className='text-sm' href="!#">English</a>
                    </li>
                    <li className='flex items-center px-4 py-1 hover:bg-gray-50 cursor-pointer gap-2'>
                    <div className='w-5 h-5 rounded-full overflow-hidden'>
                            <img className='object-cover w-full h-full' src="https://upload.wikimedia.org/wikipedia/commons/6/62/Flag_of_France.png" alt="" />
                        </div>
                        <a className='text-sm' href="!#">Français</a>
                    </li>
                    <li className='flex items-center px-4 py-1 hover:bg-gray-50 cursor-pointer gap-2'>
                    <div className='w-5 h-5 rounded-full overflow-hidden'>
                            <img className='object-cover w-full h-full' src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/250px-Flag_of_Japan.svg.png" alt="" />
                        </div>
                        <a className='text-sm' href="!#">日本国</a>
                    </li>
                    <li className='flex items-center px-4 py-1 hover:bg-gray-50 cursor-pointer gap-2'>
                    <div className='w-5 h-5 rounded-full overflow-hidden'>
                            <img className='object-cover w-full h-full' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/250px-Flag_of_the_People%27s_Republic_of_China.svg.png" alt="" />
                        </div>
                        <a className='text-sm' href="!#">中国中</a>
                    </li>
                    
                </ul>
            </div>
        </>
  )
}

export default LanguageTab