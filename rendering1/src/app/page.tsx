import React from "react";
import Link from "next/link";
export const metadata = {
  title: "rendering",
  description: "type of  rendering in the next js ",
};
const page = () => {
  return (
    <div className="flex gap-2 border justify-center items-center  bg-black p-6 h-screen">
      <div className="bg-blue-500 hover:bg-blue-600 hover:text-white transition cursor-pointer p-6 rounded">
        <Link href="/ssr">
          <h1>SSG Rendering</h1>
        </Link>
      </div>
      <div className="bg-blue-500 hover:bg-blue-600 hover:text-white transition cursor-pointer p-6 rounded">
        <h1>ISR (Incremental Static Regeneration )</h1>
      </div>
      <div className="bg-blue-500 hover:bg-blue-600 hover:text-white transition cursor-pointer p-6 rounded">
        <h1>Server-Side Rendering (SSR)</h1>
      </div>
      <div className="bg-blue-500 hover:bg-blue-600 hover:text-white transition cursor-pointer p-6 rounded">
        <h1>Client-Side Rendering (CSR)</h1>
      </div>
    </div>
  );
};

export default page;
