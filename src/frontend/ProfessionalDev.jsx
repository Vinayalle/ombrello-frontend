import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Header} from './Header'
import {Footer} from './Footer'
export const ProfessionalDev = () => {
    // const [data,setData]=useState([]);
    const [posts,setPosts]=useState([]);
    // const [perpage,setPerpage]=useState([]);

    // useEffect(()=>{
    //     axios.get('http://localhost:4000/experiments/')
    //     .then(res=>
    //       {
    //         setData(res.data);
    //       setPerpage(res.data.slice(0,10));
    //     0
    //     })
    //   },[data])
      
      useEffect(()=>{
        axios.get('http://localhost:4000/posts/')
        .then(res=>
          {
            setPosts(res.data);
        //   setPerpage(res.data.slice(0,10));
        0
        })
      },[posts])
  
  return (
  <>
 

<Header/>

<div className="container">
                           

{
        posts && posts.map((res)=>{
       
          return (
            <>
            

                            <div className="a_box">
                            <div className="row">
                                <div className="col-md-5">
                                    <img src={`http://localhost:4000/uploads/${res.image}`} alt="" className="img-responsive"/>
                                </div>
                                <div className="col-md-7">
                                    <div className="a_text_box">
                                        <h3 className="a_h"> {res.name} </h3>
                                        <p className="a_p"> {res.description}
                                        </p>
                                        <Link to={`/posts/${res._id}`}><button className="a_btn"> Read More </button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
         
       
            
            </>
          
          )
        })

        
      }




</div>
                            
                     
<Footer/>
  </>
  )
}
