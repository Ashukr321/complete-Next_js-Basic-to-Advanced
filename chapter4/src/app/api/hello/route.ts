const users = [
  { name: "ashutosh", age: 21 },
  { name: "amit", age: 21 },
];

//  every routes can export a config object

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
  maxDuration: 5,
  responseLimit:"8mb"
};



export async function GET() {
  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
} 
