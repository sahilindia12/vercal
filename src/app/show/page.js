'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

function  page () {

 
    const router= useRouter()
    const mosue=()=>{
router.refresh()
        console.log('amuse event');
    }



    const map=[{'name':'sahil india','age':'23'}]

const [api, setapi] = useState([]);
console.log(api);


useEffect(  () => {
   
    const ap=async()=>{
        
        const appi= await axios.post("http://localhost:3001/backend/getapi",{"fsadf":"fsadf"})
        setapi([appi])
     
       }
       ap()
}, []);


console.log("data",api)
    const del=async(id)=>{

   const delte= await axios.post('http://localhost:5000/del',{id})
console.log(delte)
   
    }
     
    const up=async(id)=>{
router.push(`show/${id}`)

     console.log(id)
        
         }  
     
        
  return (
    <div>
{/* {loading?<h1>loading...😍😘🥰</h1>:null} */}
<button onClick={()=>ap()}>call api</button>


{/* {

api?api.map((itme)=>{
  return <>
   <h1>{itme.sname}</h1>
   <h1>{itme.address}</h1>
   <h1>{itme.subject}</h1>
  </>
}):<h2>nhi aya</h2>

} */}



    </div>
  )
}

export default page


