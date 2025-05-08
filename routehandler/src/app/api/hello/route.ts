import { NextRequest, NextResponse } from "next/server";

const users = [
  { id:"1", name: "Ashutosh", age: 21 },
  { id:"2" ,name: "Amit", age: 22 },
];

// export function GET(request: NextRequest) {
//   return NextResponse.json(users);
// }


export function GET() {
  return  Response.json({users});
}
 

