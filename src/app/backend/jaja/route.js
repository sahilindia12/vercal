import { sahill } from "../model/sin"

import { NextResponse } from "next/server"

export const GET = async()=>{

const user= await sahill.findOne({'username':"munnu12"})

    return NextResponse.json({"jsoandata":user})
    }