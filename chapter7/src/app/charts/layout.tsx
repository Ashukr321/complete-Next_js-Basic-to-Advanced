import React from "react";

interface childrenProps {
  children: React.ReactNode;
  piechart: React.ReactNode;
  login: React.ReactNode;
}

const layout: React.FC<childrenProps> = ({ children, piechart, login }) => {
  const isLogin = true;

  return isLogin ? (
    <>
      <div className="flex gap-2 p-4">
        <div className="w-1/2">{children}</div>
        <div className="w-1/2">{piechart}</div>
      </div>
    </>
  ) : (
    <div>
      <div>{login}</div>
    </div>
  );
};

export default layout;
