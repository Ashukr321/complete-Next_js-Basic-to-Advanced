import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1>product page</h1>
      <Link href="/product/1">product 1</Link>

      <Link href="/product/2?lang=en">product 2</Link>
    </div>
  );
};

export default page;
