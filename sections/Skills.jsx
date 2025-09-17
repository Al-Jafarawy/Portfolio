"use client";
import React, { Fragment, useState, useEffect, useRef } from "react";
import {
  FaLaptopCode,
  FaBootstrap,
  FaCss3Alt,
  FaAngular,
  FaPhp,
  FaShopify,
  FaJava,
} from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import {
  SiNodedotjs,
  SiNextdotjs,
  SiVercel,
  SiNetlify,
  SiExpress,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiChakraui,
  SiFirebase,
  SiTypescript,
  SiJquery,
} from "react-icons/si";
import { DiJavascript1, DiReact, DiMongodb, DiSass } from "react-icons/di";
import { BsGit, BsGithub } from "react-icons/bs";
import { TbBrandReactNative } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";

// ---------------------- Data ----------------------
const TechStackData = [
  {
    Advance: [
      {
        name: "ReactJS",
        icon: <DiReact className="md:text-4xl text-2xl" color="#53c1de" />,
      },
      {
        name: "JavaScript",
        icon: (
          <DiJavascript1 className="md:text-4xl text-2xl" color="#ffd600" />
        ),
      },
      {
        name: "Redux-toolkit",
        icon: <SiRedux className="md:text-4xl text-2xl" color="#7e57c2" />,
      },
      {
        name: "HTML5",
        icon: <AiFillHtml5 className="md:text-4xl text-2xl" color="#fa6700" />,
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt className="md:text-4xl text-2xl" color="#039be5" />,
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap className="md:text-4xl text-2xl" color="#673ab7" />,
      },
      {
        name: "Tailwind CSS",
        icon: (
          <SiTailwindcss className="md:text-4xl text-2xl" color="#4caf50" />
        ),
      },
      {
        name: "Meterial UI",
        icon: <SiMui className="md:text-4xl text-2xl" color="#29b6f6" />,
      },
    
      {
        name: "Vercel",
        icon: (
          <SiVercel className="dark:text-white text-black md:text-4xl text-2xl" />
        ),
      },
      {
        name: "Github",
        icon: <BsGithub className="md:text-4xl text-2xl" color="#c9d1d9" />,
      },
    ],
    Good: [
      {
        name: "NextJS",
        icon: (
          <SiNextdotjs className="md:text-4xl text-2xl dark:text-white text-black" />
        ),
      },

      {
        name: "Express",
        icon: <SiExpress className="md:text-4xl text-2xl" color="#555555" />,
      },
      {
        name: "MongoDB",
        icon: <DiMongodb className="md:text-4xl text-2xl" color="#4caf50" />,
      },
      {
        name: "Firebase",
        icon: <SiFirebase className="md:text-4xl text-2xl" color="#ffcd33" />,
      },

      {
        name: "Netlify",
        icon: <SiNetlify className="md:text-4xl text-2xl" color="#31b5ba" />,
      },
      {
        name: "Git",
        icon: <BsGit className="md:text-4xl text-2xl" color="#f4511e" />,
      },
    ],
    Familiar: [
      {
        name: "TypeScript",
        icon: <SiTypescript className="md:text-4xl text-2xl" color="#377cc8" />,
      },

      {
        name: "React Native",
        icon: (
          <TbBrandReactNative
            className="md:text-4xl text-2xl"
            color="#66dbfb"
          />
        ),
      },

      {
        name: "JAVA",
        icon: <FaJava className="md:text-4xl text-2xl" color="#547c99" />,
      },
      {
        name: "SASS",
        icon: <DiSass className="md:text-4xl text-2xl" color="#f06292" />,
      },

      {
        name: "Shopify",
        icon: <FaShopify className="md:text-4xl text-2xl" color="#99c14f" />,
      },
    ],
  },
];

// ---------------------- Component ----------------------
const TechStack = () => {
  const [section, setSection] = useState("Advance");
  const [sectionData, setSectionData] = useState([]);
  const [istechStack, setIsTechStack] = useState(false);
  const techStackRef = useRef();
  const techBoxesRef = useRef();
  const buttonsRef = useRef();

  useEffect(() => {
    const getScreenWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const techStackObserver = new IntersectionObserver(
      ([techStackEntry]) => {
        setIsTechStack(techStackEntry.isIntersecting);
      },
      { rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-250px"}` }
    );

    techStackObserver.observe(techStackRef.current);

    if (istechStack) {
      techBoxesRef.current.classList.add("pop-up-child");
      buttonsRef.current.classList.add("pop-up");
    } else {
      techBoxesRef.current.classList.remove("pop-up-child");
      buttonsRef.current.classList.remove("pop-up");
    }
  }, [istechStack]);

  useEffect(() => {
    const selectedSection = TechStackData.find((sections) =>
      sections.hasOwnProperty(section)
    );
    setSectionData(selectedSection ? selectedSection[section] : []);

    setTimeout(() => {
      techBoxesRef.current.classList.add("pop-up-child");
    }, 300);
  }, [section]);

  return (
    <Fragment>
      <section className="overflow-hidden scroll-mt-10" id="techStack" ref={techStackRef}>
        <h2 className="text-3xl font-bold text-center p-4 flex justify-center items-center gap-3  ">
          <FaLaptopCode /> Tech Stack
        </h2>

        <div
          className="pop-down transition-all w-fit duration-500 m-auto rounded-lg border  border-black dark:border-white border-solid overflow-hidden"
          ref={buttonsRef}
        >
          {["Advance", "Good", "Familiar"].map((cat) => (
            <button
              className={`w-[120px] md:w-[150px] p-2 font-bold ${
                section === cat ? "bg-red-600" : ""
              } transition-all ${
                cat === "Good"
                  ? "border-l border-r border-black dark:border-white border-solid"
                  : ""
              }`}
              key={cat}
              onClick={() => {
                setSection(cat);
                if (section !== cat)
                  techBoxesRef.current.classList.remove("pop-up-child");
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div
          className="pop-down-child flex min-h-[450px] py-[30px] px-[20px] md:px-[100px] flex-wrap justify-center items-center gap-5"
          ref={techBoxesRef}
        >
          {sectionData.map((tech) => (
            <div
              className="transition-all duration-700 px-2 h-fit py-3 md:py-5 w-[120px] md:w-[150px] border border-black dark:border-white border-solid rounded flex flex-col gap-3 items-center"
              key={tech.name}
            >
              <p>{tech.icon}</p>
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default TechStack;
