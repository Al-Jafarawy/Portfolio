import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import React, { Fragment, useEffect, useRef, useState } from "react";

import SocialMedia from "../utils/SocialMedia"; 

const Intro = () => {
  const [isHome, setIsHome] = useState(false);

  const homeRef = useRef();
  const introRef = useRef();
  const profileRef = useRef();

  // Intersection observer animation on scroll
  useEffect(() => {
    const getScreenWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    if (!homeRef.current) return;

    const homeObserver = new IntersectionObserver(
      ([homeEntry]) => setIsHome(homeEntry.isIntersecting),
      {
        rootMargin: getScreenWidth() <= 700 ? "-100px" : "-300px",
      }
    );

    homeObserver.observe(homeRef.current);

    return () => homeObserver.disconnect();
  }, [homeRef]);

  useEffect(() => {
    if (!profileRef.current || !introRef.current) return;
    if (isHome) {
      profileRef.current.classList.add("slide-in");
      introRef.current.classList.add("slide-in");
    } else {
      profileRef.current.classList.remove("slide-in");
      introRef.current.classList.remove("slide-in");
    }
  }, [isHome]);

  return (
    <Fragment>
      <Head>
        <title>Ahmed Al-Jafarawy&apos;s Portfolio</title>
      </Head>
      <section id="home">
        <div
          className="w-full min-h-[85vh] md:min-h[70vh] lg:min-h-[100vh] overflow-x-hidden px-[5%] pt-[80px] md:flex flex-col md:flex-row items-center justify-between   gap-10 max-w-7xl m-auto "
          ref={homeRef}
        >
          <div
            className="translate-y-[-200px] transition-all opacity-0 duration-700 m-auto order-1 md:order-2 w-full md:w-1/2 flex justify-center md:justify-end mt-20 md:mt-auto height-[30px]"
            ref={profileRef}
          >
            <Image
              alt="Profile"
              className="w-3/4 md:w-[300px] aspect-square object-cover rounded-full border-[4px] border-[#87ff8d] animate-profile"
              height={300}
              src="https://res.cloudinary.com/dma8z138n/image/upload/v1758078490/Pic_ixnkgw.jpg"
              width={300}
            />
          </div>
          <div
            className="transition-all duration-700 opacity-0 text-center md:text-left md:ml-16 order-2 md:order-1 w-full md:w-1/2   pt-16 md:pt-0"
            ref={introRef}
          >
            <p className="py-1 text-2xl md:text-4xl font-semibold font-sans">
              Hi There !
            </p>
            <p className="text-2xl md:text-4xl py-1 font-semibold font-sans">
              I&apos;m a Frontend&nbsp;
              <span className="text-[#c72c6c] dark:text-[#07d0e5]">
                developer <span className="text-white">|</span>
              </span>
            </p>
            <div className="mt-3 md:mt-6 flex flex-col md:flex-row gap-3 md:gap-5 justify-center md:justify-start">
              <Link
                className="text-white text-xl font-semibold rounded bg-[#c72c6c] hover:bg-[#a31f59] px-2 py-1 text-center"
                href="#getInTouch"
              >
                Hire me
              </Link>
              <Link
                className="text-xl font-semibold rounded border border-red-500 hover:text-white hover:bg-red-500 px-2 py-1 text-center"
                href="https://drive.google.com/file/d/13QEBKjGwOdl2Ft8kPMaNXWO_GFAcrepW/view?usp=drive_link"
                target="_blank"
              >
                Download CV
              </Link>
            </div>
          </div>
        </div>
                <SocialMedia />

      </section>
    </Fragment>
  );
};

export default Intro;
