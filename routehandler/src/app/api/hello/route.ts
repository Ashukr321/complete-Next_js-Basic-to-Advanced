import { NextRequest } from "next/server";
const users = [
  { id: "1", name: "Ashutosh", age: 21 },
  { id: "2", name: "Amit", age: 22 },
];

export function GET() {
  return Response.json({ users });
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  users.push(body);
  return Response.json(users, {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
