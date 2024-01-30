// import { log } from "console"

import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server"
const secret=process.env.NEXTAUTH_SECRET;
export async function POST(req: Request) {
    console.log("=======TOken======");
    // console.log(request);
    const token = await getToken({req,secret}); // Requires 'req' object
    console.log(token); // Logs the decoded JWT token object
    // token
    console.log("=======end token======");
    
    
    
    return NextResponse.json({hello:"apakabar"})
}