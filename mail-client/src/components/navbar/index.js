import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center lg:px-14 px-8 py-5 border-b-[1px] border-gray-400 text-white">
      <h1>EVERYTHINGMAIL</h1>
      <button className="bg-[#009ce0] text-white py-2 px-5 rounded-xl">
        <a href="#">View Demo</a>
      </button>
    </nav>
  );
}

export default Navbar