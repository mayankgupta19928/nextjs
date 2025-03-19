// import { withAuth } from "next-auth/middleware";

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Clone the request headers and set a new header `x-hello-from-middleware1`
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-hello-from-middleware1", "hello");

  // You can also set request headers in NextResponse.next
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  });

  // Set a new response header `x-hello-from-middleware2`
  response.headers.set("x-hello-from-middleware2", "hello");
  return response;
}
export const config = {
  matcher: ["/api/test"], // Apply middleware only to API routes
};

// Apply middleware to specific routes (optional)
// export const config = {
//   matcher: ["/api/:path*"], // Apply middleware only to API routes
// };

// export default withAuth({
//   pages: {
//     signIn: "/login",
//   },
// });

// export const config = {
//   matcher: ["/dashboard/:path*"], // Protect dashboard and subpages
// };
