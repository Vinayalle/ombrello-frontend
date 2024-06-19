import React from 'react'
import { UserContext } from '../contexts/UserContext';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

function PrivateUser(props) {
const userloggedData=useContext(UserContext);



  return (
    userloggedData.userloggedIn!==null?<props.Component/>:<Navigate to="/user/login" />
  )
}

export default PrivateUser