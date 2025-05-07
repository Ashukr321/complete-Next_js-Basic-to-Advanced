import React from "react";
import { CiHome } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaUsers } from "react-icons/fa";
import MenuLinks from "./MenuLinks";

const Sidebar = () => {
  const menuLinks = [
    {
      menuItem: "Pages",
      lists: [
        { name: "Dashboard", link: "/dashboard", icons: CiHome },
        { name: "Profile", link: "/profile", icons: CgProfile },
        { name: "Users", link: "/user", icons: FaUsers },
      ],
    },

    {
      menuItem: "Charts",
      lists: [
        { name: "Dashboard", link: "/dashboard", icons: CiHome },
        { name: "Profile", link: "/profile", icons: CgProfile },
        { name: "Users", link: "/user", icons: FaUsers },
      ],
    },
  ];

  return (
    <div className=" w-full  p-2 min-h-screen bg-gray-900 text-white ">
      <div className="mb-6 mt-4 text-xl font-bold">Admin Dashboard</div>

      <div>
        {menuLinks.map((menu, index) => (
          <div key={index} className="mb-4">
            <p className="uppercase text-gray-400 text-sm mb-2">
              {menu.menuItem}
            </p>
            <div className="space-y-1">
              {menu.lists.map((sublink, subIndex) => (
                <div key={subIndex}>
                  <MenuLinks
                    name={sublink.name}
                    link={sublink.link}
                    icons={<sublink.icons />}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
