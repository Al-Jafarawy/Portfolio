"use client";
import React, { Fragment } from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { SiUpwork, SiFreelancer } from "react-icons/si";
import { PiNumberFiveBold } from "react-icons/pi";
import { motion } from "framer-motion";

import YIcon from "@/buttons/YIcon";
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
      name: "freelanceyard",
      icon: <YIcon size={40} />,
      link: "https://www.freelanceyard.com/en/freelancers/ahmed-al-jafarawy",
    },
    { name: "Own work", icon: <AiOutlineGlobal size={40} />, link: "#" },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <Fragment>
      <section
        className="max-w-7xl mx-auto my-10 px-5 md:px-10 py-10 bg-red-100 dark:bg-[#1a1a1a] scroll-mt-20 "
        id="work-experience"
      >
        <h2 className="text-3xl font-bold text-center mb-10">Freelance Work</h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-center items-start"
          initial="hidden"
          variants={containerVariants}
          viewport={{ once: false, amount: 0.2 }}
          whileInView="visible"
        >
          {platforms.map((platform, idx) => (
            <motion.a
              className="flex flex-col justify-center items-center gap-2 p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 "
              href={platform.link}
              key={idx}
              rel="noopener noreferrer"
              target="_blank"
              variants={itemVariants}
            >
              {platform.icon}
              <span className="text-center font-semibold">{platform.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </section>
    </Fragment>
  );
};

export default FreelanceExperience;
