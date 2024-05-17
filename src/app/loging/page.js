
'use client'
import React from 'react'
import { toast } from 'react-toastify'

function page() {
  return (
    <div>

    <form className=' mx-[33vw]'>
    
      <div class="mb-3 ">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1"/>
      </div>
     
      
     
    </form>
    <div className=' flex justify-center'> <button  onClick={()=>toast.success("singup is successfulyy")} type='text' class="btn btn-primary">Submit</button></div>
            <h1 className=' text-3xl bg-red-500'>this is singup page woring with sahil inda</h1>
        </div>
  )
}

export default page