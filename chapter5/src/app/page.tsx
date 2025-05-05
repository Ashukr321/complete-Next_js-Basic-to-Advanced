"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  console.log(typeof router);
  

  const auth = true;

  //  best practice
  useEffect(() => {
    if (!auth) {
      router.push("/login");
    }
  }, [auth, router]);

  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="capitalize text-3xl">Navigation programatically</h1>
    </div>
  );
}
