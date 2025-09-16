import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 pb-7 pt-10 text-gray-400 via-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand Info */}
          <div>
            <h2 className="mb-4 text-3xl font-bold text-white">Bayti Home</h2>
            <p className="text-sm leading-relaxed text-gray-400">
              Where modern buildings are available for rent and sale worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="transition-colors hover:text-white" href="#">
                  Home
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-white"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-white" href="/rent">
                  Skills 
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-white" href="#expericence">
                  Projects
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-white" href="/sell">
                  Experience
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="transition-colors hover:text-white"
                  href="mailto:prog.al.jafarawy@gmail.com"
                >
                  prog.al.jafarawy@gmail.com
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-white"
                  href="https://wa.me/201113802924"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  +201113802924
                </a>
              </li>
              <li className="text-gray-400">Damanhour, Al Beheira, Egypt</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Follow Us</h3>
            <div className="grid grid-rows-2 gap-4">
              {/* Row 1 */}
              <div className="grid auto-cols-auto grid-flow-col justify-start gap-4">
                <a
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 transition hover:border-white hover:text-white"
                  href="https://www.linkedin.com/in/ahmed-al-jafarawy/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 transition hover:border-white hover:text-white"
                  href="https://github.com/Al-Jafarawy"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaGithub />
                </a>
                <a
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 transition hover:border-white hover:text-white"
                  href="https://www.facebook.com/ahmed.mo.al.jafarawy/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaFacebookF />
                </a>
              </div>

              {/* Row 2 */}
              <div className="grid auto-cols-auto grid-flow-col justify-start gap-4">
                <a
                  aria-label="Twitter"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 transition hover:border-white hover:text-white"
                  href="https://x.com/AlJafarawy"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaTwitter />
                </a>
                <a
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 transition hover:border-white hover:text-white"
                  href="https://www.instagram.com/ahmed_mo_aljafarawy/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Ahmed Al-Jafarawy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
