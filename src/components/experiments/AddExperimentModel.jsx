// import { useEffect, useState,useRef } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
// import { IoIosAddCircleOutline } from "react-icons/io";
// import { AdminContext } from '../../contexts/AdminContext';
// import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Row,Col } from 'react-bootstrap';
// import axios from 'axios';

// function AddExperimentModel() {


//     const loggedData=useContext(AdminContext);


// const [file,setFile]=useState(null);
// const [subject,setSubject]=useState();
// const [name,setName]=useState();

// const [description,setDescription]=useState();
// const [videoLink,setVideoLink]=useState();
// const [tags,setTags]=useState([]);
//   const [show, setShow] = useState(false);
//   const navigate=useNavigate();

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const [message,setMessage]=useState({
//     type:"success",
//     text:""
//   })
//   // const [experiments,setExperiments]=useState({
//   //   name:"",
//   //   description:"",
//   //   selectedClass:"",
//   //   subject:subject,
//   //   tags:tags,
//   //   videoLink:"",
//   //   image:file
//   // });

//   const formdata=new FormData();
//   formdata.append('name',name);
//   // formdata.append('selectedClass',selectedClass);
//   formdata.append('subject',subject);
//   formdata.append('tags',tags);
//   formdata.append('description',description);
//   formdata.append('videoLink',videoLink);
//   formdata.append('image',file);

//   function handleInput(e){
//     setExperiments((prevState)=>{
//       return {...prevState,[e.target.name]:e.target.value};
//     })
// }

// const [tag,setTag]=useState();




// // function handleSubject(e){
// //   setSubject(e.target.value);
// //   }


// const submit=async(e)=>{
//   e.preventDefault();
//   const token=localStorage.getItem('ombrello-admin');
//   console.log(loggedData);
//   console.log(formdata);
// //   const formData=new FormData();
// //   formData.append('className',className);

 
// // const token = loggedData.loggedIn.token;
// // `${loggedData.loggedIn.token}`

// // axios.post('http://localhost:4000/experiments/add',{ headers: {"token" : `${token}`} },formdata)
// // .then(res=>console.log(res))
//   const response =await fetch("http://localhost:4000/experiments/add",{
//     method:"POST",
    
//     headers:{
//       "Content-Type":"application/json",
//       "token":`${loggedData.loggedIn.token}`
      
    
//   },
//   body:JSON.stringify(formdata)
// }).then((res)=>res.json())
// .then((data)=>{

//     alert(data.message);
//     setShow(false);
    

// }).catch((err)=>{
//     console.log(err);
// })


 

 


 
  


// }


// const [data,setData]=useState();


//   useEffect(()=>{
    

    

//     fetch("http://localhost:4000/classes/", {
//             method: "get",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })
//         .then(res => res.json())
//         .then(res => {
//           setData(res);
//             console.log(res);
//         })



       
        


//   },[])


//   const [subjects,setSubjects]=useState();


//     useEffect(()=>{
      
  
      
  
//       fetch("http://localhost:4000/subjects/", {
//               method: "get",
//               headers: {
//                   "Content-Type": "application/json"
//               }
//           })
//           .then(res => res.json())
//           .then(res => {
//             setSubjects(res);
//               console.log(res);
//           })
  
  
  
         
          
  
  
//     },[])

//     function changeName(e){
//       e.preventDefault();
//       setName(e.target.value);
//       console.log(name);
//     }
  
// const [selectedClass,setSelectedClass]=useState("");
   

//     function handleClass(e){
//       e.preventDefault();
//       setSelectedClass(e.target.value);
     
      
      
      
      
//       console.log(selectedClass);
      
      
//     }
//     // useEffect(()=>{
//     //   previousInputValue.current = selectedClass;
//     // },[selectedClass])
//     const [sub,setSub]=useState();
    
//     function handleSubject(e){
//       e.preventDefault();
//       setSub(e.target.value);
//       console.log(sub);
      
      
//     }
//     function handleTags(e){
  
//       setTag(e.target.value);
//       console.log(tag);
//       }
//     function handleLink(e){
//       setVideoLink(e.target.value);
//       console.log(videoLink);
      
      
//     }
//     function handleDes(e){
//       setDescription(e.target.value);
//       console.log(description);
      
      
//     }

//     function uploadImage(e){
//       setFile(e.target.files[0]);
//       console.log(file);
//     }

//   return (
//     <>
     
//           <Form onSubmit={submit}>
//             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//               <Form.Label>Experiment Name</Form.Label>
//               <Form.Control
//                 type="text" name="name"
//                 placeholder="enter class Name "
//                 onChange={changeName}
//               />
//             </Form.Group>
//             <select name="selectedClass" id="cars"  onChange={handleClass}>
  
//        {
//         data && data.map((res)=>{
//           var i=0;
//           return (
           
   
  
//            <option value={res.className}>{res.className}</option>


            
           
          
//           )
//         })

        
//       }
// </select>

//             <Row className="mb-3">

              
//             {/* <Form.Group as={Col} controlId="formGridState">
           
//           <Form.Label>select class</Form.Label>
//           <Form.Select defaultValue="Choose..." name="selectedClass"  >
//           <option value=" ">Select Class</option>



//           {
//         data && data.map((res)=>{
//           var i=0;
//           return (
           
   
  
//    <option value={res.className}>{res.className}</option>


            
           
          
//           )
//         })

        
//       }
            
//           </Form.Select>
//         </Form.Group> */}

//         <Form.Group as={Col} controlId="formGridState" >
//           <Form.Label>select subject</Form.Label>
//           <Form.Select defaultValue="Choose..." name="subject"   onChange={handleSubject}>
           
//             {
//      subjects && subjects.map((res)=>{
//           var i=0;
//           return (
           
   
  
//    <option value={res._name}  >{res.name}</option>


            
           
          
//           )
//         })

        
//       }
//           </Form.Select>
//         </Form.Group>

       
//       </Row>
//       <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//         <Form.Label>Description</Form.Label>
//         <Form.Control as="textarea" rows={5} name="description"  onChange={handleDes}/>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//               <Form.Label>Tags</Form.Label>
//               <Form.Control
//                 type="text" name="tags"
//                 placeholder="enter tags "
//                 onChange={handleTags}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//               <Form.Label>videoLink</Form.Label>
//               <Form.Control
//                 type="text" name="videoLink"
//                 placeholder="enter tags "
//                 onChange={handleLink}
//               />
//             </Form.Group>
//       <Form.Group controlId="formFile" className="mb-3">
//         <Form.Label>Upload Image</Form.Label>
//         <Form.Control type="file" name="image" onChange={uploadImage} accept="image"/>
//       </Form.Group>
//             <Button variant="primary"  type="submit">
//             ADD
//           </Button>
           
//           </Form>
       
//     </>
//   );
// }

// export default AddExperimentModel;


import React, { useState,useEffect,useRef } from 'react';
import axios from 'axios';
import { AdminContext } from '../../contexts/AdminContext';
import { useContext } from 'react';
import Header from '../../Header';
import Sidebar from '../../Sidebar';
import JoditEditor from "jodit-react";

const AddExperimentModel = () => {
  const editor = useRef(null);
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

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
    postData.append('shortDescription', formData.shortDescription);
    postData.append('videoLink', formData.videoLink);
    postData.append('likes', 12);
    postData.append('tags', formData.tags);
    postData.append('selectedClass', formData.selectedClass);
    postData.append('subject', formData.subject);
    postData.append('image', formData.image);

    try {
      const response = await axios.post('http://localhost:4000/experiments/add', postData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          "token":`${loggedData.loggedIn.token}`
        }
      });
      console.log(response.data);
      alert("Experiment Added Successfully");
      // Handle success or other actions after API call
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

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


  

  return (
    
    <div className='grid-container'>
    <Header OpenSidebar={OpenSidebar}/>
         <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
         <main className='main-container'>
          <h3 >ADD EXPERIMENT</h3>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
      />

       <label>Description</label>
                             <JoditEditor
                                ref={editor}
                                value={formData.description}

                                onChange={(newContent) => contentFieldChanaged(newContent)}
                            />
       {/* <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleInputChange}
      /> */}
      <input
        type="text"
        name="shortDescription"
        placeholder="shortDescription"
        value={formData.shortDescription}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="videoLink"
        placeholder="Video Link"
        value={formData.videoLink}
        onChange={handleInputChange}
      />
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


<select
        name="selectedClass"
        value={formData.selectedClass}
        onChange={handleInputChange}
      >
        {
     data && data.map((res)=>{
          var i=0;
          return (
           
   
  
   <option value={res.className}  >{res.className}</option>


            
           
          
          )
        })
      }
       
      </select>
      {/* Dropdown for Select Subject */}
      <select
        name="subject"
        value={formData.subject}
        onChange={handleInputChange}
      >
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

export default AddExperimentModel;
