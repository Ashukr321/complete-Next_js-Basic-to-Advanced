import { NextResponse } from "next/server";

export function GET() {
  const response = NextResponse.json({ message: "Cookie set without library" });

  // response.headers.set("Set-Cookie", "token=abc123");
  response.headers.set("Set-Cookie", "Token = ashu123");
  return response;
}
