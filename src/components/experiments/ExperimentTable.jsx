import Table from 'react-bootstrap/Table';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Pagination from '../Pagination';
import axios from 'axios';





function ExperimentTable() {
  const [data,setData]=useState([]);
  const [perpage,setPerpage]=useState([]);
  const [tags,setTags]=useState();
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_BASE_URL}experiments/home`)
    .then(res=>
      {
        setData(res.data);
      
      setPerpage(res.data.slice(0,10));
    0
    })
  },[data])

  // const deleteExperiment=(experimentId)=>{
  



  //     axios.delete(`http://localhost:4000/experiments/${experimentId}`)
  //     .then(res=>
  //       {
  //         setData(data.filter(exp=>exp._id!==experimentId));
  //         confirm("Are you sure want to delete?");
  //       alert("deleted Successfully");
      
  //     })
      
    


  // }
  const deleteExperiment = (experimentId) => {
    if (confirm("Are you sure you want to delete?")) {
      axios.delete(`${import.meta.env.VITE_API_BASE_URL}experiments/${experimentId}`)
        .then(res => {
          setData(data.filter(exp => exp._id !== experimentId));
          alert("Deleted successfully");
        })
        .catch(err => {
          console.error("Error deleting the record: ", err);
          alert("There was an error deleting the record.");
        });
    }
  };
  
  // Usage example: assuming this function is called when a delete button is clicked
  // <button onClick={() => deleteExperiment(experimentId)}>Delete</button>
  


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
 <h3 className='text-center'>Experiments</h3>
      <div className='addBtn'>

        {/* <Link to='/addExperiment' >Add </Link> */}
        <Link to='/addExperiment'  ><button>Add Experiment
          </button></Link>
       
         
      </div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>class</th>
            <th>subject</th>
            <th>image</th>
            <th>tags</th>
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
            
            <tr key={res._id}>

            
   <td>{i+1}</td>
   <td>{res.name}</td>
   <td>{res.selectedClass}</td>
   <td>{res.subject}</td>
   <td><img src={`${import.meta.env.VITE_API_BASE_URL}uploads/${res.image}`} width="150px" height="80px" /></td>
   <td>{res.tags}</td>
   <td>{res.likes}</td>
   <td><Link to={`/admin/experiments/${res._id}`}><FaRegEdit /></Link></td>
   <td><button onClick={()=>deleteExperiment(res._id)}><RiDeleteBin6Line /></button></td>


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

export default ExperimentTable;