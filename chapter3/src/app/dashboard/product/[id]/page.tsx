import React from "react";
type propsType = {
  params: {
    id: string;
  };
};

export const generateMetadata = ({ params }: propsType) => {
  const productId = params.id;
  return {
    title: `product ${productId}`,
    description: "this is product that ",
  };
};

const page = ({ params }: propsType) => {
  const id = params.id;
  return (
    <div>
      <h1> product {id}</h1>
    </div>
  );
};

export default page;
