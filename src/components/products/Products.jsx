import { useState } from 'react'
import React from 'react'
import '../../App.css'
import Header from '../../Header'
import Sidebar from '../../Sidebar'
import ProductTable from './ProductTable'





  function Products(){
    
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className='grid-container'>
    <Header OpenSidebar={OpenSidebar}/>
         <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>

        
         <ProductTable/>
    </div>
  )
}


export default Products