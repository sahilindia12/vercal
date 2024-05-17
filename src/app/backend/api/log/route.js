import { NextResponse } from "next/server"
import { sahill } from "../../model/sin";
import bcrypt from 'bcrypt';
export const POST =async(req)=>{

    const {email,password}= await req.json()
    console.log(password,email);

    const user= await sahill.findOne({'email':email})

return NextResponse.json({"data":user})

    // try {
    //     const user= await sahill.findOne({'email':email})
    //     if (!user) {
    //         return NextResponse.json({"user":"nto fonut"})
            
    //     }
    //     else{

    //         // const pas= await bcrypt.compare(password,user.password)
    //         // if (!pas) {
    //         //      return NextResponse.status(404).json({'user':"password dont not match"})
    //         // }
    //         // else{
    //         //     return NextResponse.json(user)
    //         // }
    //         return NextResponse.json(user)
    //     }
        
    //   } catch (error) {
    //     return NextResponse.json({'error':error})
    //   }


}