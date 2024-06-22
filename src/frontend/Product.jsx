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


export const Product = (props) => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [desc,setDesc]=useState();
  const [price, setPrice] = useState(0);
  const loggedData=useContext(UserContext);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}products/${id}`);
        
        setPost(response.data);
        setDesc(response.data.description);
        setPrice(response.data.price);
        console.log(response.data)

      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchPost();
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
  

  if (!post) return <div>Loading...</div>;

  return (
    <>
       <Header/>
       <div className='ex-container'>
       <h1>{post.name}</h1>
      
      <img src={`${import.meta.env.VITE_API_BASE_URL}uploads/${post.image}`} width="100%" height="550px" />
      {/* <p>{parse(post.description)}</p> */}
      {/* <p dangerouslySetInnerHTML={sanitizeHTML(post.description)}></p> */}
      {/* <RemoveTags textWithTags={post.description}/> */}
      <p
      dangerouslySetInnerHTML={{__html: desc}}
    />
      <p> {post.price}</p>
  
      {/* <button onClick={()=>countLikes(post._id)} ><AiOutlineLike  /></button>
      <p>Views: {post.selectedClass}</p> */}

       </div>
      <Footer/>
    </>
  );
}
