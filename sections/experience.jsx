"use client";
import React, { Fragment } from "react";
import Image from "next/image";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { SiUpwork, SiFreelancer } from "react-icons/si";
import { PiNumberFiveBold } from "react-icons/pi";

const FreelanceExperience = () => {
  const platforms = [
    {
      name: "Upwork",
      icon: <SiUpwork size={40} />,
      link: "https://www.upwork.com/freelancers/~0159a6c0ba36bb6825",
    },
    {
      name: "Freelancer",
      icon: <SiFreelancer size={40} />,
      link: "https://www.freelancer.com/u/Aljafarawy",
    },
    {
      name: "Mostaql",
      icon: <FaLaptopCode size={40} />,
      link: "https://mostaql.com/u/Aljafarawy",
    },

    {
      name: "Khamsat",
      icon: <PiNumberFiveBold size={40} />,
      link: "https://khamsat.com/user/aljafarawy",
    },
    {
      name: " Own work ",
      icon: <AiOutlineGlobal size={40} />,
      link: "#",
    },
  ];

  return (
    <Fragment>
      <section className="max-w-7xl mx-auto my-10 px-5 md:px-10 py-10">
        <h2 className="text-3xl font-bold text-center mb-8">Freelance Work</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-center items-center">
          {platforms.map((platform, idx) => (
            <a
              className="flex flex-col justify-center items-center gap-2 p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800"
              href={platform.link}
              key={idx}
              rel="noopener noreferrer"
              target="_blank"
            >
              {platform.icon}
              <span className="text-center font-semibold">{platform.name}</span>
            </a>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default FreelanceExperience;
