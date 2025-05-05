"use client";
const ErrorBoundary = ({ error }: { error: Error }) => {
  return (
    <div>
      <h1>{error.message}</h1>
    </div>
  );
};

export default ErrorBoundary;
