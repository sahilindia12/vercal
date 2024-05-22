import { NextResponse } from "next/server"
import { db } from "../db";
import { sahill } from "../model/sin";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { data } from "../jss";
import { save } from "../model/sinh";


export const GET = async(req)=>{



return NextResponse.json({"jsoandata":data})
}

export const POST = async(req)=>{

        const {username,email,password}= await req.json()

 

db()

console.log(req.json());
    const secret='123wefddg'
    const payload={ 
              "name":username,
              "pass":123456
            }
            const newpas=String(password)
    const passwordd= await bcrypt.hash(newpas,10)
    
    const options = { expiresIn: '4000000' };
    const token= jwt.sign(payload, secret, options);

const user= await save.create({username,"password":passwordd,email})
   const data=await user.save()
    return NextResponse.json({"fsdf":"dsfsd","data":data,'token':token})
    }

