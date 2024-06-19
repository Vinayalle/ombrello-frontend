import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import {Header} from './Header'
import {Footer} from './Footer'

import axios from 'axios';
import { useEffect, useState,useContext } from 'react';
import Model from '../components/Model';
import { useNavigate } from 'react-router-dom';
import {UserContext} from '../contexts/UserContext';

const ForgotPassword = () => {
// const [email,setEmail]=useState();

// axios.post('http://localhost:4000/forgot-password', { email },{
//     headers: {
//       'Content-Type': 'text/plain'
//     }
//   })
//   .then(response => {
//     console.log(response);
//     if (response.data.status === 'success') {
//       navigate('/login');
//     }
//   })
//   .catch(error => console.log(error));



  

const [formData,setFormData]=useState({
   
    
  email:""
  
});

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
      
      postData.append('email', formData.email);
      
      console.log(postData);
  
      try {
        const response = await axios.post('http://localhost:4000/user/forgot-password', postData, {
          headers: {
            'Content-Type': 'application/json',
          //   "token":`${loggedData.loggedIn.token}`
          }
        });
        console.log(response.data);
        // setMsg(response.data.message);
        alert("mail sent success");
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
          <h2 className="login-txt">Forgot-Password</h2>
        

   
        

        <Form.Group className="mb-3" controlId="formGridAddress1">
        
        <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleInput}  />
      </Form.Group>
     

    

      

      <Button className='btn-2' type="submit">
        Send
      </Button>
    </Form>

        </Col>
        
      </Row>

      

    

    
    </Container>
    <Footer/>
    </>
  )
  
}


export default ForgotPassword