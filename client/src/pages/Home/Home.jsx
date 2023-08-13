import React from 'react'
import LeftSidebar from '../..//component/LeftSidebar/LeftSidebar'
import RightSidebar from '../../component/RightSidebar/RightSidebar'
import HomeMainbar from '../../component/HomeMainbar/HomeMainbar'
import '../../App.css'

const Home = () => {
  return (
    <div className='home-comtainer-1'>
      <LeftSidebar/>
    
    <div className='home-container-2'>
    <HomeMainbar/>
      <RightSidebar/>
       </div>
  
    </div>
  )
}

export default Home