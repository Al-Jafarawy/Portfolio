import React, { Fragment, useContext } from "react";
import Link from "next/link";
import { MdFeedback } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { PortfolioContext } from "@/contextApi/PortfolioContext";

const SocialMedia = () => {
  const { setShowModal } = useContext(PortfolioContext);

  const SocialMediaData = [
    {
      icon: <FaFacebookF />,
      color: "#0573afff",
      link: "https://www.facebook.com/ahmed.mo.al.jafarawy/",
    },

    {
      icon: <FaXTwitter />,
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
        className="
    flex flex-row justify-center gap-4 mt-6    
    xl:flex-col xl:gap-4 xl:absolute xl:bottom-12 xl:left-14 xl:mt-0 xl:translate-x-0 z-10
  "
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
          className="p-2 rounded-full text-xl bg-[#0072b1] text-white"
          onClick={() => setShowModal(true)}
        >
          <MdFeedback />
        </button>
      </div>
    </Fragment>
  );
};

export default SocialMedia;
