import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Axios } from 'axios';
import { useEffect, useState,useContext } from 'react';
import Model from './components/Model';
import { useNavigate } from 'react-router-dom';
import {AdminContext} from './contexts/AdminContext'

const Login = () => {
const [userCred,setUserCred]=useState({
  email:"",
  password:""
});

const navigate=useNavigate();
const loggedInData=useContext(AdminContext);


  
  const [experiment,setExperiment]=useState();
  const [message,setMessage]=useState({
    type:"success",
    text:""
  })
  

  useEffect(()=>{
    fetch("http://localhost:4000/experiments/", {
            method: "get",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(result => result.json())
        .then(result => {
          setExperiment(result);
            console.log(result);
           
        })
  },[])

function handleInput(e){
  setUserCred((prevState)=>{
    return {...prevState,[e.target.name]:e.target.value};
  })
  
  console.log(email);
}


function submit(e){
  e.preventDefault();
  console.log(userCred);

  fetch("http://localhost:4000/admin/login",{
    method:"POST",
    body:JSON.stringify(userCred),
    headers:{
      "Content-Type":"application/json"
    
  }
})
.then((res)=>res.json())
.then((data)=>{
 if(data.token!=undefined){
  console.log(data);
  setMessage({type:"success",text:data.message});
  setTimeout(()=>{
    setMessage({type:"success",text:""});
  },5000)
 
  localStorage.setItem("ombrello-admin",JSON.stringify(data));

  loggedInData.setLoggedIn(data);
 
  navigate("/dashboard");
 


 }
  
});

}
  return (

<Container className='bg-login'>
<Row className='form-row'>
        <Col sm={4}>
        <Form  onSubmit={submit}>
          <h2 className="login-txt">Ombrello Admin Login</h2>
        

     <p className={message.type}>{message.text}</p>
        

        <Form.Group className="mb-3" controlId="formGridAddress1">
        
        <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleInput} />
      </Form.Group>
     

      <Form.Group className="mb-3" controlId="formGridAddress1">
        
        <Form.Control type="password" name="password" placeholder="Password" onChange={handleInput} />
      </Form.Group>

      

      <Button variant="info" type="submit">
        Login
      </Button>
    </Form>

        </Col>
        
      </Row>

      

    

    
    </Container>

  )
  
}


export default Login