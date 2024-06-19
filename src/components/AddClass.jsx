import React from 'react'
import { AdminContext } from '../contexts/AdminContext';
import { useContext,useState } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AddClass = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
const navigate=useNavigate();
    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
  
    // const loggedData=useContext(AdminContext);
    
  
  
    const [formData, setFormData] = useState({
      className: ''
    
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
      postData.append('className', formData.className);

      

  
      try {
        const response = await axios.post('http://localhost:4000/classes/add', postData, {
          headers: {
            'Content-Type': 'application/json',
          
          }
        });
        console.log(response.data);
        alert("Class Added Successfully");
        navigate('/subjects')
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
          <h3 >ADD Class</h3>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="className"
        placeholder="Name"
        value={formData.className}
        onChange={handleInputChange }
      />
      
      <button type="submit">Add class</button>
    </form>
    </main>
    </div>
  )
}
