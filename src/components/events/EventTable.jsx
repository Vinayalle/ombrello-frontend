import Table from 'react-bootstrap/Table';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Pagination from '../Pagination';
import axios from 'axios';





function EventTable() {
  const [data,setData]=useState([]);
  const [perpage,setPerpage]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:4000/events/')
    .then(res=>
      {
        setData(res.data);
      setPerpage(res.data.slice(0,10));
    0
    })
  },[data])

  // const deleteEvent=(eventId)=>{
  



  //     axios.delete(`http://localhost:4000/events/${eventId}`)
  //     .then(res=>
  //       {
  //         setData(data.filter(exp=>exp._id!==postId));
  //         confirm("Are you sure want to delete?");
  //       alert("deleted Successfully");
      
  //     })
      
    


  // }
  const deleteEvent = (eventId) => {
    if (confirm("Are you sure you want to delete?")) {
      axios.delete(`http://localhost:4000/events/${eventId}`)
        .then(res => {
          setData(data.filter(event => event._id !== eventId));
          alert("Deleted successfully");
        })
        .catch(err => {
          console.error("Error deleting the record: ", err);
          alert("There was an error deleting the record.");
        });
    }
  };


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

        <Link to='addEvent'  ><button>Add 
          </button></Link>
       
         
      </div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>status</th>
           
            <th>image</th>
            <th>location</th>
            

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
   <td>{res.status}</td>
 
   <td><img src={`http://localhost:4000/uploads/${res.image}`} width="150px" height="80px" /></td>
   <td>{res.location}</td>
 
   
   <td><Link to={`/admin/events/${res._id}`}><FaRegEdit /></Link></td>
   <td><button onClick={()=>deleteEvent(res._id)}><RiDeleteBin6Line /></button></td>


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

export default EventTable;