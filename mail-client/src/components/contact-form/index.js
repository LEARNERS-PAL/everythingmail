import React from 'react'
import Image from "next/image";
import Link from "next/link";

const ContactForm = () => {
  return (
    <section className="flex lg:flex-row flex-col-reverse items-center gap-6 bg-gray-100">
      <Image
        src="/images/mail.jpg"
        alt="Everything Mail"
        width={597}
        height={397}
      />
      <form className="lg:pr-14 pl-8 pt-10 lg:pt-0">
        <h2 className="text-2xl font-bold pb-3">Contact Us</h2>
        <h4 className="text-xl font-bold pb-3">
          Wanna Talk? Schedule the meeting, we'll buy the coffee!
        </h4>
        <article className="flex flex-col gap-6 w-full">
          <div>
            <label className="block pb-1">Name</label>
            <input
              type="text"
              name="full-name"
              className="w-full py-2 px-2 focus:outline-[#009ce0] rounded"
            />
          </div>
          <div>
            <label className="block pb-1">Email</label>
            <input
              type="email"
              name="email address"
              className="w-full py-2 px-2 focus:outline-[#009ce0] rounded"
            />
          </div>
          <div>
            <label className="block pb-1">Telephone</label>
            <input
              type="text"
              name="telephone"
              className="w-full py-2 px-2 focus:outline-[#009ce0] rounded"
            />
          </div>
          <div>
            <label className="block pb-1">Message</label>
            <input
              type="text"
              name="message"
              className="w-full min-h-[6rem] px-2 focus:outline-[#009ce0] rounded"
            />
          </div>
          <Link href="#">
            <button className="bg-[#009ce0] text-white py-2 px-10 rounded">
              Submit
            </button>
          </Link>
        </article>
      </form>
    </section>
  );
}

export default ContactForm