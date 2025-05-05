import React from "react";

import { Metadata } from "next";

export const metadata:Metadata ={
  title:"dashboard "
}



const page = () => {
  return (
    <div className="p-2">
      <h1 className=" text-xl   capitalize ">dashbaord</h1>
    </div>
  );
};

export default page;
