import React from 'react'
import { AdminContext } from '../contexts/AdminContext';
import { useContext,useState } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import axios from 'axios';

export const AddSubject = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
  
    // const loggedData=useContext(AdminContext);
    
  
  
    const [formData, setFormData] = useState({
       name: ''
    
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
   
    
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log('formData:', formData);
      const postData = new FormData();
      postData.append('name', formData.name);

      

  
      try {
        const response = await axios.post('http://localhost:4000/subjects/add', postData, {
          headers: {
            'Content-Type': 'application/json',
          
          }
        });
        console.log(response.data);
        alert("Subject Added Successfully");
        // Handle success or other actions after API call
      } catch (error) {
        console.error('Error adding data:', error);
      }
    }
  
  return (
    <div className='grid-container'>
    <Header OpenSidebar={OpenSidebar}/>
         <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
         <main className='main-container'>
          <h3 >Add Subject</h3>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange }
      />
      
      <button type="submit">Add Subject</button>
    </form>
    </main>
    </div>
  )
}
