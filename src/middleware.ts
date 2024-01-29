// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// export function middleware(request: NextRequest) {
//     const isLogin=true;
//     if(!isLogin){
//         return NextResponse.redirect(new URL('/login', request.url))
//     }
// }
export {default} from "next-auth/middleware"
 
export const config = {
  matcher: '/dashboard',
}