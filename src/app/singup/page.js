
'use client'
import React, { useState } from 'react'

import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function page() {

const [pas, setpas] = useState(true);
    const formik = useFormik({
        initialValues: {
          username: '',
          email: '',
          password:''
        },
        validationSchema: Yup.object({
            username: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('ples inter username'),
            email: Yup.string()
              .email('Invalid email address')
              .required('Required email '),
              password:Yup.number().required("ples password")
          }),
      
        onSubmit:  async(values) => {
    
            const api = await axios.post("http://localhost:3000/api/singup",{values})
        console.log(api.data)
        
        console.log(values)
        toast.success("submit your from")
        },
      });
  return (
    <div>


<h1>this sis  formik an up librey </h1>




<form className=' mx-[33vw] bg-slate-100 p-4 rounded-md' onSubmit={formik.handleSubmit}>
<div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">user name</label>
    <input 
        id="text"
        name="username"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
   class="form-control"  aria-describedby="emailHelp"/>
  </div>
  {formik.touched.username && formik.errors.username ? (
          <div className=' text-red-500'>{formik.errors.username}</div>
        ) : null}
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input
       id="email"
       name="email"
       type="email"
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       value={formik.values.email}
    
    
    class="form-control"  aria-describedby="emailHelp"/>
  </div>
  {formik.touched.email && formik.errors.email ? (
          <div className=' text-red-500'>{formik.errors.email}</div>
        ) : null}
  
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input 
       id="text"
       name="password"
       type={pas?"password":'text'}
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       value={formik.values.password}
    
    
    
    
    
    class="form-control" />
      <button onClick={(e)=>setpas(!pas)}><span>{pas?`show`:`hide`}</span></button>
  </div>

  {formik.touched.password && formik.errors.password ? (
          <div className=' text-red-500'>{formik.errors.password}</div>
        ) : null}
  <button type="submit">Submit</button>
</form>

       
       
    </div>
  )
}
