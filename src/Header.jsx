import React from 'react'


import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

function Header ({OpenSidebar}){
  const navigate=useNavigate();

  function logout(){
    localStorage.removeItem('ombrello-admin');
    navigate('/login');
  }
  return (

    <header className='header'>
        
      <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            {/* <BsSearch  className='icon'/> */}
        </div>
        <div className='header-right'>
            {/* <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon'/> */}
        </div>
        <button onClick={logout} className='logout-btn'>Logout</button>
    </header>
    
  )
}

export default Header
