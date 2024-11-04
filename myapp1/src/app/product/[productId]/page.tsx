import React from 'react';
import { Metadata } from 'next';

type Props = {
  params: {
    productId: string;
  };
};

// Function to generate metadata for the page
export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};

// Main component for the page
const Page = ({ params }: Props) => {
  return (
    <div>
      <h1>Product {params.productId} Details</h1>
    </div>
  );
};

export default Page;