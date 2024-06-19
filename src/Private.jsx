import React from 'react'
import { AdminContext } from './contexts/AdminContext'
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

function Private(props) {
const loggedData=useContext(AdminContext);



  return (
    loggedData.loggedIn!==null?<props.Component/>:<Navigate to="/login" />
  )
}

export default Private