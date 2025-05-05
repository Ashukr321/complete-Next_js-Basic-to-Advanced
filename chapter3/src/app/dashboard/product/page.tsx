import React from "react";
import Link from "next/link";

export const metadata = {
  title: "this is product page ",
  description: "this page is the product page description",
};

const page = () => {
  return (
    <div>
      <h1>product page</h1>
      <Link href={`/product/${3}`}>
        <button>product 2 </button>
      </Link>
    </div>
  );
};

export default page;
