import React from "react";

type settingProps = {
  children: React.ReactNode;
};

const page: React.FC<settingProps> = ({ children }) => {
  return (
    <div>
      <h1>setting layout</h1>
      <main>{children}</main>
    </div>
  );
};

export default page;
