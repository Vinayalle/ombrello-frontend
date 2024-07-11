import Table from 'react-bootstrap/Table';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';

import Pagination from './Pagination';
// import AddClassModel from './AddClassModel';


function ClassTable() {
  const [data,setData]=useState([]);
  // const [pagedata,setPagedata]=useState([]);
  const [perpage,setPerpage]=useState([]);
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_BASE_URL}classes/`)
    .then(res=>
      {
        setData(res.data);
      setPerpage(res.data.slice(0,10));
    
    })
  },[data])
  const deleteClass=(classId)=>{
    if (confirm("Are you sure you want to delete?")) {
      axios.delete(`${import.meta.env.VITE_API_BASE_URL}classes/${classId}`)
        .then(res => {
          setData(data.filter(exp => exp._id !== classId));
          alert("Deleted successfully");
        })
        .catch(err => {
          console.error("Error deleting the record: ", err);
          alert("There was an error deleting the record.");
        });
    }

    }

  



  


  // useEffect(()=>{
    

    

  //   fetch("http://localhost:4000/classes/", {
  //           method: "get",
  //           headers: {
  //               "Content-Type": "application/json"
  //           }
  //       })
  //       .then(res => res.json())
  //       .then(res => {
  //         setData(res);
  //           console.log(res);
  //       })



       
        


  // },[])

  const pageHandler=(pageNumber)=>{
    setPerpage(data.slice((pageNumber*10)-10,pageNumber*10));
  }
  return (
    <section className='main-container'>

      <h3 className='text-center'>Classes</h3>
        <div className='addBtn'>
      <Link to='/admin/classes/addClass'  ><button>Add Class
          </button></Link>

       
       
         
      </div>

     
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>className</th>
            {/* <th>Edit</th> */}
            <th>Delete</th>
            
          </tr>
        </thead>
        <tbody>
          {
          

          

        perpage && perpage.map((res,i)=>{
          // let i=0;
          return (
            <>
            
            <tr key={res._id}>
            <td>{i+1}</td>
            
   {/* <td>{i+1}</td> */}
   <td>{res.className}</td>
   {/* <td><Link to={res._id}><FaRegEdit /></Link></td> */}
   <td><button onClick={()=>deleteClass(res._id)}><RiDeleteBin6Line /></button></td>


</tr>




{/* {
pagedata.length>=1?
    <div>
      {pagedata.map((res)=><div>{res.className}</div>)}
      </div>

  
} */}
            
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

export default ClassTable;