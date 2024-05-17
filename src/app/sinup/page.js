
'use client'
import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify'

function page() {

  for (let k = 0; k < 111; k++) {
    console.log(k);
    
  }

 const [username, setusername] = useState();
 const [password, setpassword] = useState();
 const [token, settoken] = useState('token coming');
 const [email, setemail] = useState();
 console.log(email,password,username);

console.log(token);
 const api=async()=>{

  if (!username|| !password|| !email) {
    toast.warning("not send datda")
  }
  else{
    const call= await   axios.post("http://localhost:3000/backend/api",{username,password,email})
  console.log(call.data);
  settoken(call.data.token)
  toast.success("singup")
  }
 }
  return (
    <div>

<form className=' mx-[33vw]'>
  <div class="mb-3 ">
    <label for="exampleInputEmail1" class="form-label">User name</label>
    <input onChange={(e)=>setusername(e.target.value)} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/> <span>{username?null:<span className=' text-2xl  text-red-500'>plsee inter your username</span>}</span>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3 ">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input onChange={(e)=>setemail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/><span>{email?null:<span className=' text-2xl  text-red-500'>plsee inter your username</span>}</span>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input onChange={(e)=>setpassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1"/><span>{password?null:<span className=' text-2xl  text-red-500'>plsee inter your username</span>}</span>
  </div>
 
  
 
</form>

{token}
<div className=' flex justify-center'> <button  onClick={()=>api()} type='text' class="btn btn-primary">Submit</button></div>
        <h1 className=' text-3xl bg-red-500'>this is singup page woring with sahil inda</h1>
    </div>
  )
}

export default page