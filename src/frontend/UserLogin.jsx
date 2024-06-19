import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Axios } from 'axios';
import { useEffect, useState,useContext } from 'react';
import Model from '../components/Model';
import { useNavigate } from 'react-router-dom';
import {UserContext} from '../contexts/UserContext';
import { Link } from 'react-router-dom';
import {Header} from './Header'
import {Footer} from './Footer'

const Login = () => {
const [userCred1,setUserCred1]=useState({
  email:"",
  password:""
});

const navigate=useNavigate();
const userloggedInData=useContext(UserContext);


  
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
  setUserCred1((prevState)=>{
    return {...prevState,[e.target.name]:e.target.value};
  })
  
  console.log(userCred1.email);
}


function submit(e){
  e.preventDefault();
  console.log(userCred1);

  fetch("http://localhost:4000/user/login",{
    method:"POST",
    body:JSON.stringify(userCred1),
    headers:{
      "Content-Type":"application/json"
    
  }
})
.then((res)=>res.json())
.then((data)=>{
 if(data.token!=undefined ){
  console.log(data);
  setMessage({type:"success",text:data.message});
  setTimeout(()=>{
    setMessage({type:"success",text:""});
  },5000)
 
  localStorage.setItem("ombrello-user",JSON.stringify(data));

  userloggedInData.setuserLoggedIn(data);
 
  navigate("/");
 


 }
  
});

}
  return (
    <>
<Header/>
<Container className='bg-login'>
<Row className='form-row'>
        <Col sm={4}>
        <Form  onSubmit={submit}>
          <h2 className="login-txt">User Login</h2>
        

     {/* <p className={message.type}>{message.text}</p> */}
        

        <Form.Group className="mb-3" controlId="formGridAddress1">
        
        <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleInput} />
      </Form.Group>
     

      <Form.Group className="mb-3" controlId="formGridAddress1">
        
        <Form.Control type="password" name="password" placeholder="Password" onChange={handleInput} />
      </Form.Group>

      

      <Button  type="submit" className='btn-2'>
        Login
      </Button>
     
    </Form>
    <p>Already have an Account</p>
    <div className="btns">
    <Link to="/forgot-password" className='fp'>Forgot Password </Link>
      <Link to="/user/register" className='btn-2'><span>Register</span></Link>  
    </div>
     
        </Col>
     
     
        
      </Row>

      

    

    
    </Container>
    <Footer/>
    </>

  )
  
}


export default Login