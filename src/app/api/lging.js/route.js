import { db } from "@/app/backend/db";
import { NextResponse } from "next/server";

export  async function  POST(req){

    db()
const pay= await req.json(req)
console.log(pay)

    return NextResponse.json(pay)
}