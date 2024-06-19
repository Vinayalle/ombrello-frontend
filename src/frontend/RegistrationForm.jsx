// RegistrationForm.js
import React, { useState } from 'react';

import axios from 'axios';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [otp, setOtp] = useState('');
  const [verificationId, setVerificationId] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  // const [ver,setVer]=useState(false);


  const handleSendOTP = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/send-otp', { mobile });
      setVerificationId(response.data.verificationId);
      setOtpSent(true);
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  const handleVerifyOTP = async () => {
    try {
        const response = await axios.post('http://localhost:4000/api/verify-otp', { mobile, otp });
        alert(response.data.message);
        // setVer(true);
        
    
      // Handle successful verification
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Make API call to register user with name and mobile number
    try {
      await axios.post('/api/register', { name, mobile });
      // Handle successful registration
     
      alert(response.data.message);

    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div  className=" container user-register">

    
    <form onSubmit={handleSubmit}>
    <h2>User Register</h2>
      <input type="text" placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="password" placeholder="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      
      {/* <select
        name="role"
        
        onChange={(e) => setRole(e.target.value)}
      >
     
     <option value='select_role'  >Select Role</option>  
     <option value='student'  >Student</option>
     <option value='teacher'  >teachert</option>
  


            
           
          
         
       
      </select> */}

      <input type="tel" placeholder="phonenumber" name="phonenumber" value={mobile} onChange={(e) => setMobile(e.target.value)} />
      <button type="button" onClick={handleSendOTP} disabled={!mobile || otpSent}>
        {otpSent ? 'Resend OTP' : 'Send OTP'}
      </button>
      {
      
      otpSent && (
        <>
          <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
          <button type="button" onClick={handleVerifyOTP}>Verify OTP</button>
        </>
      )}



{/* {
ver && ( */}
  {/* <> */}
      <button type="submit">Register</button>
      {/* </> */}
    {/* )} */}
    </form>
    </div>
  );
};

export default RegistrationForm;
