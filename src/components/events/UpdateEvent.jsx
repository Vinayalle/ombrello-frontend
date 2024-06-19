import React, { useState, useEffect ,useRef} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AdminContext } from '../../contexts/AdminContext';
import { useContext } from 'react';
import Header from '../../Header';
import Sidebar from '../../Sidebar';
import { useNavigate } from 'react-router-dom';
import JoditEditor from "jodit-react"
const UpdateEvent= () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const editor = useRef(null);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  };

  const navigate = useNavigate();

    const { eventId } = useParams();

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
  useEffect(() => {
    // Fetch the experiment data to populate the form
    axios.get(`http://localhost:4000/events/${eventId}`)
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

//   useEffect(()=>{
    

    

// //     fetch("http://localhost:4000/author/authors", {
// //             method: "get",
// //             headers: {
// //                 "Content-Type": "application/json"
// //             }
// //         })
// //         .then(res => res.json())
// //         .then(res => {
// //           setData(res);
// //             console.log(res);
// //         })



       
        


//   },[])


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
    const contentFieldChanaged = (data) => {

        setFormData({ ...formData, 'description': data });
        console.log(formData.description);
    
    
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(JSON.stringify(formData))
      
        try {
          const postData = new FormData();
          postData.append('name', formData.name);
    postData.append('description', formData.description);
    postData.append('date', formData.date);
    postData.append('organizer', formData.organizer);
    postData.append('location', formData.location);
    postData.append('status', formData.status);
    
    postData.append('image', formData.image);
          // if (file) {
          //   formData.append('image', file);
          // }
      
          const response = await axios.put(`http://localhost:4000/events/${eventId}`, postData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              "token": `${loggedData.loggedIn.token}`
            }
          });
          console.log(response.data);
          alert("updated successfully");
          navigate('/admin/events');
        
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

export default UpdateEvent;
