// import { log } from "console"
// import bcrypt from "@types/bcrypt";

import { NextResponse } from "next/server"


// export const dynamic = 'force-dynamic' // defaults to auto
// export async function GET(request: Request) {
//     return NextResponse.json({
//         status:"success",
//         data:{
             
//         }
//     })
// }
export async function POST(request: Request) {
    const {username,password}=await request.json()
    console.log(username,password);

    // const hashPassword= awai;
    // const result=await fetch('http://localhost:3001/users', {
    //     method: 'POST',
    //     body:JSON.stringify({
    //         username:username,
    //         password:hashPassword,
    //         role:"admin"
    //     })
    // })
    
    return NextResponse.json(hashPassword)
}