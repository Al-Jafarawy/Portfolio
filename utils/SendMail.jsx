"use client";
import React, { useState } from "react";
import {
  FiUser,
  FiMail,
  FiMessageCircle,
  FiMessageSquare,
} from "react-icons/fi";

const SendMailFinal = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const collectData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass =
    "flex-1 bg-transparent outline-none text-gray-800 dark:text-gray-200";

  return (
    <section className="flex flex-col justify-start items-center  bg-gray-100 dark:bg-gray-900 px-5 py-8 md:py-16">
      <div className="text-center mb-8">
        <div className=" flex justify-center gap-2">
          <FiMessageSquare className="mx-auto text-3xl text-pink-500 dark:text-teal-400 mt-1.5 " />
          <h2 className="text-3xl font-bold mb-2">Contact</h2>
        </div>
        <hr className="border-t-2 border-pink-500 w-24 mx-auto dark:border-teal-400" />
      </div>

      <form
        action="https://api.web3forms.com/submit"
        className="flex flex-col gap-4 w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        method="POST"
      >
        <input
          name="access_key"
          type="hidden"
          value="c3257d43-02fb-4ff0-9a67-2128b8f8fc43"
        />

        {/* Name */}
        <div className="flex items-center border border-pink-500 dark:border-teal-400 rounded p-2 bg-white dark:bg-black">
          <FiUser className="text-xl text-gray-500 dark:text-gray-300 flex-shrink-0" />
          <input
            className={inputClass + " ml-2"}
            name="name"
            onChange={collectData}
            placeholder="Name"
            required
            type="text"
            value={formData.name}
          />
        </div>

        {/* Email */}
        <div className="flex items-center border border-pink-500 dark:border-teal-400 rounded p-2 bg-white dark:bg-black">
          <FiMail className="text-xl text-gray-500 dark:text-gray-300 flex-shrink-0" />
          <input
            className={inputClass + " ml-2"}
            name="email"
            onChange={collectData}
            placeholder="Email"
            required
            type="email"
            value={formData.email}
          />
        </div>

        {/* Message */}
        <div className="flex items-start border border-pink-500 dark:border-teal-400 rounded p-2 bg-white dark:bg-black">
          <FiMessageCircle className="text-xl text-gray-500 dark:text-gray-300 mt-2 flex-shrink-0" />
          <textarea
            className={inputClass + " ml-2 resize-none"}
            name="message"
            onChange={collectData}
            placeholder="Message"
            required
            rows={5}
            value={formData.message}
          />
        </div>

        <button
          className="bg-pink-500 hover:bg-pink-600 dark:bg-teal-400 dark:hover:bg-teal-500 text-white font-bold p-2 rounded transition-all mt-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default SendMailFinal;
