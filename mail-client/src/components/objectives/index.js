import React from 'react'
import Image from "next/image";

const Objectives = () => {
  return (
    <section className="flex lg:flex-row flex-col items-center gap-6 bg-gray-100">
      <Image
        src="/images/e1.jpg"
        alt="Everything Mail"
        width={600}
        height={600}
      />
      <div className="lg:pr-14 pl-8">
        <h2 className="text-xl font-bold pb-3">About</h2>
        <p className="text-lg">
          Email communication is an essential feature of many web and mobile
          applications, and developers often face challenges integrating email
          functionality into their applications. Currently, there are limited
          open-source options available for developers to use, which creates a
          need for an open-source API for sending and receiving emails that is
          easy to use and flexible. This project aims to address this gap by
          developing an open-source API that can be used by developers to
          integrate email functionality into their applications quickly.
        </p>
      </div>
    </section>
  );
}

export default Objectives