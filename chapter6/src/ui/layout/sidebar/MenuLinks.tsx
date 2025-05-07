import React from "react";
import Link from "next/link";

interface MenuProps {
  name: string;
  link: string;
  icons: React.ReactNode;
}

const MenuLinks: React.FC<MenuProps> = ({ name, link, icons }) => {
  return (
    <Link href={link}>
      <div className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
        <span className="text-lg">{icons}</span>
        <span className="text-sm">{name}</span>
      </div>
    </Link>
  );
};

export default MenuLinks;
