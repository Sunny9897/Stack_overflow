import React from 'react'
import LeftSidebar from '../../component/LeftSidebar/LeftSidebar'
import RightSidebar from '../../component/RightSidebar/RightSidebar'
import ProductDetails from './ProductDetails'
import '../../App.css'

const Product = () => {
  return (
    <div className='home-comtainer-1'>
      <LeftSidebar/>
    
    <div className='home-container-2'>
    <ProductDetails/>
   <RightSidebar/>

    </div>
    
    
    </div>
  )
}

export default Product