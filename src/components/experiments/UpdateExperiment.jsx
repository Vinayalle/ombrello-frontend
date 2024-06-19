import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AdminContext } from '../../contexts/AdminContext';
import { useContext } from 'react';
import Header from '../../Header';
import Sidebar from '../../Sidebar';
import { useNavigate } from 'react-router-dom';
const UpdateExperiment = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  };

  const navigate = useNavigate();

    const { experimentId } = useParams();

    const loggedData=useContext(AdminContext);
  
    

    const [formData, setFormData] = useState({
      name: '',
      description: '',
      shortDescription:'',
      videoLink: '',
      tags: '',
      likes:'',
      selectedClass: '',
      subject: '',
      image: null
    });
  useEffect(() => {
    // Fetch the experiment data to populate the form
    axios.get(`http://localhost:4000/experiments/${experimentId}`)
      .then(response => {
        setFormData(response.data);
      })
      .catch(error => {
        console.error('Error fetching experiment data:', error);
      });
  }, []);

  // const handleChange = e => {
  //   setExperimentData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  // const handleFileChange = e => {
  //   setFile(e.target.files[0]);
  // };

//   const handleSubmit = async (e)=> {
//     e.preventDefault();

//     try {
//       const formData = new FormData();
//       formData.append('name', experimentData.name);
//       formData.append('description', experimentData.description);
//       formData.append('selectedClass', experimentData.selectedClass);
//       formData.append('subject', experimentData.subject);
//       formData.append('tags', experimentData.tags);
//       formData.append('likes', experimentData.likes);
//       formData.append('videoLink', experimentData.videoLink);
//       if (file) {
//         formData.append('image', file);
//       }

//       const response=await axios.put(`http://localhost:4000/experiments/${id}`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           "token":`${loggedData.loggedIn.token}`
//         }
//       });
//       console.log(response.data);
//       alert("updated successfully");
//       // Optionally, you can redirect the user or show a success message here
//     } catch (error) {
//       console.error('Error updating experiment:', error);
//     }
//   };

  const [data,setData]=useState();


  useEffect(()=>{
    

    

    fetch("http://localhost:4000/classes/", {
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

  const [sub,setSub]=useState();


    useEffect(()=>{
      
  
      
  
      fetch("http://localhost:4000/subjects/", {
              method: "get",
              headers: {
                  "Content-Type": "application/json"
              }
          })
          .then(res => res.json())
          .then(res => {
            setSub(res);
              console.log(res);
          })
  
  
  
         
          
  
  
    },[])


    const handleInputChange = (e) => {
      const { name, value } = e.target;
      console.log(formData);
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
      console.log(JSON.stringify(formData))
      
        try {
          const postData = new FormData();
          postData.append('name', formData.name);
          postData.append('description', formData.description);
          postData.append('shortDescription', formData.shortDescription);
          postData.append('videoLink', formData.videoLink);
         
          postData.append('tags', formData.tags);
          postData.append('selectedClass', formData.selectedClass);
          postData.append('subject', formData.subject);
          postData.append('image', formData.image);
          // if (file) {
          //   formData.append('image', file);
          // }
      
          const response = await axios.put(`http://localhost:4000/experiments/${experimentId}`, postData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              "token": `${loggedData.loggedIn.token}`
            }
          });
          console.log(response.data);
          alert("updated successfully");
          navigate('/admin/experiments');
        
          // Optionally, you can redirect the user or show a success message here
        } catch (error) {
          console.error('Error updating experiment:', error.response.data);
        }
      };

  return (
    <div className='grid-container'>
    <Header OpenSidebar={OpenSidebar}/>
    <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    <main className='main-container'>
    <form onSubmit={handleSubmit}>
    <label>
        Name: </label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
     
      <label>
        Description:</label>
        <textarea name="description" value={formData.description} onChange={handleInputChange} />
      
      <label>
       short Description:   </label>
        <textarea name="shortDescription" value={formData.shortDescription} onChange={handleInputChange} />
   
        <label>
       video Link:   </label>
      <input
        type="text"
        name="videoLink"
        placeholder="Video Link"
        value={formData.videoLink}
        onChange={handleInputChange}
      />
       <label>
       Tags:   </label>
      <input
        type="text"
        name="tags"
        placeholder="Tags"
        value={formData.tags}
        onChange={handleInputChange}
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

<label>
       select class:   </label>
<select
        name="selectedClass"
        value={formData.selectedClass}
        onChange={handleInputChange}
      >
        <option   >- select class -</option>
        {
     data && data.map((res)=>{
          var i=0;
          return (
           
   
  
   <option value={res.className}  >{res.className}</option>


            
           
          
          )
        })
      }
       
      </select>
      <label>
       select subject:   </label>
      {/* Dropdown for Select Subject */}
      <select
        name="subject"
        value={formData.subject}
        onChange={handleInputChange}
      >
        <option   >- select subject -</option>
        {/* <option value="">Select Subject</option>
        <option value="Mathematics">Mathematics</option>
        <option value="Science">Science</option>
        <option value="History">History</option> */}
        
        {
     sub && sub.map((res)=>{
          var i=0;
          return (
           
   
  
   <option value={res._name}  >{res.name}</option>


            
           
          
          )
        })
      }
      </select>
      <label>
      image:   </label>
      <input
        type="file"
        name="image"
        onChange={handleFileChange}
      />
      


      
      {/* <label>
        Image:
        <input type="file" onChange={handleFileChange} />
      </label> */}
      <button type="submit">Update Experiment</button>
    </form>
    </main>
    </div>
  );
};

export default UpdateExperiment;
