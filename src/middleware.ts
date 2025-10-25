import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Named export
export function middleware(request: NextRequest) {
  // Your logic here
  return NextResponse.next()
}

// // src/middleware.ts
// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// export function middleware(request: NextRequest) {
//   // Example: redirect /admin if not logged in
//   if (request.nextUrl.pathname.startsWith('/admin')) {
//     // pseudo auth check
//     const isLoggedIn = false
//     if (!isLoggedIn) {
//       return NextResponse.redirect(new URL('/', request.url))
//     }
//   }

//   return NextResponse.next()
// }

// // Optionally define which routes to match
// export const config = {
//   matcher: ['/admin/:path*'], // applies middleware to admin routes
// }
