import { NextRequest } from "next/server";

const users = [
  { id: "1", name: "Ashutosh", age: 21 },
  { id: "2", name: "Amit", age: 22 },
];

export function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id;
  const user = users.find(user => user.id === id);
  return Response.json({ user });
}
