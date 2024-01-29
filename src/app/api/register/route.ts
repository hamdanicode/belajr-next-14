// import { log } from "console"
import db from "@/lib/dbLib";
import { user } from "@/schemas/user";
import bcrypt from "bcrypt"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    const {username,password}=await request.json()
    console.log(username,password)
    const hashPassword= await bcrypt.hash(password,10);
    
    const res=await db.insert(user).values({email:username,password:hashPassword}).returning()
    console.log(res);
    
    
    return NextResponse.json(hashPassword)
}