import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs';
 import { AiFillCalendar } from "react-icons/ai";
 import { SiGoogleclassroom } from "react-icons/si";
 import { IoBookSharp } from "react-icons/io5";
 import { FaUsers } from "react-icons/fa";
 import { BsPostcard } from "react-icons/bs";
 import { GiSoapExperiment } from "react-icons/gi";
import { Link } from 'react-router-dom';
 import logo from './assets/logo.png'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id='sidebar' className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
            {/* <BsCart3  className='icon_header'/> SHOP */}

           <Link to="/dashboard"><img src={logo}  width="100%" height="auto"/></Link> 
            </div>
            <span className='icon close_icon' onClick={OpenSidebar} >X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="/dashboard" className="a-link" >
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                   <Link to="/classes" className="a-link"> <SiGoogleclassroom className='icon'/> Classes</Link>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <Link to="/subjects" className="a-link"><IoBookSharp className='icon'/> Subjects</Link>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <Link to="/admin/experiments" className="a-link"><GiSoapExperiment className='icon'/> Experiments</Link>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/admin/products" className="a-link">
                    <BsFillArchiveFill className='icon'/> Products
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/admin/posts" className="a-link">
                    <BsPostcard className='icon'/> Posts
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/admin/events" className="a-link">
                    <AiFillCalendar className='icon'/> Events
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/admin/registeredusers" className="a-link">
                    <FaUsers className='icon'/> Webinar Registrations
                </a>
            </li>
            {/* <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li> */}
        </ul>
    </aside>
  )
}

export default Sidebar
