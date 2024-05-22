import { NextResponse } from "next/server"
import { addd } from "../model/add"
import { db } from "../db"

export const POST=async(req)=>{
    
    // const {_id}= await req.json()


   
    

    const add= await addtt.findById("66485ca6d835b0cb4285e450")

    return NextResponse.json(add)
}