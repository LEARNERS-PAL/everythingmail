import React from 'react'
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center lg:px-14 px-8 py-5 border-b-[1px] border-gray-400 text-white">
      <h1>EVERYTHINGMAIL</h1>
      <Link href="/form">
        <button className="bg-[#009ce0] text-white py-2 px-5 rounded-xl">
          View Demo
        </button>
      </Link>
    </nav>
  );
}

export default Navbar