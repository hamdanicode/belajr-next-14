import { log } from "console"
import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
    return NextResponse.json({
        status:"success",
        data:{
             
        }
    })
}
export async function POST(request: Request) {
    const {username,password}=await request.json()
    console.log(username,password);
    
    return NextResponse.json(request)
}