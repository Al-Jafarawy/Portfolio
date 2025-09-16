import React, { Fragment, useContext } from "react";
import Link from "next/link";
import { MdFeedback } from "react-icons/md";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import { PortfolioContext } from "@/contextApi/PortfolioContext";

const SocialMedia = () => {
  const { setShowModal } = useContext(PortfolioContext);

  const SocialMediaData = [
    {
      icon: <AiOutlineFacebook />,
      color:
        "linear-gradient(135deg, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #FFDC80)",
      link: "https://www.facebook.com/ahmed.mo.al.jafarawy/",
    },

    {
      icon: <IoClose />,
      color: "#0f0f0f",
      link: "https://x.com/AlJafarawy",
    },
    {
      icon: <FaLinkedinIn />,
      color: "#0072b1",
      link: "https://www.linkedin.com/in/ahmed-al-jafarawy/",
    },
    {
      icon: <BsGithub />,
      color: "#171515",
      link: "https://github.com/Al-Jafarawy",
    },
  ];

  return (
    <Fragment>
      <div
        className="flex flex-row xl:flex-col gap-4 z-10 absolute bottom-24 xl:bottom-12 left-1/2 xl:left-14 transform -translate-x-1/2 xl:translate-x-0"
      >
        {SocialMediaData.map((social, key) => (
          <Link className="w-fit" href={social.link} key={key}>
            <div
              className="p-2 rounded-full text-xl text-white"
              style={{ background: social.color }}
            >
              {social.icon}
            </div>
          </Link>
        ))}
        <button
          className="p-2 rounded-full text-xl bg-[#f2925a] text-white"
          onClick={() => setShowModal(true)}
        >
          <MdFeedback />
        </button>
      </div>
    </Fragment>
  );
};

export default SocialMedia;
