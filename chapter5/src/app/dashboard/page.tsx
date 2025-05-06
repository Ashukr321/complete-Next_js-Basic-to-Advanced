import React from "react";
import SearchCompoents from "./_componets/SearchCompoents";
import ProductFilterBasedOnPriceRange from "./_componets/ProductFilterBasedOnPriceRange";

export const metadata = {
  title: "this is the dashboard",
};

// function getRandomInt (count:number){
//   return Math.floor(Math.random()*count);
// }

const page = async () => {
  // const random = getRandomInt(2);
  // if(random===1){
  //   throw new Error("error loading dashboard !")
  // }

  // await new Promise(resolve => {
  //   setTimeout(() => {
  //     resolve("adf");
  //   }, 2000);
  // });
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <h1>dashboard</h1>
      {/* <SearchCompoents/> */}
      <ProductFilterBasedOnPriceRange/>
    </div>
  );
};

export default page;
