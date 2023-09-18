"use client";

import styles from "./header.module.scss";
import Image from "next/image";
import React from "react";

import logo from "../../../assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineBars } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa6";
import shortid from "shortid";

const linkData = [
  {
    id: shortid.generate(),
    text: "HOME",
    path: "/",
  },
  {
    id: shortid.generate(),
    text: "ABOUT",
    path: "/about",
  },
  {
    id: shortid.generate(),
    text: "DICOCESEN COMMISSIONS",
    path: "/diocesen-commissions",
    subRoutes: [
      {
        id: shortid.generate(),
        text: "Barishal",
        path: "/diocesen-commissions/barishal",
      },
      {
        id: shortid.generate(),
        text: "Chittagong",
        path: "/diocesen-commissions/chittagong",
      },
      {
        id: shortid.generate(),
        text: "Dhaka",
        path: "/diocesen-commissions/dhaka",
      },
      {
        id: shortid.generate(),
        text: "Dinajpur",
        path: "/diocesen-commissions/dinajpur",
      },
      {
        id: shortid.generate(),
        text: "Khulna",
        path: "/diocesen-commissions/khulna",
      },
      {
        id: shortid.generate(),
        text: "Mymensingh",
        path: "/diocesen-commissions/mymensingh",
      },
      {
        id: shortid.generate(),
        text: "Rajshahi",
        path: "/diocesen-commissions/rajshahi",
      },
      {
        id: shortid.generate(),
        text: "Sylhet",
        path: "/diocesen-commissions/sylhet",
      },
    ],
  },

  {
    id: shortid.generate(),
    text: "MOVEMENTS",
    path: "/movements",
  },
  {
    id: shortid.generate(),
    text: "BLOGS",
    path: "/blog",
  },
  {
    id: shortid.generate(),
    text: "RESOURCES",
    path: "/resources",
    subRoutes: [
      {
        id: shortid.generate(),
        text: "Gallery",
        path: "/resources/gallery",
      },
      {
        id: shortid.generate(),
        text: "Publications",
        path: "/resources/publications",
        subRoutes: [
          {
            id: shortid.generate(),
            text: "Newsletters",
            path: "/resources/publications/newsletters",
          },
          {
            id: shortid.generate(),
            text: "Jubodrishty",
            path: "/resources/publications/jubodrishty",
          },
          {
            id: shortid.generate(),
            text: "Nobokollol",
            path: "/resources/publications/nobokollol",
          },
          {
            id: shortid.generate(),
            text: "BCSM BARTA",
            path: "/resources/publications/bcsm-barta",
          },
        ],
      },
    ],
  },
  {
    id: shortid.generate(),
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
    <div className="py-2">
      <div className="px-5 sm:px-0 container mx-auto grid grid-cols-12 items-center">
        <div className="col-span-2 ">
          <Image className="w-20" src={logo} alt="logo" />
        </div>
        <div className="col-span-8  gap-1 2xl:gap-3 hidden xl:flex justify-between 2xl:justify-start">
          {linkData.map((link) => {
            return (
              <div key={link.id} className={styles.rootLinks1}>
                <Link
                  className={`
                 px-2 2xl:px-3 py-2  rounded
                font-semibold text-base
                transition duration-200 ease-in-
                flex items-center justify-center
                
                hover:bg-teal-600 hover:text-white
                
                ${styles.test}

                ${
                  pathname === link.path
                    ? "bg-teal-600 text-white"
                    : "text-black"
                } 
                `}
                  href={link.path}
                >
                  {link.text}{" "}
                  {link?.subRoutes && (
                    <span className="pl-1">
                      <FaAngleDown />
                    </span>
                  )}
                </Link>

                <div className={styles.rootLinks2}>
                  {link?.subRoutes && (
                    <div className="absolute right-0 left-0  bg-white shadow-lg rounded-lg mt-0">
                      {link.subRoutes.map((subLink) => {
                        return (
                          <div
                            className={`relative ${
                              subLink.subRoutes?.length > 0 &&
                              styles.rootSubLinks2
                            }`}
                          >
                            <Link
                              key={subLink.id}
                              className={`
                              px-2 2xl:px-3 py-2  rounded
                              font-normal text-base
                              transition duration-200 ease-in-
                              flex items-center justify-center
                              
                              hover:bg-teal-600 hover:text-white
                              ${
                                pathname === subLink.path
                                  ? "bg-teal-600 text-white"
                                  : "text-black"
                              } 
                              `}
                              href={subLink.path}
                            >
                              {subLink.text}
                            </Link>

                            <div className={styles.rootLinks3}>
                              {subLink?.subRoutes && (
                                <div className="absolute top-0 left-full   bg-white rounded-lg shadow-lg w-full mt-0">
                                  {subLink.subRoutes.map((subSubLink) => {
                                    return (
                                      <Link
                                        key={subSubLink.id}
                                        className={`
                              px-2 2xl:px-3 py-2  rounded
                              font-normal text-base
                              transition duration-200 ease-in-
                              flex items-center justify-center
                              
                              hover:bg-teal-600 hover:text-white
                          
                              
                              ${
                                pathname === subSubLink.path
                                  ? "bg-teal-600 text-white"
                                  : "text-black"
                              } 
                              `}
                                        href={subSubLink.path}
                                      >
                                        {subSubLink.text}
                                      </Link>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
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

          <button
            onClick={handleSidebar}
            className="ml-2 text-4xl  p-3 block xl:hidden"
          >
            <AiOutlineBars />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
