"use client";
import React, { Fragment, useState } from "react";
import Link from "next/link";
import { CgWebsite } from "react-icons/cg";
import { HiExternalLink } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
  const [activeSection, setActiveSection] = useState("All");
  const [hoveredProject, setHoveredProject] = useState("");

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
        techs: ["React", "Tailwind", "Firebase", "Redux Toolkit"],
      },
      {
        projectName: "TeachHub",
        liveUrl: "https://aljafarawy-teach-hub.vercel.app/",
        githubUrl: "https://github.com/Al-Jafarawy/TeachHub.git",
        projectImage: { imageUrl: "/images/teach.png" },
        techs: ["React", "Tailwind", "Firebase", "Redux Toolkit"],
      },
      {
        projectName: "ToDo List",
        liveUrl: "https://al-jafarawy.github.io/Todo-List/",
        githubUrl: "https://github.com/Al-Jafarawy/Todo-List.git",
        projectImage: { imageUrl: "/images/todo.png" },
        techs: ["React", "Tailwind", "Firebase", "Redux Toolkit"],
      },
    ],
    JavaScript: [
      {
        projectName: "YouTube Simulation",
        liveUrl: "https://al-jafarawy.github.io/Youtube/",
        githubUrl: "",
        projectImage: { imageUrl: "/images/youtube.png" },
        techs: ["HTML", "CSS", "GitHub"],
      },
      {
        projectName: "Amazon Simulation",
        liveUrl: "https://al-jafarawy.github.io/Amazon/amazon.html",
        githubUrl: "https://github.com/Al-Jafarawy/Amazon.git",
        projectImage: { imageUrl: "/images/amazon.png" },
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
      {
        projectName: "Dream Homes",
        liveUrl: "https://al-jafarawy.github.io/DreamHomes/",
        githubUrl: "https://github.com/Al-Jafarawy/DreamHomes.git",
        projectImage: { imageUrl: "/images/DreamHomes.png" },
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

  return (
    <Fragment>
      <section className="py-8 px-4 max-w-6xl mx-auto" id="project">
        <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3 mb-4 mt-10">
          <CgWebsite /> Projects
        </h2>
        <hr className="border-t-4 w-20 mx-auto mb-8 border-pink-600 dark:border-cyan-400" />

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["All", "React", "JavaScript", "CSS"].map((sec) => (
            <button
              className={` px-6 py-2 rounded font-semibold transition-all ${
                activeSection === sec
                  ? "bg-[#c72c6c] text-white dark:bg-[#07d0e5]"
                  : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
              } hover:bg-[#a02648] hover:text-white dark:hover:bg-[#035f6b]
    `}
              key={sec}
              onClick={() => setActiveSection(sec)}
            >
              {sec} Projects
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2">
          {displayProjects.map((project, index) => (
            <div
              className="relative flex flex-col rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
              key={project.projectName}
              onMouseEnter={() => setHoveredProject(project.projectName)}
              onMouseLeave={() => setHoveredProject("")}
              style={{
                animation: "popUp 0.5s ease forwards",
                animationDelay: `${index * 0.15}s`,
              }}
            >
              <img
                alt={`${project.projectName} preview`}
                className="w-full h-52 object-cover"
                loading="lazy"
                src={project.projectImage.imageUrl}
              />
              <hr className="h-1 bg-gray-400 border-none rounded-sm" />
              <div className="flex flex-wrap justify-center gap-2 p-2 bg-gray-200">
                {project.techs.map((tech) => (
                  <span
                    className="bg-blue-500 text-white text-xs px-2 py-1 rounded"
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="bg-[#c72c6c]  dark:bg-[#07d0e5] text-white text-center py-2 font-medium">
                {project.projectName}
              </div>

              {hoveredProject === project.projectName && (
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center gap-3 transition-opacity">
                  {project.liveUrl && (
                    <Link
                      aria-label={`Visit ${project.projectName} live site`}
                      className="p-2 bg-gray-800 text-white rounded hover:bg-gray-600"
                      href={project.liveUrl}
                      target="_blank"
                    >
                      <HiExternalLink />
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link
                      aria-label={`View ${project.projectName} GitHub repository`}
                      className="p-2 bg-gray-800 text-white rounded hover:bg-gray-600"
                      href={project.githubUrl}
                      target="_blank"
                    >
                      <BsGithub />
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
