import React from "react";
import Link from "next/link";

type ChildrenProps = {
  children: React.ReactNode;
};

const sideBarRoutes = [
  {
    url: "/dashboard",
    routeName: "Home",
  },
  {
    url: "/dashboard/settings",
    routeName: "Settings",
  },
  {
    url: "/dashboard/profile",
    routeName: "Profile",
  },
];

const Layout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-[200px] bg-purple-600 p-4 text-white">
        <h2 className="text-xl font-bold text-center mb-6">Sidebar</h2>
        <nav className="flex flex-col gap-3">
          {sideBarRoutes.map(route => (
            <Link
              key={route.url}
              href={route.url}
              className="text-center hover:bg-purple-700 p-2 rounded"
            >
              {route.routeName}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Fixed Header */}
        <header className="h-[60px] fixed w-[calc(100%-200px)] left-[200px] top-0 bg-black text-white text-center font-semibold shadow z-10 flex items-center justify-center">
          Header
        </header>

        {/* Page content below header */}
        <main className="flex-1 mt-[60px] overflow-y-auto bg-yellow-50 p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
