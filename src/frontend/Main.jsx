import React from 'react';
import {Header} from './Header';
import  Home  from './Home';
import  Nav2  from './Nav2';
import { Footer } from './Footer';
import './plugins/css/style.css';
import './plugins/css/main.css';
import './plugins/js/main'
import './style.css'


const Main = () => {
  return (
    <>
    <Header/>
    {/* <Nav2/> */}
    <Home/>
    <Footer/>
    </>
  )
}

export  default Main;
