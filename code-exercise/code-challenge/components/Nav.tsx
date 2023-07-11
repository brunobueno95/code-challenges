import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex  w-full mb-6 pt-3">
      <Link
        href="/"
        className=" font-bold text-gray-500   p-1  hover:text-[#3B5CDD]   "
      >
        Home
      </Link>
      <Link
        href="/string-finder"
        className="  font-bold text-gray-500   p-1  hover:text-[#3B5CDD]    "
      >
        C1
      </Link>
      <Link
        href="/move-zeros"
        className="  font-bold text-gray-500   p-1  hover:text-[#3B5CDD]    "
      >
        C2
      </Link>
      <Link
        href="/reverse-sentence"
        className="font-bold text-gray-500   p-1  hover:text-[#3B5CDD]   "
      >
        C3
      </Link>
    </nav>
  );
};

export default Nav;
