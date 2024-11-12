import { NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
  // Retrieve headers using the headers function
  const headersList = await headers();
  
  // Log the Authorization header from the headers list
  console.log(headersList.get("Authorization")); // Corrected syntax here

  // Create a new Headers object from the request headers
  const requestHeader = new Headers(request.headers);
  
  // Log the Authorization header from the request
  console.log(requestHeader.get("Authorization"));
  

  // Return a response
  return new Response("<h1>profile api data this is amazing </h1>",{
    headers:{
      "Content-Type": "html",
      "token":"1234",
      "Set-Cookie": "myCookie=myValue; Path=/; HttpOnly; Secure; SameSite=Strict", 
    }
  });
}