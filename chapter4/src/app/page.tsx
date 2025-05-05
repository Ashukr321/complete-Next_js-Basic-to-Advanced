"use client";
import Link from "next/link";
// import { useRouter } from "next/navigation";
export default function Home() {
  // const router = useRouter();
  return (
    <>
      <h1 className="text-center p-4">api routes</h1>

      <ul>
        <Link href="/dashboard" className="mr-2">
          go to dashbaord
        </Link>

        <Link href="/product">product</Link>
      </ul>
      {/* <button onClick={()=>router.push("/dashboard")}>
      Dashbaord
    </button> */}
    {/* Active link  */}
    
    </>
  );
}
