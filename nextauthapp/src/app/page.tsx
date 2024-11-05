"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const session = useSession(); // Destructure session data from useSession

  console.log(session);

  if (session?.status === "unauthenticated") {
    return (
      <>
        <button onClick={signIn}>Sign in with Google</button>
      </>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-3xl font-bold tracking-wider">Welcome to Next Auth</h1>
      <button onClick={() => signOut()} className="ml-4">Sign Out</button>
    </div>
  );
}