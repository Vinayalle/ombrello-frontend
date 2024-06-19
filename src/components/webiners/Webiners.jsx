import { useState } from 'react'
import React from 'react'
import '../../App.css'
import Header from '../../Header'
import Sidebar from '../../Sidebar'
import WebinarTable from './WebinarTable'





  function Webiners(){
    
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className='grid-container'>
    <Header OpenSidebar={OpenSidebar}/>
         <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>

        
         <WebinarTable/>
    </div>
  )
}


export default Webiners