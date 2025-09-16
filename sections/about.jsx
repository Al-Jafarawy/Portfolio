"use client";
import React, { Fragment, useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaUserCheck } from "react-icons/fa";
import { ImLocation } from "react-icons/im";

const About = () => {
  const [isAbout, setIsAbout] = useState(false);

  const aboutRef = useRef();
  const profile2Ref = useRef();
  const aboutInfoRef = useRef();

  // Scroll Animation
  useEffect(() => {
    if (aboutRef.current) {
      const getScreenWidth = () =>
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      const aboutObserver = new IntersectionObserver(
        ([aboutEntry]) => {
          setIsAbout(aboutEntry.isIntersecting);
        },
        {
          rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-300px"}`,
        }
      );

      aboutObserver.observe(aboutRef.current);

      if (isAbout) {
        profile2Ref.current.classList.add("slide-in");
        aboutInfoRef.current.classList.add("slide-in");
      } else {
        profile2Ref.current.classList.remove("slide-in");
        aboutInfoRef.current.classList.remove("slide-in");
      }
    }
  }, [isAbout, aboutRef]);

  return (
    <Fragment>
      <section
        className=" shadow-zinc-300 dark:shadow-zinc-700 shadow-sm overflow-x-hidden max-w-7xl mx-auto my-10 rounded-xl bg-white dark:bg-[#0b0c0c] "
        id="about"
        ref={aboutRef}
      >
        <h2 className="text-3xl font-bold text-center pt-4 pb-8 flex justify-center items-center gap-3">
          <FaUserCheck /> About me
        </h2>
        <div className="pb-[30px] px-[20px] md:px-[10px] lg:px-[20px] md:flex justify-center md:justify-evenly  items-center bg-red-100 dark:bg-[#1a1a1a] p-8 rounded-b-xl">
          <Image
            alt="about image"
            className=" shadow-sm transition-all duration-700 translate-x-[-900px] max-h-[500px] rounded-xl object-cover"
            height={350}
            ref={profile2Ref}
            src="https://res.cloudinary.com/dma8z138n/image/upload/v1757947717/IMG_0267_k0lzp4.jpg"
            width={350}
          />
          <div
            className="text-lg translate-x-[900px] opacity-0 transition-all duration-700 mt-4 md:mt-0 md:w-[50%] text-center md:text-left rounded"
            ref={aboutInfoRef}
          >
            {/* Full Name */}
            <p className="text-3xl text-center md:text-left font-semibold text-[#c72c6c] dark:text-[#07d0e5]">
              Ahmed Al-Jafarawy
            </p>
            {/* Profil Name */}
            <p className="text-center md:text-left text-red-600 mt-1">
              Frontend developer
            </p>
            {/* Location */}
            <div className="flex flex-wrap justify-center md:justify-normal gap-5">
              <div className="w-fit mt-5 flex flex-col items-start gap-2">
                <div className="flex items-center gap-2 text-[#0b0c0c] dark:text-[#07d0e5]">
                  <ImLocation />
                  <span>Damanhour Al-Behrira Egypt</span>
                </div>
              </div>
            </div>

            <div className="mt-5 text-justify">
              <p className="text-gray-600 dark:text-gray-300">
                I am a Front-End Developer passionate about creating modern and
                responsive web applications. I enjoy working with React and
                building clean, user-friendly interfaces while constantly
                improving my skills and exploring new technologies in web
                development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
