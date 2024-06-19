
import { useEffect, useState } from 'react'
import React from 'react';
import './App.css';
import { AddClass } from './components/AddClass'
import { AddSubject } from './components/AddSubject';
import Dashboard from './Dashboard'
import Classes from './components/Classes'
import Subjects from './components/Subjects'
import Experiments from './components/experiments/Experiments'
import Posts from './components/posts/Posts'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login'
import Private from './Private'
import AddExperimentModel from './components/experiments/AddExperimentModel'
import AddPost from './components/posts/AddPost'
import UserHome from'./frontend/Main';
import AddProduct from './components/products/AddProduct'
import Products from './components/products/Products'
import UserLogin from './frontend/UserLogin';
import UserRegister from './frontend/UserRegister';
import Filter from './frontend/Filter';
import Webiners from './components/webiners/Webiners';
import WebinarRegister from './frontend/WebinarRegister';
import {ClassRoom} from './frontend/ClassRoom';
import { ProfessionalDev } from './frontend/ProfessionalDev'
import ExperimentDetails from './frontend/ExperimentDetails';
import { About } from './frontend/About'
import { Product } from './frontend/Product';
import ExperimentByCategory from './frontend/ExperimentByCategory'
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import ForgotPassword from './frontend/ForgotPassword'
import {AdminContext} from './contexts/AdminContext';
import {UserContext} from './contexts/UserContext';
import PrivateUser from './frontend/PrivateUser';
import { Experiment } from './frontend/Experiment'
import { Post } from './frontend/Post';
import { Event } from './frontend/Event';
import { EmailVerify } from './frontend/EmailVerify';
import UpdateExperiment from './components/experiments/UpdateExperiment';
import UpdatePost from './components/posts/UpdatePost';
import UpdateProduct from './components/products/UpdateProduct';
import RegistrationForm from './frontend/RegistrationForm';
import UpdateEvent from './components/events/UpdateEvent'
import Events from './components/events/Events'
import AddEvent from './components/events/AddEvent';
import ResetPassword from './frontend/ResetPassword';
import {ProductsPage} from './frontend/ProductsPage';
function App() {
   const [loggedIn,setLoggedIn]=useState(JSON.parse(localStorage.getItem('ombrello-admin')));
   const [userloggedIn,setuserLoggedIn]=useState(JSON.parse(localStorage.getItem('ombrello-user')));
   const navigate=useNavigate();

   

  return (
    <>
      
         <AdminContext.Provider value={{loggedIn,setLoggedIn}}>

         

         
      <Routes>
        {/* <Route path="/" element={< App/>}>
          <Route index element={<Home />} /> */}
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Private Component={Dashboard}/>} />
          <Route path="classes" element={<Private Component={Classes}/>} />
          <Route path="subjects" element={<Private Component={Subjects}/>} />
          <Route path="admin/classes/addClass" Component={AddClass} />
          <Route path="admin/subjects/addSubject" Component={AddSubject} />
          <Route path="/admin/experiments" element={<Private Component={Experiments}/>} />
          <Route path="/admin/experiments/:experimentId" element={<Private Component={UpdateExperiment}/>} />
          <Route path="/admin/posts" element={<Private Component={Posts}/>} />
          <Route path="/admin/registeredusers" element={<Private Component={Webiners}/>} />
          <Route path="/admin/posts/:postId" element={<Private Component={UpdatePost}/>} />
          <Route path="/admin/events" element={<Private Component={Events}/>} />
          <Route path="/admin/events/:eventId" element={<Private Component={UpdateEvent}/>} />
          <Route path="admin/events/addEvent" element={<Private Component={AddEvent}/>} />
          <Route path="addExperiment" element={<Private Component={AddExperimentModel}/>} />
          <Route path="admin/posts/addPost" element={<Private Component={AddPost}/>} />
          <Route path="/admin/products" element={<Private Component={Products}/>} />
          <Route path="/admin/products/:productId" element={<Private Component={UpdateProduct}/>} />
          <Route path="admin/products/addProduct" element={<Private Component={AddProduct}/>} />
         
          {/* <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}

      {/* frontend urls */}
      

      </Routes>
   
    </AdminContext.Provider>

    <UserContext.Provider value={{userloggedIn,setuserLoggedIn}}>
    <Routes>
        
      <Route path="/" element={<UserHome />} />


      <Route path="user/login" element={<UserLogin />} />
      <Route path="user/register" element={<UserRegister />} />
      <Route path="api/register" element={<RegistrationForm />} />
      <Route path="experiments/:id" element={<PrivateUser Component={Experiment}/>} />
      
      <Route path="posts/:id" element={<PrivateUser Component={Post}/>} />
      <Route path="products/:id" element={<PrivateUser Component={Product}/>} />
      <Route path="events/:id" element={<PrivateUser Component={Event}/>} />
      <Route path="/users/:id/verify/:token" element={<EmailVerify />} />

      <Route path="/filter" Component={Filter }/>
      <Route path="/class-resources" Component={ClassRoom }/>
      <Route path="/allproducts" Component={ProductsPage }/>
      <Route path="/about-us" Component={About}/>
      <Route path="/webiner-register" Component={WebinarRegister}/>
      <Route path="/professional-development" Component={ProfessionalDev }/>
      <Route path="/forgot-password" Component={ForgotPassword}/>
          <Route path="/experiment/:className/:subjectName/:experimentName" Component={ExperimentDetails} />
          <Route path="/experiment/:className/:subjectName" Component={ExperimentByCategory} />
          <Route path="/reset-password/:id/:token" Component={ResetPassword} />

      </Routes>

    </UserContext.Provider>

   </>

    
  )
}

export default App
