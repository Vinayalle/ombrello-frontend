import Table from 'react-bootstrap/Table';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Pagination from '../Pagination';
import axios from 'axios';





function ProductTable() {
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
  const deleteProduct = (productId) => {
    if (confirm("Are you sure you want to delete?")) {
      axios.delete(`http://localhost:4000/products/${productId}`)
        .then(res => {
          setData(data.filter(product => product._id !== productId));
          alert("Deleted successfully");
        })
        .catch(err => {
          console.error("Error deleting the record: ", err);
          alert("There was an error deleting the record.");
        });
    }
  };
  
  // Usage example: assuming this function is called when a delete button is clicked
  // <button onClick={() => deleteProduct(productId)}>Delete</button>
  


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
      <Link to='addProduct'  ><button>Add Product
          </button></Link>

       
       
         
      </div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>price</th>
           
            <th>image</th>
            
            

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
   <td>{res.price}</td>
 
   <td><img src={`http://localhost:4000/uploads/${res.image}`} width="150px" height="80px" /></td>
   
   <td><Link to={`/admin/products/${res._id}`}><FaRegEdit /></Link></td>
   <td><button onClick={()=>deleteProduct(res._id)}><RiDeleteBin6Line /></button></td>


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

export default ProductTable;