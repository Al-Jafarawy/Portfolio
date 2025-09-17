"use client";
import React, { useState, useRef, useEffect, Fragment } from "react";
import {
  FiUser,
  FiMail,
  FiMessageCircle,
  FiMessageSquare,
} from "react-icons/fi";

const SendMailFancy = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isVisible, setIsVisible] = useState(false);

  const formRef = useRef();

  const collectData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "-100px" }
    );
    if (formRef.current) observer.observe(formRef.current);
    return () => observer.disconnect();
  }, []);

  const inputClass =
    "flex-1 bg-transparent outline-none text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500";

  return (
    <Fragment>
      <section
        className="flex flex-col justify-start items-center bg-gray-50 dark:bg-gray-900 px-5 py-12 md:py-20"
        ref={formRef}
      >
        <h2 className="flex justify-center items-center gap-3 p-4 text-xl md:text-2xl font-extrabold text-center text-gray-900 dark:text-gray-100 font-fancy">
          <FiMessageSquare className="mt-0 text-2xl md:text-3xl mt-1" />
          Drop A Message
        </h2>

        <hr className="border-t-4 border-[#c72c6c] dark:border-teal-400 w-20 mx-auto mb-8" />

        <form
          action="https://api.web3forms.com/submit"
          className={`flex flex-col gap-5 w-full max-w-md md:max-w-xl lg:max-w-2xl p-8 md:p-10 lg:p-12 rounded-2xl shadow-sm transition-all duration-700
            bg-white dark:bg-gray-800
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }
            hover:shadow-lg
          `}
          method="POST"
        >
          <input
            name="access_key"
            type="hidden"
            value="c3257d43-02fb-4ff0-9a67-2128b8f8fc43"
          />

          {/* Name + Email */}
          <div className="flex flex-col md:flex-row gap-4 overflow-hidden">
            <div
              className="flex items-center border rounded-xl p-3
              border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900
              focus-within:ring-2 focus-within:ring-[#c72c6c] dark:focus-within:ring-teal-400 transition-all duration-300 hover:shadow-md flex-1"
            >
              <FiUser className="text-2xl text-gray-400 dark:text-gray-500" />
              <input
                className={inputClass + " ml-3 text-base md:text-lg"}
                name="name"
                onChange={collectData}
                placeholder="Name"
                required
                type="text"
                value={formData.name}
              />
            </div>

            <div
              className="flex items-center border rounded-xl p-3
              border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900
              focus-within:ring-2 focus-within:ring-[#c72c6c] dark:focus-within:ring-teal-400 transition-all duration-300 hover:shadow-md flex-1"
            >
              <FiMail className="text-2xl text-gray-400 dark:text-gray-500" />
              <input
                className={inputClass + " ml-3 text-base md:text-lg"}
                name="email"
                onChange={collectData}
                placeholder="Email"
                required
                type="email"
                value={formData.email}
              />
            </div>
          </div>

          {/* Message */}
          <div
            className="flex items-start border rounded-xl p-3
            border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900
            focus-within:ring-2 focus-within:ring-[#c72c6c] dark:focus-within:ring-teal-400 transition-all duration-300 hover:shadow-md"
          >
            <FiMessageCircle className="mt-2 text-2xl text-gray-400 dark:text-gray-500" />
            <textarea
              className={inputClass + " ml-3 resize-none text-base md:text-lg"}
              name="message"
              onChange={collectData}
              placeholder="Message"
              required
              rows={5}
              value={formData.message}
            />
          </div>

          <button
            className="bg-gradient-to-r from-[#c72c6c] to-[#a12b4c] dark:from-teal-400 dark:to-teal-500 hover:scale-105 transform transition-all text-white font-semibold p-3 rounded-xl shadow-lg mt-2"
            type="submit"
          >
            Submit
          </button>
        </form>
      </section>
    </Fragment>
  );
};

export default SendMailFancy;
