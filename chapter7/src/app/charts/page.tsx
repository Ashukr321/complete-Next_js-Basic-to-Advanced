import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className=" px-6 py-2 bg-white text-black text-center rounded">
      <Link href="/charts/unmatch">
        <h1>charts</h1>
      </Link>
    </div>
  );
};

export default page;
