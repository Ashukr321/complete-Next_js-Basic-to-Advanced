import React from "react";

export const metadata = {
  title: "this is the dashboard",
};
const page = async () => {
  await new Promise(resolve => {
    setTimeout(() => {
      resolve("adf");
    }, 2000);
  });
  return (
    <div>
      <h1>dashboard</h1>
    </div>
  );
};

export default page;
