import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import {Header} from './Header'
import {Footer} from './Footer'
import { Link } from 'react-router-dom';

export const ProductsPage = () => {
    const [data,setData]=useState([]);
    const [perpage,setPerpage]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:4000/products/')
        .then(res=>
          {
            setData(res.data);
          setPerpage(res.data.slice(0,10));
        0
        })
      },[data])
  
  return (
  <>
 


<Header/>
<div className="container">
                           

                            {
        perpage && perpage.map((res)=>{
          
          return (
        
            <>
            <div className="col-md-4">
                                {/* <a href="" onClick={()=>deleteExperiment(res._id)}> */}
                                    <div className="cr_box">
                                    <img src={`http://localhost:4000/uploads/${res.image}`} width="100%" height="100%" />
                                        <div className="cr_b_content">
                                        <h3 className="crb_h"><Link to={`/experiments/${res._id}`}>{res.name}</Link></h3>
                                        <h5>{res.price}</h5>
                                        <Link to={`/products/${res._id}`} className='btn-2'><span>Read More</span></Link> 
                                        </div>
                                    </div>
                                {/* </a> */}
                            </div>
         
            
            </>
          
          )
        })

        
      }



</div>
                       <br/>     
         <Footer/>            

  </>
  )
}
