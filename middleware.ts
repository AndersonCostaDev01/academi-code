import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  throw new Error("🚨 Middleware foi chamado, mas deu erro intencionalmente!");
}

export const config = {
  matcher: "/api/students/:path*",
};
