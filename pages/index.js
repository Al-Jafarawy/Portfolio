import { Fragment } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import About from "@/sections/about";
import Experience from "@/sections/experience";
const Navbar = dynamic(() => import("@/layout/Navbar"));
const Footer = dynamic(() => import("@/layout/Footer"));
const Intro = dynamic(() => import("@/sections/Intro"));
const Skills = dynamic(() => import("@/sections/Skills"));
const Projects = dynamic(() => import("@/sections/Projects"));
const SendMail = dynamic(() => import("@/utils/SendMail"));
const Feedback = dynamic(() => import("@/utils/Feedback"));

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Ahmed Al-Jafarawy | Frontend Developer</title>

        {/* Primary Meta Tags */}
        <meta content="Ahmed Al-Jafarawy | Frontend Developer" name="title" />
        <meta
          content="Frontend developer specializing in React.js, Next.js, and modern web technologies. Explore Ahmed Al-Jafarawy's portfolio showcasing projects in e-commerce, education platforms, and UI/UX design."
          name="description"
        />

        {/* Open Graph / Facebook */}
        <meta content="website" property="og:type" />
        <meta
          content="https://aljafarawy-portfolio.vercel.app/images/preview.png"
          property="og:image"
        />
        <meta
          content="Explore projects and experience by Ahmed Al-Jafarawy, a frontend developer skilled in React, Next.js, and Tailwind CSS."
          property="og:description"
        />
        <meta
          content="Ahmed Al-Jafarawy | Frontend Developer"
          property="og:title"
        />
        <meta
          content="https://aljafarawy-portfolio.vercel.app"
          property="og:url"
        />

        {/* Twitter */}
        <meta content="summary_large_image" name="twitter:card" />
        <meta
          content="https://aljafarawy-portfolio.vercel.app/images/preview.png"
          name="twitter:image"
        />
        <meta
          content="Frontend developer specializing in React.js, Next.js, and modern web technologies."
          name="twitter:description"
        />
        <meta
          content="Ahmed Al-Jafarawy | Frontend Developer"
          name="twitter:title"
        />
        <meta
          content="https://aljafarawy-portfolio.vercel.app"
          name="twitter:url"
        />

        {/* Other Meta Tags */}
        <meta
          content="Ahmed Al-Jafarawy, frontend developer, React.js, Next.js, Tailwind CSS, portfolio, web development, e-commerce, education platform"
          name="keywords"
        />
        <meta content="Ahmed Al-Jafarawy" name="author" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        {/* icon */}
        <link href="/icon.png" rel="icon" type="image/x-icon" />

        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div>
        <div>
          <Navbar />
          <Intro />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <SendMail />
          <Footer />
          <Feedback />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
