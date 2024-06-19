import { useState } from 'react'
import React from 'react'
import '../../App.css'
import Header from '../../Header'
import Sidebar from '../../Sidebar'
import PostTable from './PostTable'





  function Posts(){
    
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className='grid-container'>
    <Header OpenSidebar={OpenSidebar}/>
         <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>

        
         <PostTable/>
    </div>
  )
}


export default Posts