import React from "react";
import { BiCustomize } from "react-icons/bi";
import { FaHandsHelping } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import { VscServerProcess } from "react-icons/vsc";

const Features = () => {
  return (
    <main className="flex lg:flex-row flex-col gap-16 lg:gap-0 justify-between py-14">
      <section className="flex flex-col gap-16 lg:px-14 px-8 w-full">
        <article className="flex gap-4 items-center">
          <div className="text-white text-4xl bg-[#009ce0] p-2 rounded-full">
            <BiCustomize />
          </div>
          <div>
            <h3 className="font-bold text-lg">Customizable</h3>
            <p className="text-lg">
              The API should provide developers with the ability to customize
              various aspects of the email sending process, including email
              content, attachments, and sender/receiver details.
            </p>
          </div>
        </article>
        <article className="flex gap-4 items-center">
          <div className="text-white text-4xl bg-[#009ce0] p-2 rounded-full">
            <GiPadlock />
          </div>
          <div>
            <h3 className="font-bold text-lg">Secure</h3>
            <p className="text-lg">
              The API should implement industry-standard security measures to
              ensure that email data is protected during transit and at rest.
            </p>
          </div>
        </article>
      </section>
      <section className="flex flex-col gap-16 lg:px-14 px-8">
        <article className="flex gap-4 items-center">
          <div className="text-white text-4xl bg-[#009ce0] p-2 rounded-full">
            <FaHandsHelping />
          </div>
          <div>
            <h3 className="font-bold text-lg">Reliable</h3>
            <p className="text-lg">
              The API should be robust and able to handle high volumes of email
              traffic, with minimal downtime or errors.
            </p>
          </div>
        </article>
        <article className="flex gap-4 items-center">
          <div className="text-white text-4xl bg-[#009ce0] p-2 rounded-full">
            <VscServerProcess />
          </div>
          <div>
            <h3 className="font-bold text-lg">Adaptable</h3>
            <p className="text-lg">
              The API should be adaptable to different programming languages and
              frameworks, enabling developers to use it in a wide range of
              projects.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Features;
