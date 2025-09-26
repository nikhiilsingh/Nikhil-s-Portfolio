import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const navLinks = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Education", id: "education" },
];

const socialLinks = [
  { icon: <FaFacebook />, link: "https://www.facebook.com/tarun.kaushik.3511041/", label: "Facebook" },
  { icon: <FaTwitter />, link: "https://twitter.com/CodingMaster6?s=09", label: "Twitter" },
  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/tarun-kaushik-553b441a4", label: "LinkedIn" },
  { icon: <FaInstagram />, link: "https://www.instagram.com/coding_.master/", label: "Instagram" },
  // { icon: <FaYoutube />, link: "https://www.youtube.com/codingmasteryt", label: "YouTube" },
];

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-black py-8 px-6 md:px-12 lg:px-24 max-w-[1200px] mx-auto">
      {/* Name / Logo */}
      <h2 className="text-xl font-semibold text-purple-500 text-center">Nikhil Singh</h2>

      {/* Navigation Links */}
      <nav
        className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4"
        aria-label="Footer navigation"
      >
        {navLinks.map(({ name, id }) => (
          <button
            key={id}
            onClick={() => handleScroll(id)}
            className="hover:text-purple-500 text-sm sm:text-base my-1 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded"
            aria-label={`Scroll to ${name} section`}
          >
            {name}
          </button>
        ))}
      </nav>

      {/* Social Media Icons */}
      <ul className="flex flex-wrap justify-center space-x-4 mt-6" aria-label="Social media links">
        {socialLinks.map(({ icon, link, label }) => (
          <li key={label}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
              aria-label={`Visit Tarun Kaushik's ${label} profile`}
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>

      {/* Copyright */}
      <p className="text-sm text-gray-800 mt-6 text-center">
        © 2025 Nikhil Singh. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;