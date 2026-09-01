import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";

export async function middleware(request: NextRequest) {
  const session = await auth();
  if (!session?.user.role || session.user.role !== "Admin") {
    return NextResponse.redirect(new URL("/", request.url));
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
