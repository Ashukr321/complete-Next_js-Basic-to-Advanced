"use client";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const placeOrderHandler = () => {
    router.replace("/");
  };

  return (
    <div>
      <h1>Order product</h1>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 px-6 py-2 mt-3 pointer rounded"
        onClick={placeOrderHandler}
      >
        place order
      </button>
    </div>
  );
};

export default Page;
