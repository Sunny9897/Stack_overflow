import React from 'react'
import LoginHistoty from './LoginHistoty'
import LeftSidebar from '../../component/LeftSidebar/LeftSidebar'
import '../../App.css'

const LoginDetail = () => {
  return (
    <div className='home-comtainer-1'>
    <LeftSidebar/>
  
  <div className='home-container-2'>
  <LoginHistoty/>

  </div>
  
  
  </div>
  )
}

export default LoginDetail