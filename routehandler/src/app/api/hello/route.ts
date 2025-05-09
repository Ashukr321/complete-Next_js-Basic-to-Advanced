import { NextRequest } from "next/server";
// get filter user import { NextRequest } from 'next/server';
import { headers } from "next/headers";
const users = [
  { id: "1", name: "Alice", age: 25 },
  { id: "2", name: "Bob", age: 30 },
  { id: "3", name: "Charlie", age: 28 },
];

export async function GET(req: NextRequest) {
  //nextUrl this parse whole request
  const headerList = await headers(); // header is the async function so we need to await
  console.log(headerList.get("Authorization"));

  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("query");
  if (!query) {
    return Response.json(users, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  const filterUser = users.filter(user =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );

  return Response.json(filterUser, {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  users.push(body);
  return Response.json(users, {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
