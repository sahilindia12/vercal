
'use client'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../rkt/sli'
import { useGetPostsQuery } from '../rkt/query';



function page() {
  useEffect(() => {
    const {isError,isLoading,data}=useGetPostsQuery
    console.log(data,isError,isLoading);
  }, []);

    const dis=useDispatch()
  return (
    <div>page
<button>use basaquery</button>
        <button onClick={()=>dis(increment("this is payload lo lello"))}>dis</button>
    </div>
  )
}

export default page