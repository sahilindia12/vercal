import { db } from "@/app/backend/db";
import { news } from "@/app/backend/model/news";
import { save } from "@/app/backend/model/sinh";
import { NextResponse } from "next/server";

export  async function  POST(req){

    db()
const {username,password,email} =await req.json()

const sing= await news.create({})
sing.save()
console.log(username)

    return NextResponse.json(sing)
}