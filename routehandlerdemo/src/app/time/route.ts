
export const dynamic = "force-dynamic";
export async function GET() {
  const currentTime = new Date().toLocaleTimeString();
  
  return  Response.json({
    time:currentTime
  });
}
