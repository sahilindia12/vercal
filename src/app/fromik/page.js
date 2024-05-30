
'use client'

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const MyForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password:''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('ples inter name'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
        password:Yup.string().required("ples pas")
    }),
    onSubmit:  async(values) => {

        const api = await axios.get("http://localhost:3000/api/singup")
    console.log(api)
    },
  });

  return (
    <form className=' mx-28 py-5' onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input   className=' py-4'
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input   className=' py-4'
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <label htmlFor="email">password</label>
<input   className=' py-4'
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.email && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
