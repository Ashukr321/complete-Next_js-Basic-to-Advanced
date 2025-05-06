"use client";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  

  return (
    <div>
      <h1>{error.message}</h1>
      <button
        onClick={reload}
        className="  px-6 py-2  cursor-pointer bg-blue-500 hover:bg-blue-600"
      >
        try again
      </button>
    </div>
  );
};

export default ErrorBoundary;
