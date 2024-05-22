'use client'

import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';



function page() {

  
 const [sname, setname] = useState();
 const [address, setaddress] = useState();

 const [subject, setsub] = useState();
 console.log(address,subject,sname);


 const api=async()=>{

  if (!sname|| !subject|| !address) {
    toast.warning("not send datda")
  }
  else{
    const call= await   axios.post("http://localhost:3001/backend/add",{sname,subject,address })
  console.log(call.data);

  toast.success("singup")
  }
 }
  return (
    <div>


        <h1>add your todoo list </h1>






        <form className=' px-4 mx-[23vw] bg-red-300'>
  <div class="mb-3 ">
    <label for="exampleInputEmail1" class="form-label">name</label>
    <input onChange={(e)=>setname(e.target.value)} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/> <span>{sname?null:<span className=' text-2xl  text-red-500'>plsee inter your username</span>}</span>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3 ">
    <label for="exampleInputEmail1" class="form-label">address</label>
    <input onChange={(e)=>setaddress(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/><span>{subject?null:<span className=' text-2xl  text-red-500'>plsee inter your username</span>}</span>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">subject</label>
    <input onChange={(e)=>setsub(e.target.value)} type="text" class="form-control" id="exampleInputPassword1"/><span>{address?null:<span className=' text-2xl  text-red-500'>plsee inter your username</span>}</span>
  </div>
 
  
 
</form>

       <div  className=' my-4 flex justify-center'><button onClick={()=>api()}>add task</button></div>
    </div>
  )
}

export default page