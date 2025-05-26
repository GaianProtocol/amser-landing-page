import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("admin-token")?.value;

  // Check if the request is for the CRM page
  if (request.nextUrl.pathname.startsWith("/crm")) {
    if (!token) {
      return NextResponse.redirect(new URL("/crm/login", request.url));
    }

    try {
      // Verify the token
      const secret = new TextEncoder().encode(
        process.env.JWT_SECRET || "your-secret-key"
      );
      await jwtVerify(token, secret);
      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL("/crm/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/crm/:path*",
};
