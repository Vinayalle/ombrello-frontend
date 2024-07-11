import Table from 'react-bootstrap/Table';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Pagination from '../Pagination';
import axios from 'axios';





function WebinerTable() {
  const [data,setData]=useState([]);
//   const count=0;
const [count,setCount]=useState(0);
  const [perpage,setPerpage]=useState([]);
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_BASE_URL}webinars`)
    .then(res=>
      {
        setData(res.data);
        console.log(res.data);
      setPerpage(res.data.slice(0,10));
    0
    })
  },[data])

  const deleteEvent=(webinerId)=>{
  



      axios.delete(`${import.meta.env.VITE_API_BASE_URL}webiners/${webinerId}`)
      .then(res=>
        {
          setData(data.filter(exp=>exp._id!==webinerId));
          confirm("Are you sure want to delete?");
        alert("deleted Successfully");
      
      })
      
    


  }


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
 <h3 className='text-center'>Webinar Registrations</h3>
      {/* <div className='addBtn'>

        <Link to='addEvent'  ><button>Add 
          </button></Link>
       
         
      </div> */}
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>email</th>
           
            <th>phone</th>
            <th>event</th>
            

            
            {/* <th>Delete</th> */}
            
          </tr>
        </thead>
        <tbody>
          

          {
           
        perpage && perpage.map((res,i)=>{
        //   var i=0;
        // setCount(count+1);
       
          return (
            <>
          
            <tr key={res._id}>
                <td>{i+1}</td>

            
 
   <td>{res.name}</td>
   <td>{res.email}</td>
   <td>{res.phonenumber}</td>
   <td>{res.event}</td>
 
   {/* <td><img src={`http://localhost:4000/uploads/${res.image}`} width="150px" height="80px" /></td>
   <td>{res.location}</td> */}
 
   
   {/* <td><Link to={`/admin/events/${res._id}`}><FaRegEdit /></Link></td> */}
   {/* <td><button onClick={()=>deleteEvent(res._id)}><RiDeleteBin6Line /></button></td> */}


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

export default WebinerTable;