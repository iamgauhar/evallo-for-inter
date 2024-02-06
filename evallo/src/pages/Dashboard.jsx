import React from 'react'
import { Layout } from 'antd'
import Navbar from '../components/Navbar'
import StatsCard from '../components/StatsCard'
import MenuList from '../components/MenuList';
import { useUtilityContext } from '../../context/UtilityContext';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';


const { Header, Sider } = Layout;
const Dashboard = () => {
  const { fullSidebar, setFullSidebar, mobileSidebar, setMobileSidebar } = useUtilityContext()
  return (
    <>
      <div className='flex sm:h-screen'>

        <Layout className={`${mobileSidebar ? "left-0" : "left-[-100%]"} fixed top-0 sm:left-0 z-50 transition-all`}>
          <Sider width={300} collapsed={fullSidebar} collapsible trigger={null}>
            {/* <Sider className='fixed' style={{ overflow: 'auto', height: '100vh', left: 0, top: 0, bottom: 0 }} width={300} collapsed={fullSidebar} collapsible trigger={null}> */}
            <MenuList />
          </Sider>
        </Layout>
        <div className={`w-full ml-0 ${fullSidebar ? "sm:ml-[79px]" : "sm:ml-[300px]"}`}>
          <Navbar />
          <div className='p-2 sm:p-7 bg-gray-100'>
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
            <div className=' grid grid-cols-3 grid-rows-2 gap-6'>
              <div className='bg-white h-fit col-span-3 md:col-span-2 row-span-3 p-5 border rounded-xl hover:-translate-y-1 transition-all duration-500'>
                <h3 className='font-bold text-gray-700 pb-2'>Sale statistics</h3>
                <LineChart />
              </div>
              <div className='bg-white h-fit col-span-3 md:col-span-1 row-span-2 p-5 border rounded-xl hover:-translate-y-1 transition-all duration-500'>
                <h3 className='font-bold text-gray-700 pb-2'>Revenue Base on Area</h3>
                <BarChart />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Dashboard