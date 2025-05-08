import { NextRequest } from "next/server";

const users = [
  { id: "1", name: "Ashutosh", age: 21 },
  { id: "2", name: "Amit", age: 22 },
];

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const user = users.find(user => user.id === id);
  return Response.json({ user });
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const body = await req.json(); // get the body data
  console.log(body);

  // find the user index
  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex === -1) {
    return new Response(JSON.stringify({ error: "user not found 404!" }));
  }

  // update user
  users[userIndex] = { ...users[userIndex], ...body };

  return new Response(JSON.stringify({ user: users[userIndex] }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
