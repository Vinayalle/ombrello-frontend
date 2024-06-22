import React from 'react';
import { useEffect,useState } from 'react';
import Logo from'./images/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './plugins/css/style.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
export const Header = () => {
const [name,setName]=useState(null);
  const loggedData=useContext(UserContext);
  // console.log(loggedData.userloggedIn.token);
  useEffect(()=>{
    // console.log(loggedData.userloggedIn);
    // console.log(loggedData.userloggedIn.user.name);
    if(loggedData.userloggedIn){
      setName(loggedData.userloggedIn.user.name);
    }else{
      setName(null);
    }
   
    
  },[])

  const navigate=useNavigate();

  function logout(){
    localStorage.removeItem('ombrello-user');
    alert("logged out successfully");
    setName(null);
    navigate('/');
  }
  

  return (
  
    <div id="wrapper">

<div id="top_bar">
    <div className="container">
        <div className="row">
            <div className="col-md-3">
                <a href="index.html">
                    <img src={Logo} className="img-responsive" id="logo" />
                </a>
            </div>
            <div className="col-md-5">
                <form className="search_form">
                    <div className="pseudo-search">
                        <input type="text" placeholder="Search..." autofocus required />
                        <button className="fa fa-search" type="submit"></button>
                    </div>
                </form>
            </div>
            <div className="col-md-4">
                <ul className="top_phone_mail pull-right">
                    <li> 
                      {name!=null?name:<Link to="./user/login" >Login</Link>} 
                      </li>
                      
                    
                       
{/* <li><Link to="http://localhost:5173/user/register" >Join Ombrello</Link> </li>
                    <li><a href=""> Reniew Membership </a> </li> */}
                     
                      
                    
                        
                      
                    <li><Link to="./user/register" >Join Ombrello</Link> </li>
                    
                    {name!=null? <button onClick={logout} className='m-2'>Logout</button>:' '} 
                 
                </ul>
            </div>
        </div>
    </div>
</div>


<Navbar expand="lg" className="bg nav-bg">
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto men">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/class-resources">Classroom Resources</Nav.Link>
            <Nav.Link href="/professional-development">Professional Development </Nav.Link>
            <Nav.Link href="#link">Products & Services</Nav.Link>
            <Nav.Link href="#link">Get Involved</Nav.Link>
            <Nav.Link href="/about-us">About Us</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</div>


  )
}
