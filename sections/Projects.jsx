"use client";

import React, { Fragment, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { CgWebsite } from "react-icons/cg";
import { HiExternalLink } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
  const [activeSection, setActiveSection] = useState("All");
  const [hoveredProject, setHoveredProject] = useState("");
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const ProjectsData = {
    React: [
      {
        projectName: "Bayti-Home",
        liveUrl: "https://bayti-home.vercel.app/",
        githubUrl: "https://github.com/Al-Jafarawy/Bayti-Home.git",
        projectImage: { imageUrl: "/images/bayti-home.png" },
        techs: ["ReactJS", "ContextAPI", "Redux Toolkit", "Redux"],
      },
      {
        projectName: "Reno Smile",
        liveUrl: "https://reno-smile.vercel.app/",
        githubUrl: "https://github.com/Al-Jafarawy/reno-smile.git",
        projectImage: { imageUrl: "/images/reno-smile.png" },
        techs: ["React", "Tailwind", "API", "Redux Toolkit"],
      },
      {
        projectName: "TeachHub",
        liveUrl: "https://aljafarawy-teach-hub.vercel.app/",
        githubUrl: "https://github.com/Al-Jafarawy/TeachHub.git",
        projectImage: { imageUrl: "/images/teach.png" },
        techs: ["React Vite", "Tailwind", "TypeScript", "Vercel"],
      },
    ],
    JavaScript: [
      {
        projectName: "Amazon Simulation",
        liveUrl: "https://al-jafarawy.github.io/Amazon/amazon.html",
        githubUrl: "https://github.com/Al-Jafarawy/Amazon.git",
        projectImage: { imageUrl: "/images/amazon.png" },
        techs: ["HTML", "CSS", "GitHub", "Vanilla JS"],
      },

      {
        projectName: "Café Aroma",
        liveUrl: "https://al-jafarawy.github.io/coffee-project-js/",
        githubUrl: "https://github.com/Al-Jafarawy/coffee-project-js.git",
        projectImage: { imageUrl: "/images/coffee.png" },
        techs: ["HTML", "CSS", "GitHub", "Vanilla JS"],
      },
      {
        projectName: "Hang Man Game",
        liveUrl: "https://al-jafarawy.github.io/Hang-Man-Game/",
        githubUrl: "https://github.com/Al-Jafarawy/Hang-Man-Game.git",
        projectImage: { imageUrl: "/images/hangman.png" },
        techs: ["HTML", "CSS", "GitHub", "Vanilla JS"],
      },
    ],
    CSS: [
      {
        projectName: "Kasper",
        liveUrl: "https://al-jafarawy.github.io/Kasper-elzero/",
        githubUrl: "https://github.com/Al-Jafarawy/Kasper-elzero.git",
        projectImage: { imageUrl: "/images/kasper.png" },
        techs: ["HTML", "CSS3", "Animations", "Keyframes", "GitHub"],
      },
      {
        projectName: "Japanese Restaurant",
        liveUrl: "https://al-jafarawy.github.io/Old-CSS-Practicing/index",
        githubUrl: "https://github.com/Al-Jafarawy/Old-CSS-Practicing.git",
        projectImage: { imageUrl: "/images/japan.png" },
        techs: ["HTML", "CSS3", "Animations", "Keyframes", "GitHub"],
      },
      {
        projectName: "Old Portfolio",
        liveUrl: "https://al-jafarawy.github.io/Al-Jafarawy/",
        githubUrl: "https://github.com/Al-Jafarawy/Al-Jafarawy.git",
        projectImage: { imageUrl: "/images/portfolio.png" },
        techs: ["HTML", "CSS3", "Animations", "Keyframes"],
      },
    ],
  };

  const allProjects = [
    ...ProjectsData.React,
    ...ProjectsData.JavaScript,
    ...ProjectsData.CSS,
  ];

  const displayProjects =
    activeSection === "All" ? allProjects : ProjectsData[activeSection];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Fragment>
      <section
        className="py-10 px-4 max-w-7xl mx-auto bg-red-50 bg-red-50 dark:bg-[#1a1a1a]  rounded-lg mb-20  mt-20 scroll-mt-20"
        id="project"
        ref={sectionRef}
      >
        <h2 className="text-4xl font-bold flex items-center justify-center gap-3 mb-4">
          <CgWebsite /> Projects
        </h2>
        <hr className="border-t-4 w-24 mx-auto mb-10 border-pink-600 dark:border-cyan-400 " />

        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {["All", "React", "JavaScript", "CSS"].map((sec) => (
            <button
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300
              ${
                activeSection === sec
                  ? "bg-gradient-to-r from-pink-600 to-pink-400 text-white dark:from-cyan-500 dark:to-cyan-300"
                  : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
              } 
              hover:scale-105 hover:shadow-lg`}
              key={sec}
              onClick={() => setActiveSection(sec)}
            >
              {sec} Projects
            </button>
          ))}
        </div>

        <div
          className={`grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {displayProjects.map((project) => (
            <div
              className="relative flex flex-col rounded-xl overflow-hidden shadow-md transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
              key={project.projectName}
              onMouseEnter={() => setHoveredProject(project.projectName)}
              onMouseLeave={() => setHoveredProject("")}
            >
              <img
                alt={`${project.projectName} preview`}
                className="w-full h-52 object-cover"
                loading="lazy"
                src={project.projectImage.imageUrl}
              />
              <div className="flex flex-wrap justify-center gap-2 p-3 bg-gray-100 dark:bg-[#0a0f1f]">
                {project.techs.map((tech) => (
                  <span
                    className="bg-gradient-to-r from-blue-500 to-blue-400 text-white text-xs px-2 py-1 rounded-full"
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="bg-gradient-to-r from-pink-600 to-pink-400 dark:from-cyan-500 dark:to-cyan-300 text-white text-center py-3 font-medium text-lg">
                {project.projectName}
              </div>

              {hoveredProject === project.projectName && (
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center gap-4 transition-opacity rounded-xl">
                  {project.liveUrl && (
                    <Link
                      aria-label={`Visit ${project.projectName} live site`}
                      className="p-3 bg-white text-gray-800 rounded-full hover:bg-gray-200 hover:scale-110 transition-all"
                      href={project.liveUrl}
                      target="_blank"
                    >
                      <HiExternalLink size={20} />
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link
                      aria-label={`View ${project.projectName} GitHub repository`}
                      className="p-3 bg-white text-gray-800 rounded-full hover:bg-gray-200 hover:scale-110 transition-all"
                      href={project.githubUrl}
                      target="_blank"
                    >
                      <BsGithub size={20} />
                    </Link>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Projects;
