"use client";

import Image from "next/image";
import React from "react";
import shortId from "shortid";
import logo from "../../../assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineBars } from "react-icons/ai";

const linkData = [
  {
    id: shortId.generate(),
    text: "HOME",
    path: "/",
  },
  {
    id: shortId.generate(),
    text: "DICOCESEN COMMISSIONS",
    path: "/diocesen-commissions",
  },
  {
    id: shortId.generate(),
    text: "MOVEMENTS",
    path: "/movements",
  },
  {
    id: shortId.generate(),
    text: "BLOG",
    path: "/blog",
  },
  {
    id: shortId.generate(),
    text: "RESOURCES",
    path: "/resources",
  },
  {
    id: shortId.generate(),
    text: "CONTACT",
    path: "/contact",
  },
];

const Header = () => {
  const pathname = usePathname();

  const handleSidebar = () => {
    alert("Sidebar with menu links will appear and its under development");
  };

  return (
    <div className="py-3">
      <div className="px-5 sm:px-0 container mx-auto grid grid-cols-12 items-center">
        <div className="col-span-2 ">
          <Image className="w-28" src={logo} alt="logo" />
        </div>
        <div
          className="col-span-8  gap-1 2xl:gap-3
        
        hidden xl:flex
        
        "
        >
          {linkData.map((link) => {
            return (
              <Link
                key={link.id}
                className={`
                 px-5 py-2  rounded
                font-semibold
                transition duration-200 ease-in-out
                
                hover:bg-teal-600 hover:text-white
                
                ${
                  pathname === link.path
                    ? "bg-teal-600 text-white"
                    : "text-black"
                } 
                
               


                `}
                href={link.path}
              >
                {link.text}
              </Link>
            );
          })}
        </div>
        <div className="col-span-10 xl:col-span-2 flex justify-end  items-center">
          <Link
            className="font-semibold bg-teal-700 px-7 py-2 text-white text-base
            "
            href={"/donate"}
          >
            DONATE
          </Link>

          <button onClick={handleSidebar} className="ml-6 text-4xl">
            <AiOutlineBars />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
