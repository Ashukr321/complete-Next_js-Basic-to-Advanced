"use client";
import React, { useState } from "react";

// Define the shape of the injected props
type InjectedProps = {
  count: number;
  increment: () => void;
};

// Define a generic HOC function
function withCounter<P extends InjectedProps>(
  WrappedComponent: React.ComponentType<P>
): React.FC<Omit<P, keyof InjectedProps>> {
  return function WithCounter(props: Omit<P, keyof InjectedProps>) {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount((prev) => prev + 1);
    };

    return (
      <WrappedComponent
        {...(props as P)} // cast to P to satisfy type
        count={count}
        increment={increment}
      />
    );
  };
}

export default withCounter;
