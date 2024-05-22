import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

// This function can be marked `async` if using `await` inside
export function middleware(request) {

  

    const cookieStore = cookies()
    const token = cookieStore.get('cook1')
    console.log('token',token);
if (!token) {
    return NextResponse.redirect(new URL('/sinup', request.url))
}
else{
   
}
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/show/:path*',
}