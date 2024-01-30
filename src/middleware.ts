import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export {default} from "next-auth/middleware"
// export async function middleware(request: NextRequest) {
//     // // const isLogin=true;
//     // // if(!isLogin){
//     // //     return NextResponse.redirect(new URL('/login', request.url))
//     // //   }
//     //   // return NextResponse.redirect(new URL('/login', request.url))
//     //   const session= await getServerSession();
//     //   console.log("session");
//     //   console.log(session);

//     //   // if(!session)return NextResponse.redirect(new URL('/dashboard', request.url))
// }
export const config = {
  matcher: '/dashboard',
}