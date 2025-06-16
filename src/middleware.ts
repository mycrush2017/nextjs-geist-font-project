import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get the pathname of the request (e.g. /, /login, /chats)
  const path = request.nextUrl.pathname

  // If it's the login or signup page and we're already logged in,
  // redirect to /chats
  if (path === '/login' || path === '/signup') {
    // For demo purposes, we'll always allow access to login/signup
    return NextResponse.next()
  }

  // If it's a protected route (e.g. /chats) and we're not logged in,
  // redirect to /login
  if (path.startsWith('/chats')) {
    // For demo purposes, we'll always allow access to chats
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
