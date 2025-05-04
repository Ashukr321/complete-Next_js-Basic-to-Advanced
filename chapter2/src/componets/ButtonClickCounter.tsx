"use client";
import React from "react";
import withCounter from "@/hoc/withCounter";
type buttonPropsTypes = {
  increment: () => void;
  count: number;
};
const ButtonClickCounter = ({ increment, count }: buttonPropsTypes) => {
  return (
    <div>
      <h1>button click counter</h1>
      <button onClick={increment}>increment {count}</button>
    </div>
  );
};

export default withCounter(ButtonClickCounter);
