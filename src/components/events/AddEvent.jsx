


import React, { useState,useEffect,useRef } from 'react';
import axios from 'axios';
import { AdminContext } from '../../contexts/AdminContext';
import { useContext } from 'react';
import Header from '../../Header';
import Sidebar from '../../Sidebar';
import JoditEditor from "jodit-react"

const AddEvent = () => {
  const editor = useRef(null);
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  const loggedData=useContext(AdminContext);
  


  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date:null,
    organizer:'',
    location:'',
   status: '',
    
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
  const contentFieldChanaged = (data) => {

    setFormData({ ...formData, 'description': data });
    console.log(formData.description);


}

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = new FormData();
    postData.append('name', formData.name);
    postData.append('description', formData.description);
    postData.append('date', formData.date);
    postData.append('organizer', formData.organizer);
    postData.append('location', formData.location);
    postData.append('status', formData.status);
    
    
    postData.append('image', formData.image);

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}events/add`, postData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          "token":`${loggedData.loggedIn.token}`
        }
      });
      console.log(response.data);
      alert("event Added Successfully");
      // Handle success or other actions after API call
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  const [data,setData]=useState();


  useEffect(()=>{
    

    

    fetch(`${import.meta.env.VITE_API_BASE_URL}author/authors`, {
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
          <h3 >ADD POST</h3>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
      />
     
      <input
        type="date"
        name="date"
        placeholder="date"
        value={formData.date}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="location"
        placeholder="location"
        value={formData.location}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="organizer"
        placeholder="organizer"
        value={formData.organizer}
        onChange={handleInputChange}
      />
      {/* <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleInputChange}
      /> */}
      {/* <JoditEditor
                                ref={editor}
                                
                                name="description"
                                value={formData.description}
        onChange={handleInputChange}
                            /> */}
                             <JoditEditor
                                ref={editor}
                                value={formData.description}

                                onChange={(newContent) => contentFieldChanaged(newContent)}
                            />
     
      
      {/* <input
        type="text"
        name="selectedClass"
        placeholder="Selected Class"
        value={formData.selectedClass}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="subject"
        placeholder="Select Subject"
        value={formData.subject}
        onChange={handleInputChange}
      /> */}


<select
        name="status"
        value={formData.status}
        onChange={handleInputChange}
      >
     
     <option value="upcoming"  >select status</option>
   
     <option value="upcoming"  >completed</option>
   <option value="upcoming"  >upcoming</option>


            
           
        
       
      </select>
      {/* Dropdown for Select Subject */}
      
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

export default AddEvent;
