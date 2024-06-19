


import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { AdminContext } from '../../contexts/AdminContext';
import { useContext } from 'react';
import Header from '../../Header';
import Sidebar from '../../Sidebar';

const AddProduct = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  const loggedData=useContext(AdminContext);
  


  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    
    image: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = new FormData();
    postData.append('name', formData.name);
    postData.append('description', formData.description);
    postData.append('price', formData.price);
    
    postData.append('image', formData.image);

    try {
      const response = await axios.post('http://localhost:4000/products/add', postData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          "token":`${loggedData.loggedIn.token}`
        }
      });
      console.log(response.data);
      alert("Product Added Successfully");
      // Handle success or other actions after API call
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  const [data,setData]=useState();


  
//   const [sub,setSub]=useState();


//     useEffect(()=>{
      
  
      
  
//       fetch("http://localhost:4000/subjects/", {
//               method: "get",
//               headers: {
//                   "Content-Type": "application/json"
//               }
//           })
//           .then(res => res.json())
//           .then(res => {
//             setSub(res);
//               console.log(res);
//           })
  
  
  
         
          
  
  
//     },[])


  

  return (
    
    <div className='grid-container'>
    <Header OpenSidebar={OpenSidebar}/>
         <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
         <main className='main-container'>
          <h3 >ADD Product</h3>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleInputChange}
      />
     
      
      <input
        type="number"
        name="price"
        placeholder="price"
        value={formData.price}
        onChange={handleInputChange}
      />
    



      <input
        type="file"
        name="image"
        onChange={handleFileChange}
      />
      <button type="submit">Submit</button>
    </form>
    </main>
    </div>
  );
};

export default AddProduct;
