import { Fragment, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import {Header} from './Header'
import {Footer} from './Footer'
import Success from'./images/th.jpg'

import { SiGoogleclassroom } from "react-icons/si";

export const EmailVerify = () => {
    const [validUrl,setValidUrl]=useState(false);
    const {id,token}=useParams();

    useEffect(()=>{
     
            try{
                const url=`http://localhost:4000/user/${id}/verify/${token}`;
const data= axios.get(url);
console.log(data);
setValidUrl(true);
            }catch(err){
                console.log(err);
                setValidUrl(false);
            }
      
    },[])


  return (
    <>
    <Header/>

 <br/>
    <Fragment>

    {validUrl?(
<div className="container verifyEmail">
    <div className="container d-flex justify-content-center">
    <img src={Success} alt=""  width="80px"/>
 

    </div>
    <div className="container d-flex justify-content-center align-items-center">
    
    <h2 className="p-2 success">Email verified successfully</h2>
  
   

    </div>
    <div className="container d-flex justify-content-center align-items-center">
    

  
    <Link to="/user/login" className='btn-2'><span>Log in</span></Link>  

    </div>
 
 
</div>
    ):(
        <h1>404 not found</h1>
    )}
    </Fragment>
    <br/>
    <Footer/>
    </>
  )
}
