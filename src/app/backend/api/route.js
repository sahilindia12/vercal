import { NextResponse } from "next/server"
import { db } from "../db";
import { sahill } from "../model/sin";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const GET = async(req)=>{



return NextResponse.json({'jfsdfk':"Fsdaf"})
}

export const POST = async(req)=>{

     
db()
    const {username,password,email}= await req.json()
console.log(req.json());
    const secret='123wefddg'
    const payload={ 
              "name":username,
              "pass":123456
            }
            const newpas=String(password)
    const pashas= await bcrypt.hash(newpas,10)
    
    const options = { expiresIn: '4000000' };
    const token= jwt.sign(payload, secret, options);

const user= await sahill.create({username,"password":pashas,email})
   const data=await user.save()
    return NextResponse.json({"fsdf":"dsfsd","data":data,'token':token})
    }

