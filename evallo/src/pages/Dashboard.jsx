import React from 'react'
import { Layout } from 'antd'
import Navbar from '../components/Navbar'
import StatsCard from '../components/StatsCard'
import MenuList from '../components/MenuList';
import { useUtilityContext } from '../../context/UtilityContext';


const { Header, Sider } = Layout;
const Dashboard = () => {
  const { fullSidebar, setFullSidebar, mobileSidebar, setMobileSidebar } = useUtilityContext()
  return (
    <>
      <div className='flex'>

        <Layout className={`${mobileSidebar ? "absolute left-0" : "absolute left-[-100%]"} sm:relative sm:left-0 z-50 transition-all`}>
          <Sider collapsed={fullSidebar} collapsible trigger={null}>
            <MenuList />
          </Sider>
        </Layout>
        <div className='w-full'>
          <Navbar />
          <div className='p-6 bg-gray-100'>
            <div className='flex justify-between items-center flex-wrap'>
              <div>
                <h1 className='text-3xl font-bold text-gray-700 py-5 sm:py-1'>Dashboard</h1>
                <p className='text-sm text-gray-500 py-1'>Whole data about your business here</p>
              </div>
              <div>
                <button className='bg-[#425a8b] px-10 py-2.5 flex items-center gap-2 rounded-[3px]'>
                  <i className='bx bxs-report text-white' ></i>
                  <span className='text-white text-sm font-semibold'>Create report</span>
                </button>
              </div>
            </div>
            <StatsCard />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard