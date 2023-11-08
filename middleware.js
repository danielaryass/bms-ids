import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const cookie = request.cookies.getAll();
  if (Object.keys(cookie).length === 0) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/dashboard', '/employee', '/employee/:id', '/employee/:id/:id'],
};
