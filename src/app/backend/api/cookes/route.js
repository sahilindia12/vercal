const { NextResponse } = require("next/server")
const {headers,cookies} = require("next/headers")
export const GET =async(req)=>{
    const getcok= await req.cookies.get("valie")
    cookies().set("cook1","neanfsn")
// cookies().delete("cook1")

    
return NextResponse.json({"nameco":getcok})
}