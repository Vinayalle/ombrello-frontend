import React, { useState, useEffect ,useRef} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AdminContext } from '../../contexts/AdminContext';
import { useContext } from 'react';
import Header from '../../Header';
import Sidebar from '../../Sidebar';
import { useNavigate } from 'react-router-dom';
import JoditEditor from "jodit-react"
const UpdateProduct= () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const editor = useRef(null);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  };

  const navigate = useNavigate();

    const { productId } = useParams();

    const loggedData=useContext(AdminContext);
  
    

    const [formData, setFormData] = useState({
        name: ' ',
        description: ' ',
        price: ' ',
        
        image: null
    });
  useEffect(() => {
    // Fetch the experiment data to populate the form
    axios.get(`http://localhost:4000/products/${productId}`)
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
          postData.append('price', formData.price);
         
          
          postData.append('image', formData.image);
          // if (file) {
          //   formData.append('image', file);
          // }
      
          const response = await axios.put(`http://localhost:4000/products/${productId}`, postData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              "token": `${loggedData.loggedIn.token}`
            }
          });
          console.log(response.data);
          alert("updated successfully");
          navigate('/admin/products');
        
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
        Name:</label>
        <input type="text" name="name" onChange={handleInputChange} value={formData.name} />
      
      {/* <label>
        Description:
        <textarea name="description" value={formData.description} onChange={handleInputChange} />
      </label> */}
      <JoditEditor
                                ref={editor}
                                value={formData.description}

                                onChange={(newContent) => contentFieldChanaged(newContent)}
                            />
      
      <label>
        Price:</label>
      <input
        type="text"
        name="price"
       
        value={formData.price}
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
        Image:</label>
      <input
        type="file"
        name="image"
        onChange={handleFileChange}
      />
      


      
      {/* <label>
        Image:
        <input type="file" onChange={handleFileChange} />
      </label> */}
      <button type="submit">Update Product</button>
    </form>
    </main>
    </div>
  );
};

export default UpdateProduct;
