import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
export default function Signup() {
    const [credentials,setCredentials]=useState({name:"",password:"",email:"",geolocation:""});
    const handleSubmit=async(e)=>{
         e.preventDefault();
        //  const response=await fetch("http://localhost:5000/api/createuser",{
         const response=await fetch("/api/createuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:credentials.name,password:credentials.password,email:credentials.email,location:credentials.geolocation})
         });
         const json=await response.json();
         console.log(json);
         if(!json.success){
            console.log('Enter valid Credentials')
         }
    }
    const onChange=(event)=>{
        setCredentials({...credentials,[event.target.name]:event.target.value})
    }
  return (
    <div className='container'>
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="name" className="form-label" >Name</label>
      <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange}/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label"  >Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange}/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1"/>
    </div>
    <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
    <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange} id="exampleInputPassword1"/>
  </div>
  
    <button type="submit" className="m-3 btn btn-success">Submit</button>
    <Link to="/login" className='m-3 btn btn-danger'>Aleady a user</Link>
  </form>
    </div>
  )
}
