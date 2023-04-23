import React, { useState } from "react";

import Axios from "@/utils/Axios";
import { toast } from "react-toastify";
const ADMIN_EMAIL = "bentilshadrack72@gmail.com"
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    copy: false,
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    console.log(formData)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ formData });
    setLoading(true);
    const message = `
    ${formData.message} <br /> <br />

    Phone: ${formData.phone} <br />
    Email: ${formData.email} <br /> <br />

    Sent from EverythingMail Demo Website <br />
    `;
    const mailData = {
      receiver_email: formData.copy ? [ADMIN_EMAIL, formData.email] : ADMIN_EMAIL,
      sender_email: formData.email,
      sender_identity: formData.name,
      subject: "EverythingMail Demo Test",
      message,
      noreply: true,
    };
    try {
      const { data } = await Axios({
        method: "POST",
        data: mailData,
        headers: { "Content-Type": "application/json" },
      });
      if (data?.success) {
        toast.success("Email sent successfully");
      } else {
        toast.error("Sorry something went wrong");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);

      let message =
        error?.response?.data?.message || error.code == "ERR_NETWORK"
          ? "Network Error"
          : "Sorry something went wrong";
      toast.error(message);
      // console.log(message);
      console.log(error);
    }

    // Uncomment snippet below to use Fetch API
    // try {
    //   const response = await fetch("https://everythingmail.onrender.com/api/send", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(mailData),
    //   });
    //   const data = await response.json();
    //   if (data?.success) {
    //     toast.success("Email sent successfully");
    //   } else {
    //     toast.error("Sorry something went wrong");
    //   }
    //   setLoading(false);
    // } catch (error) {
    //   setLoading(false);
    //   let message = "Sorry something went wrong";
    //   if (error.code == "ERR_NETWORK") {
    //     message = "Network Error";
    //   }
    //   toast.error(message);
    //   console.log(error);
    // }
  };
  return (
    <section className="h-auto md:h-screen w-screen flex lg:flex-row flex-col-reverse items-center gap-6 bg-gray-100">
      <div className="w-full md:w-1/2 md:backdrop:h-screen">
        <img
          src="/images/mail.jpg"
          alt="Everything Mail"
          className="w-full h-full"
        />
      </div>
      <form className="w-full md:w-1/2 md:h-screen px-10 py-5">
        <h2 className="text-2xl font-bold pb-3">Contact Us</h2>
        <h4 className="text-xl font-bold pb-3">
          Wanna Talk? Schedule the meeting, we'll buy the coffee!
        </h4>
        <article className="flex flex-col gap-6 w-full">
          <div>
            <label className="block pb-1">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full py-2 px-2 focus:outline-[#009ce0] rounded"
            />
          </div>
          <div>
            <label className="block pb-1">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full py-2 px-2 focus:outline-[#009ce0] rounded"
            />
          </div>
          <div>
            <label className="block pb-1">Telephone</label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full py-2 px-2 focus:outline-[#009ce0] rounded"
            />
          </div>
          <div>
            <label className="block pb-1">Message</label>
            <textarea
              type="text"
              name="message"
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full min-h-[6rem] px-2 focus:outline-[#009ce0] rounded resize-x-none"
            ></textarea>
          </div>
          <div>
            <input
              type="checkbox"
              name="copy"
              id="copy"
              value={formData.copy}
              onChange={handleInputChange}
              className="w-4 h-4 focus:outline-[#009ce0] rounded"
            />
            <label htmlFor="copy" className="pl-2">Send me a copy</label>
          </div>

          <button
            className="bg-[#009ce0] text-white py-2 px-10 rounded disabled:opacity-50"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </article>
      </form>
    </section>
  );
};

export default ContactForm;
