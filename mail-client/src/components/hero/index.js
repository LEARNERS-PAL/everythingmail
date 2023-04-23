import React from 'react'
import Navbar from '../navbar'
import Link from "next/link";

const Hero = () => {
  return (
    <section className=" hero-email min-h-screen bg-cover bg-center bg-no-repeat ">
      <Navbar />
      <article className="min-h-[90vh] flex flex-col gap-6 justify-center items-center">
        <h1 className="text-5xl font-bold text-white text-center">
          Open-Source Email Sending Server API
        </h1>
        <Link href="/form">
          <button className="bg-[#009ce0] text-white py-2 px-5 rounded-xl">
           View Demo
          </button>
        </Link>
      </article>
    </section>
  );
}

export default Hero