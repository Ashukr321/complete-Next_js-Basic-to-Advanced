import React from 'react';
import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <h1>blog1</h1>
      <Link href="/blog/2">
        <h1>blog2</h1>
      </Link>
    </div>
  );
};

export default Page;
