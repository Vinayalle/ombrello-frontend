import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Header} from './Header'
import {Footer} from './Footer'
import { AiOutlineLike } from "react-icons/ai";
import { UserContext } from '../contexts/UserContext';
import { useContext } from 'react';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';
import RemoveTags from './RemoveTags';
import { Link } from 'react-router-dom';


export const Event = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [desc,setDesc]=useState();
    const [location, setLocation] = useState(null);
    const loggedData=useContext(UserContext);
    useEffect(() => {
      const fetchEvent = async () => {
        try {
          const response = await axios.get(`http://localhost:4000/events/${id}`);
          
          setEvent(response.data);
          setDesc(response.data.description);
          setLocation(response.data.location);
          console.log(response.data)
  
        } catch (error) {
          console.error('Error fetching post:', error);
        }
      };
  
      fetchEvent();
    }, []);
  
  
    
  //   const countLikes=async (experimentId)=>{
    
  //       try {
  //         const response =await axios.patch(`http://localhost:4000/experiments/${experimentId}/like`,null,
  //         {
  //           headers: {
              
  //             "token":`${loggedData.userloggedIn.token}`
  //           }
  //         }
  //       );
  
  //         setLikes(likes + 1);
          
  //           alert("Post Liked Successfully")
          
         
        
  //       } catch (error) {
  //         alert("already liked the post");
  //       }
  
      
     
  //     };
    
  
    if (!event) return <div>Loading...</div>;
  
    return (
      <>
         <Header/>
         <br/>
         <div className='ex-container'>
         <h1>{event.name}</h1>
        
        <img src={`http://localhost:4000/uploads/${event.image}`} width="100%" height="550px" />
        {/* <p>{parse(post.description)}</p> */}
        {/* <p dangerouslySetInnerHTML={sanitizeHTML(post.description)}></p> */}
        {/* <RemoveTags textWithTags={post.description}/> */}
        <div
        dangerouslySetInnerHTML={{__html: desc}}
      />
        <p> {event.description}</p>
        {/* <button onClick={()=>countLikes(post._id)} ><AiOutlineLike  /></button>
        <p>Views: {post.selectedClass}</p> */}
   <Link to='/webiner-register'><a className="button b_t_hb" href="">Register»</a></Link>
         </div>
        
         <br/>
         <Footer/>
        
      </>
    )
}

