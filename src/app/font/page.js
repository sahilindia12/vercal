// src/app/layout.js


//👇 Import Open Sans font
import { Roboto} from 'next/font/google'


//👇 Configure our font object
import React from 'react'
const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  })
function page() {

  return (
    <div>

        <h1 className={roboto.className}>this is font with google font usees</h1>
    </div>
  )
}

export default page