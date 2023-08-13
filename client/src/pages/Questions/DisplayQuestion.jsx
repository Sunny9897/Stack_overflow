import React from 'react'
import LeftSidebar from '../../component/LeftSidebar/LeftSidebar'
import RightSidebar from '../../component/RightSidebar/RightSidebar'
import Questiondetails from './Questiondetails'

const DisplayQuestion = () => {
  return (
    <div className='home-comtainer-1'>
      <LeftSidebar/>
    
    <div className='home-container-2'>
        <Questiondetails/>
    
      <RightSidebar/>
       </div>
  
    </div>
  )
}

export default DisplayQuestion