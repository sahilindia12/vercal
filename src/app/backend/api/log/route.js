import { NextResponse } from "next/server"
import { sahill } from "../../model/sin";
import bcrypt from 'bcrypt';
import { save } from "../../model/sinh";
export const POST =async(req)=>{

    const {email,password}= await req.json()
    console.log(password,email);

    const user= await save.findOne({'email':email})

// return NextResponse.json({"data":user})

 try {

    if (!user) {
        return  NextResponse.json({'data':'not found user'})

    }
    else{
        const haipas=  await bcrypt.compare(password,user.password)

        if (!haipas) {
            return  NextResponse.json({'data':'not password user'})

        }
        else{
            return  NextResponse.json({'data':user})

        }
    }
    
 } catch (error) {
    
 }

}