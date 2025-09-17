"use client";
import React, { Fragment, useState, useRef, useEffect } from "react";
import Link from "next/link";
import { CgWebsite } from "react-icons/cg";
import { HiExternalLink } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";

const Project = () => {
  const [activeSection, setActiveSection] = useState("All");
  const [hoveredProject, setHoveredProject] = useState("");
  const sectionRef = useRef();
  const projectsContainerRef = useRef();

  // Projects organized by category
  const ProjectsData = {
    React: [
      {
        projectName: "YouTube Clone",
        liveUrl: "https://youtube-clone-shivraj.vercel.app",
        githubUrl: "https://github.com/iamshiv007/yotube-clone",
        projectImage: {
          imageUrl:
            "http://res.cloudinary.com/dqfrtazgi/image/upload/v1696218286/t1zjvlwogccwit9888w7.png",
        },
        techs: ["ReactJS", "ContextAPI", "ChakraUI", "YoutubeAPI"],
      },
      {
        projectName: "Eccommerce Application",
        liveUrl: "https://ecommerce-application-shivraj.vercel.app",
        githubUrl: "https://github.com/iamshiv007/ecommerce-frontend",
        projectImage: {
          imageUrl:
            "http://res.cloudinary.com/dqfrtazgi/image/upload/v1696220173/lnnt6nmesjvvmo3nx9ep.png",
        },
        techs: ["ReactJS", "NodeJS", "Express", "MongoDB", "Redux Toolkit"],
      },
    ],
    JavaScript: [
      {
        projectName: "Shovee Portfolio Generator",
        liveUrl: "https://shovee.com",
        githubUrl: "https://github.com/iamshiv007/shovee",
        projectImage: {
          imageUrl:
            "http://res.cloudinary.com/dqfrtazgi/image/upload/v1696218285/yn3naeznjfgszsbbjr92.png",
        },
        techs: ["NextJS", "TailwindCSS", "Redux Toolkit", "Cloudinary"],
      },
    ],
    CSS: [
      {
        projectName: "CSS Animation Demo",
        liveUrl: "https://css-demo.vercel.app",
        githubUrl: "https://github.com/iamshiv007/css-demo",
        projectImage: {
          imageUrl: "https://via.placeholder.com/330x192.png?text=CSS+Project",
        },
        techs: ["CSS3", "Animations", "Keyframes"],
      },
    ],
  };

  const allProjects = [
    ...ProjectsData.React,
    ...ProjectsData.JavaScript,
    ...ProjectsData.CSS,
  ];

  useEffect(() => {
    if (sectionRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            projectsContainerRef.current.classList.add("pop-up-child");
          } else {
            projectsContainerRef.current.classList.remove("pop-up-child");
          }
        },
        { rootMargin: "-100px" }
      );
      observer.observe(sectionRef.current);
    }
  }, [sectionRef]);

  const displayProjects =
    activeSection === "All" ? allProjects : ProjectsData[activeSection];

  return (
    <Fragment>
      <section id="project" ref={sectionRef}>
        <h2 className="text-3xl font-bold text-center pt-4 pb-8 flex justify-center items-center gap-3">
          <CgWebsite /> Projects
        </h2>
        <hr className="border-t-4 border-[#c72c6c] dark:border-teal-400 w-20 mx-auto mb-8" />

        {/* Section Buttons */}
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          {["All", "React", "JavaScript", "CSS"].map((sec) => (
            <button
              className={`px-4 py-2 rounded font-semibold transition ${
                activeSection === sec
                  ? "bg-red-800 dark:bg-gray-800 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
              key={sec}
              onClick={() => setActiveSection(sec)}
            >
              {sec} Projects
            </button>
          ))}
        </div>

        {/* Projects */}
        <div
          className="min-h-[400px] pop-down-child pb-[30px] flex flex-wrap px-[20px] gap-6 justify-evenly items-center"
          ref={projectsContainerRef}
        >
          {displayProjects.map((project) => (
            <div
              className="transition-all duration-700 w-[320px] relative"
              key={project.projectName}
            >
              <div
                className="w-[320px] shadow-md h-44 bg-no-repeat flex flex-col justify-end rounded overflow-hidden bg-cover"
                onMouseLeave={() => setHoveredProject("")}
                onMouseMove={() => setHoveredProject(project.projectName)}
                style={{
                  backgroundImage: `url(${
                    project?.projectImage?.imageUrl || ""
                  })`,
                }}
              >
                {/* Project Name */}
                <div
                  className="bg-red-600 p-1 cursor-pointer"
                  onMouseLeave={() => setHoveredProject("")}
                  onMouseMove={() => setHoveredProject(project.projectName)}
                >
                  <p
                    className="text-white text-center text-sm"
                    onClick={() =>
                      setHoveredProject(
                        hoveredProject === "" ? project.projectName : ""
                      )
                    }
                  >
                    {project.projectName}
                  </p>
                </div>

                {/* Tooltip Content */}
                {hoveredProject === project.projectName && (
                  <div
                    className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center p-2 transition-all duration-300"
                    style={{
                      backgroundColor: "rgba(0,0,0,0.8)",
                      color: "white",
                    }}
                  >
                    <p className="mb-1 text-center text-sm">
                      {project.projectName}
                    </p>
                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <Link
                          className="text-lg text-white p-1 bg-gray-700 hover:bg-gray-950 rounded"
                          href={project.liveUrl}
                          target="_blank"
                        >
                          <HiExternalLink />
                        </Link>
                      )}
                      {project.githubUrl && (
                        <Link
                          className="text-lg text-white p-1 bg-gray-700 hover:bg-gray-950 rounded"
                          href={project.githubUrl}
                          target="_blank"
                        >
                          <BsGithub />
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1 mt-2">
                {project.techs.map((tech) => (
                  <p
                    className="px-1 text-xs rounded bg-blue-500 text-white"
                    key={tech}
                  >
                    {tech}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Project;
