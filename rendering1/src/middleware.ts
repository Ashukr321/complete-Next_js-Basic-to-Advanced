import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // return NextResponse.redirect(new URL("/", request.url));

  // if(request.nextUrl.pathname==="/profile"){
  //   // return NextResponse.redirect(new URL("/",request.nextUrl));
  // }

  // cookies
  const response = NextResponse.next();

  const themPreference = request.cookies.get("them");
  if (!themPreference) {
    response.cookies.set("them", "dark");
  }
  return response;
}

// export const config = {
//   matcher: "/profile",
// };
