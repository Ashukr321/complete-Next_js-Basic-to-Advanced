import { NextResponse } from "next/server";

export function GET() {
  const response = NextResponse.json({ message: "Logout Successfully" });

  response.headers.set("Set-Cookie", "Token=; ");

  return response;
}
