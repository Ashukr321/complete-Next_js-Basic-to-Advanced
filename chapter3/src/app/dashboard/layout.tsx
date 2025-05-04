import React from "react";

type childProps = {
  children: React.ReactNode;
};
const Layout: React.FC<childProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="bg-white flex justify-center text-black p-2 w-[200px] h-full">
        <h3 className="mt-4">sidebar</h3>
      </div>

      <div className="flex-1">
        <h1 className="text-center">header</h1>
        <main className="p-2">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
