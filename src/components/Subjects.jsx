import { useState,useEffect } from 'react'
import React from 'react'
import '../App.css'
import Table from 'react-bootstrap/Table';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Header from '../Header'
import Sidebar from '../Sidebar'

import axios from 'axios';




  function Subjects(){
    const [data,setData]=useState();


    useEffect(()=>{
      
  
      
  
      fetch(`${import.meta.env.VITE_API_BASE_URL}subjects/`, {
              method: "get",
              headers: {
                  "Content-Type": "application/json"
              }
          })
          .then(res => res.json())
          .then(res => {
            setData(res);
              console.log(res);
          })
  
  
  
         
          
  
  
    },[])

    // const deleteSubject=(subjectId)=>{
  


    //   axios.delete(`http://localhost:4000/subjects/${subjectId}`)
    //   .then(res=>
    //     {
    //       setData(data.filter(exp=>exp._id!==subjectId));
    //       confirm("Are you sure want to delete?");
    //     alert("deleted Successfully");
      
    //   })
    
    //     }
    const deleteSubject = (subjectId) => {
      if (confirm("Are you sure you want to delete?")) {
        axios.delete(`${import.meta.env.VITE_API_BASE_URL}subjects/${subjectId}`)
          .then(res => {
            setData(data.filter(subject => subject._id !== subjectId));
            alert("Deleted successfully");
          })
          .catch(err => {
            console.error("Error deleting the record: ", err);
            alert("There was an error deleting the record.");
          });
      }
    };
    
    // Usage example: assuming this function is called when a delete button is clicked
    // <button onClick={() => deleteSubject(subjectId)}>Delete</button>
    


    
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className='grid-container'>
    <Header OpenSidebar={OpenSidebar}/>
         <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>

        
         <section className='main-container'>
         <h3 className='text-center'>Subjects</h3>
         <div className='addBtn'>
      <Link to='/admin/subjects/addSubject'  ><button>Add Subject
          </button></Link>

       
       
         
      </div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>subject Name</th>
            {/* <th>Edit</th> */}
            <th>Delete</th>
            
          </tr>
        </thead>
        <tbody>
          

          {
        data && data.map((res,i)=>{
      
          return (
            <>
            <tr>

            
<td>{i+1}</td>
<td>{res.name}</td>
{/* <td><Link to={res._id}><FaRegEdit /></Link></td> */}
<td><button onClick={()=>deleteSubject(res._id)}><RiDeleteBin6Line /></button></td>


</tr>
            
            </>
          
          )
        })

        
      }
          
        </tbody>
      </Table>
      
     
    </section>
    </div>
  )
}


export default Subjects