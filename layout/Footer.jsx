import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { MdFeedback } from "react-icons/md";
import { useEffect, useState } from "react";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleFeedbackClick = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // ESC close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

 return (
  <footer className="relative overflow-hidden text-gray-700 dark:text-gray-300 transition-colors duration-300 
    bg-gradient-to-br from-gray-100 via-indigo-100 to-white 
    dark:from-gray-900 dark:via-indigo-900 dark:to-black">
    <div className="container mx-auto px-6 py-12 relative z-10 max-w-7xl">
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="mb-4 text-3xl font-extrabold tracking-wide text-indigo-900 dark:text-white leading-tight">
            Ahmed
            <span className="inline md:block">Al-Jafarawy</span>
          </h2>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs mx-auto md:mx-0">
            Portfolio showcasing projects, skills, and freelance experience in modern web development.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="mb-4 text-lg font-bold text-indigo-900 dark:text-white uppercase tracking-wide">
            Navigate
          </h3>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Skills", "Projects", "Experience"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block transition-all hover:text-indigo-500 dark:hover:text-indigo-400 hover:-translate-x-1"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center md:text-left">
          <h3 className="mb-4 text-lg font-bold text-indigo-900 dark:text-white uppercase tracking-wide">
            Contact
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                className="transition-colors hover:text-indigo-500 dark:hover:text-indigo-400"
                href="mailto:prog.al.jafarawy@gmail.com"
              >
                prog.al.jafarawy@gmail.com
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-indigo-500 dark:hover:text-indigo-400"
                href="https://wa.me/201113802924"
                target="_blank"
                rel="noopener noreferrer"
              >
                +201113802924
              </a>
            </li>
            <li className="text-gray-600 dark:text-gray-400">
              Damanhour, Al Beheira, Egypt
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-left">
          <h3 className="mb-4 text-lg font-bold text-indigo-900 dark:text-white uppercase tracking-wide">
            Connect
          </h3>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start sm:grid sm:grid-rows-2 sm:auto-cols-auto sm:grid-flow-col sm:ml-16">
            {[
              {
                href: "https://www.linkedin.com/in/ahmed-al-jafarawy/",
                icon: <FaLinkedinIn size={18} />,
                gradient: "from-blue-500 to-blue-700",
              },
              {
                href: "https://github.com/Al-Jafarawy",
                icon: <FaGithub size={18} />,
                gradient: "from-gray-800 to-black",
              },
              {
                href: "https://www.facebook.com/ahmed.mo.al.jafarawy/",
                icon: <FaFacebookF size={18} />,
                gradient: "from-blue-600 to-blue-400",
              },
              {
                href: "https://x.com/AlJafarawy",
                icon: <FaTwitter size={18} />,
                gradient: "from-sky-500 to-sky-300",
              },
              {
                href: "https://www.instagram.com/ahmed_mo_aljafarawy/",
                icon: <FaInstagram size={18} />,
                gradient: "from-pink-500 to-orange-500",
              },
            ].map(({ href, icon, gradient }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-r ${gradient} text-white transition transform hover:scale-110`}
              >
                {icon}
              </a>
            ))}
            <button
              aria-label="Feedback"
              onClick={handleFeedbackClick}
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-green-700 text-white transition transform hover:scale-110"
            >
              <MdFeedback size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-gray-300 dark:border-indigo-900 pt-6 text-center text-xs text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Ahmed Al-Jafarawy. Built with passion.
      </div>
    </div>

    {/* Feedback Modal */}
    {showModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl max-w-md w-full transition-colors duration-300">
          <button
            className="absolute top-2 right-2 text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400"
            onClick={closeModal}
          >
            ×
          </button>
          <h3 className="text-xl font-bold text-indigo-900 dark:text-white mb-4">
            Share Your Feedback
          </h3>
          <textarea
            className="w-full h-28 p-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-indigo-900 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400"
            placeholder="Your feedback here..."
          ></textarea>
          <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-500 transition">
            Submit
          </button>
        </div>
      </div>
    )}
  </footer>
);

};

export default Footer;