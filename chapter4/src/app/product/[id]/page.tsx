"use client";
import React from "react";
import { useParams, useSearchParams } from "next/navigation";

type propsType = {
  params: {
    id: string;
  };
  searchParams: {
    lang: string;
  };
};

const Page: React.FC<propsType> = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  console.log(searchParams);
  console.log(params);
  return (
    <div>
      <h1>{searchParams.get("lang")}</h1>
      <h1>{params.id}</h1>
    </div>
  );
};

export default Page;
