import React from 'react'
import { cookies } from 'next/headers'
export default function page() {

    const cookieStore = cookies()
    const token = cookieStore.get('cook1')
    console.log('token',token);
  return (
    <div>page
<h1>{`this is to;ken cekan this token ${token.value}`}</h1>
        <h1>cookes page</h1>
    </div>
  )
}
