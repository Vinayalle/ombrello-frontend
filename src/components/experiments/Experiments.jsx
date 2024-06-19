import { useState } from 'react'
import React from 'react'
import '../../App.css'
import Header from '../../Header'
import Sidebar from '../../Sidebar'
import ExperimentTable from './ExperimentTable'





  function Experiments(){
    
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className='grid-container'>
    <Header OpenSidebar={OpenSidebar}/>
         <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>

        
         <ExperimentTable/>
    </div>
  )
}


export default Experiments