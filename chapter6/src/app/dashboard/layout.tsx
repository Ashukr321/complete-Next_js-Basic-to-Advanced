import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  notifications,
  revenue,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 flex-1    ">
      <div className="bg-white p-4 rounded-2xl shadow-md">{children}</div>
      <div className="bg-white p-4 rounded-2xl shadow-md">{notifications}</div>
      <div className="bg-white p-4 rounded-2xl shadow-md">{revenue}</div>
    </div>
  );
};

export default Layout;
