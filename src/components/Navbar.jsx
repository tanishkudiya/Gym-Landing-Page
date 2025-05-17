import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <header className="bg-green-800 mx-auto dark:bg-gray-900 sticky top-0 text-white px-6 md:px-32 py-4 shadow-md flex justify-between items-center z-50">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-400 cursor-pointer">PulseFit</div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <a href="#" className="hover:text-green-400">Home</a>
          <a href="#about" className="hover:text-green-400">About</a>
          <a href="#classes" className="hover:text-green-400">Classes</a>
          <a href="#services" className="hover:text-green-400">Services</a>
          <a href="#trainers" className="hover:text-green-400">Trainers</a>
          <a href="#gallery" className="hover:text-green-400">Gallery</a>
          <a href="#contact" className="hover:text-green-400">Contact</a>
          <a href="#plans" className="hover:text-green-400">Membership</a>
        </nav>

        {/* Phone + Button + Dark Mode Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Phone */}
          <div className="text-sm font-semibold flex items-center space-x-1">
            <FaPhoneAlt />
            <span className="ml-1">+1 (555) 123-4567</span>
          </div>

          {/* Dark Mode Button */}
          <button
            onClick={toggleDarkMode}
            className="text-xl bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
            title="Toggle Dark Mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Join Button */}
          <a href="#contact">
            <button className="bg-green-400 hover:bg-green-500 text-white font-semibold px-4 py-2 rounded-full transition">
              Join Now
            </button>
          </a>
        </div>

        {/* Hamburger Icon */}
        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          <FaBars />
        </button>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[75%] bg-green-900 dark:bg-gray-900 text-white p-6 transition-transform z-40 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center mb-8">
          <div className="text-xl font-bold text-green-400 cursor-pointer">PulseFit Gym</div>
          <button onClick={closeMenu} className="text-xl">
            <FaTimes />
          </button>
        </div>

        <nav className="flex flex-col space-y-6 text-lg font-medium">
          <a href="#" onClick={closeMenu} className="hover:text-green-400">Home</a>
          <a href="#about" onClick={closeMenu} className="hover:text-green-400">About</a>
          <a href="#classes" onClick={closeMenu} className="hover:text-green-400">Classes</a>
          <a href="#services" onClick={closeMenu} className="hover:text-green-400">Services</a>
          <a href="#trainers" onClick={closeMenu} className="hover:text-green-400">Trainers</a>
          <a href="#gallery" onClick={closeMenu} className="hover:text-green-400">Gallery</a>
          <a href="#contact" onClick={closeMenu} className="hover:text-green-400">Contact</a>
          <a href="#plans" onClick={closeMenu} className="hover:text-green-400">Membership</a>
        </nav>

        {/* Mobile Extra */}
        <div className="mt-10 space-y-4 text-sm">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt />
            <span>+1 (555) 123-4567</span>
          </div>

          {/* Dark Mode Toggle in mobile */}
          <button
            onClick={toggleDarkMode}
            className="flex items-center space-x-2 mt-4 bg-white/10 hover:bg-white/20 p-2 rounded-full"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
            <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>

          <a href="#contact">
            <button className="w-full bg-green-400 hover:bg-green-500 text-white py-2 rounded-full font-semibold">
              Join Now
            </button>
          </a>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={closeMenu}
        ></div>
      )}
    </>
  );
}
