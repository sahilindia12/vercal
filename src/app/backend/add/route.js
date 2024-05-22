import { NextResponse } from "next/server"
import { addd } from "../model/add"

export const POST=async(req)=>{
    
    const {sname,subject,address}= await req.json()


    
    

    const add= await addd.create({"address":address,"name":sname,"subject":subject})

   
    return NextResponse.json({'dsafasdf':add})
}