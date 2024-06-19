import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { IoIosAddCircleOutline } from "react-icons/io";
import { AdminContext } from '../contexts/AdminContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


function AddClassModel() {


    const loggedData=useContext(AdminContext);

  const [show, setShow] = useState(false);
  const navigate=useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [message,setMessage]=useState({
    type:"success",
    text:""
  })
  const [classes,setClasses]=useState({
    className:""
  });

  function handleInput(e){
    setClasses((prevState)=>{
      return {...prevState,[e.target.name]:e.target.value};
    })
}



const submit=async(e)=>{
  e.preventDefault();
  
  console.log(loggedData);
//   const formData=new FormData();
//   formData.append('className',className);

 

  const response =await fetch("http://localhost:4000/classes/add",{
    method:"POST",
    
    headers:{
      "Content-Type":"application/json",
      "token":`${loggedData.loggedIn.token}`
      
    
  },
  body:JSON.stringify(classes)
}).then((res)=>res.json())
.then((data)=>{

    alert(data.message);
    setShow(false);
    

}).catch((err)=>{
    console.log(err);
})


 

 


 
  


}
  

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      ADD CLASS<IoIosAddCircleOutline />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD CLASS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Class Name</Form.Label>
              <Form.Control
                type="text" name="className"
                placeholder="enter class Name "
             onChange={handleInput}
              />
            </Form.Group>
            <Button variant="primary"  type="submit">
            ADD
          </Button>
           
          </Form>
        </Modal.Body>
       
      </Modal>
    </>
  );
}

export default AddClassModel;