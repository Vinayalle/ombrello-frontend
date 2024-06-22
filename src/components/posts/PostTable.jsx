import Table from 'react-bootstrap/Table';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Pagination from '../Pagination';
import axios from 'axios';





function PostTable() {
  const [data,setData]=useState([]);
  const [perpage,setPerpage]=useState([]);
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_BASE_URL}posts/`)
    .then(res=>
      {
        setData(res.data);
      setPerpage(res.data.slice(0,10));
    0
    })
  },[data])

  const deletePost = (postId) => {
    if (confirm("Are you sure you want to delete?")) {
      axios.delete(`${import.meta.env.VITE_API_BASE_URL}posts/${postId}`)
        .then(res => {
          setData(data.filter(post => post._id !== postId));
          alert("Deleted successfully");
        })
        .catch(err => {
          console.error("Error deleting the record: ", err);
          alert("There was an error deleting the record.");
        });
    }
  };
  
  // Usage example: assuming this function is called when a delete button is clicked
  // <button onClick={() => deletePost(postId)}>Delete</button>
  


  // useEffect(()=>{
    

    

  //   fetch("http://localhost:4000/experiments/", {
  //           method: "get",
  //           headers: {
  //               "Content-Type": "application/json"
  //           }
  //       })
  //       .then(res => res.json())
  //       .then(res => {
  //         setData(res.data);
  //     setPerpage(res.data.slice(0,10));
  //       })



       
        


  // },[])

  const pageHandler=(pageNumber)=>{
    setPerpage(data.slice((pageNumber*10)-10,pageNumber*10));
  }
  return (
    <section className='main-container'>

      <div className='addBtn'>

        <Link to='addPost'  ><button>Add 
          </button></Link>
       
         
      </div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>Author</th>
           
            <th>image</th>
            <th>likes</th>
            

            <th>Edit</th>
            <th>Delete</th>
            
          </tr>
        </thead>
        <tbody>
          

          {
        perpage && perpage.map((res,i)=>{
          
          return (
            <>
            {i}
            <tr key={res._id}>

            
   <td>{i}</td>
   <td>{res.name}</td>
   <td>{res.authorname}</td>
 
   <td><img src={`${import.meta.env.VITE_API_BASE_URL}uploads/${res.image}`} width="150px" height="80px" /></td>
   
   <td><Link to={`/admin/posts/${res._id}`}><FaRegEdit /></Link></td>
   <td><button onClick={()=>deletePost(res._id)}><RiDeleteBin6Line /></button></td>


</tr>
            
            </>
          
          )
        })

        
      }
          
        </tbody>
      </Table>
      <Pagination data={data} pageHandler={pageHandler}/>
      
     
    </section>
  );
}

export default PostTable;