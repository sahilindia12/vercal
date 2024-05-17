
// 'use client'
import Link from 'next/link'
import React from 'react'
import { toast } from 'react-toastify'

function page() {

  console.log(process.env.APIKEY);
  return (
    <div>page


<Link href={'/sinup'}>go other page</Link>
      {/* <button onClick={()=>toast.success("this is react jtoasgy")}>click toastify</button> */}
    </div>
  )
}

export default page