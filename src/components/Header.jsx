import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll to section
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close mobile menu after click
    }
  };

  // Sync with system preference & saved theme
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setDarkMode(true);
    }
  };

  const navItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
  ];

  return (
    <header className="fixed top-0 w-full bg-black/80 dark:bg-gray-900/90 backdrop-blur-md text-white shadow-md z-50">
      <nav className="flex items-center justify-between px-6 py-3">
        {/* Logo / Name */}
        <div className="text-xl font-bold cursor-pointer" onClick={() => handleScroll("home")}>
          <span className="text-purple-400">&lt;</span>
          Nikhil<span className="text-purple-400">/</span>Singh
          <span className="text-purple-400">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-400 cursor-pointer"
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-700 transition"
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>

          {/* Social Links */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400"
          >
            <FaLinkedin size={22} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded hover:bg-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-black/90 dark:bg-gray-900/95 space-y-4 py-6 font-medium">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-400 cursor-pointer"
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}