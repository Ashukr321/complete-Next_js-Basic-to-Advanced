

export async function GET(){
  const response = new Response("logout successfully!",{
    headers:{
      "Set-Cookie":"myCookie=;Path=/;httpOnly;Secure;SameSite=Strict;Max-Age=0"
    }
  });
  return response;
}