import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import axios  from 'axios';
import { useEffect, useState,useContext } from 'react';
import Model from '../components/Model';
import { useNavigate } from 'react-router-dom';
import {Header} from './Header'
import {Footer} from './Footer'
import { Link } from 'react-router-dom';
import './style.css'



const Register = () => {
const [formData,setFormData]=useState({
    name:"",
    
  email:"",
  password:"",
  phonenumber:"",
  role:""
});
const [err,setErr]=useState("");
const [msg,setMsg]=useState("");
const navigate=useNavigate();


  
//   const [experiment,setExperiment]=useState();
//   const [message,setMessage]=useState({
//     type:"success",
//     text:""
//   })
  

//   useEffect(()=>{
//     fetch("http://localhost:4000/experiments/", {
//             method: "get",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })
//         .then(result => result.json())
//         .then(result => {
//           setExperiment(result);
//             console.log(result);
           
//         })
//   },[])



function handleInput(e){
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  
//   console.log(email);
}


    async function submit(e){
  e.preventDefault();
  

    const postData = new FormData();
    postData.append('name', formData.name);
    postData.append('email', formData.email);
    postData.append('password', formData.password);
    
    postData.append('phonenumber', formData.phonenumber);
    postData.append('role', formData.role);
    console.log(postData);

    try {
      const response = await axios.post('http://localhost:4000/user/register', postData, {
        headers: {
          'Content-Type': 'application/json',
        //   "token":`${loggedData.loggedIn.token}`
        }
      });
      console.log(response.data);
      setMsg(response.data.message);
      alert("Email sent to your mail please check and verify yor mail address");
      // Handle success or other actions after API call
    } catch (error) {
      console.error('Error adding data:', error);
    }
  }


  return (
    <>
    
    <Header/>
   

<Container className='bg-login'>
<Row className='form-row'>
        <Col sm={4}>
        <Form  onSubmit={submit}>
          <h2 className="login-txt">Register</h2>
        

     {/* <p className={message.type}>{message.text}</p> */}
     <Form.Group className="mb-3" controlId="formGridAddress1">
        
        <Form.Control type="text" name="name" placeholder="Enter name" onChange={handleInput} />
      </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress1">
        
        <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleInput} />
      </Form.Group>
     

      <Form.Group className="mb-3" controlId="formGridAddress1">
        
        <Form.Control type="password" name="password" placeholder="Password" onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        
        <Form.Control type="tel" name="phonenumber" placeholder="Enter phone" onChange={handleInput}  />
      </Form.Group>
      <select
        name="role"
        
        onChange={handleInput}
      >
     
     <option value='select_role'  >Select Role</option>  
     <option value='student'  >Student</option>
     <option value='teacher'  >teachert</option>
  


            
           
          
         
       
      </select>


      

      <Button  type="submit" className='btn-2'>
        Register
      </Button>
      <p>Already have an Account</p>
    <div className="btns">
   
      <Link to="/user/login" className='btn-2'><span>Log in</span></Link>  
    </div>
    </Form>
{msg && <p className="success">{msg}</p>}
        </Col>
        
      </Row>

      

    

    
    </Container>
    <Footer/>
</>
  )
  
}


export default Register