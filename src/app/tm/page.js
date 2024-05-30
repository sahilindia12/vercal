
'use client'
import React, { useState,useEffect } from 'react'

export default function page() {

    const [sec, setsec] = useState();

    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1; // Months are zero-based
    let day = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
   
setInterval(() => {
    let now = new Date();
    let seconds = now.getSeconds();
    setsec(seconds)
}, 1000);

useEffect(() => {
    function art(){

        if (sec=='5') {
           alert("tsrpt") 
           console.log(sec )
        }
        else{
            console.log()
        }
    }
  art()
}, []);
  return (
    <div>
<h1 className=' text-3xl'>

{`day ${day} month ${month} year ${year} hour ${hours} min ${minutes} sec ${sec}`}
</h1>

        <h1>time </h1>
    </div>
  )
}
