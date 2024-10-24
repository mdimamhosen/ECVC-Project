"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div
      className={`h-14 border-b-[1px] border-b-gray-300 ${
        pathname !== "/" ? "bg-gray-950" : "bg-gray-900"
      } transition-all duration-300 `}
    ></div>
  );
};

export default Navbar;
