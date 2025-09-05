import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "saturate(150%) brightness(125%)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20 pt-6">
        {/* Left Logo */}
        <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <img
            src="/assets/logotxt1.PNG"
            alt="Logo"
            className="h-16 md:h-14 object-contain"
            style={{
              filter: "none",
              color: "#111",
              textShadow: "2px 2px 0 #555, 4px 4px 0 #333",
            }}
          />
        </div>

        {/* Center Circular Menu */}
        <div className="flex space-x-6 rounded-full px-6 py-2 shadow-lg backdrop-filter backdrop-saturate-150 backdrop-brightness-125">
          <a
            href="#home"
            className="text-black hover:text-gray-700 px-3 py-1 rounded-full transition"
          >
            Home
          </a>
          <a
            href="#features"
            className="text-black hover:text-gray-700 px-3 py-1 rounded-full transition"
          >
            Features
          </a>
          <a
            href="#testimonials"
            className="text-black hover:text-gray-700 px-3 py-1 rounded-full transition"
          >
            Testimonials
          </a>
          <a
            href="#faqs"
            className="text-black hover:text-gray-700 px-3 py-1 rounded-full transition"
          >
            FAQs
          </a>
        </div>

        {/* Right Download Button */}
        <div>
          <a
            href="#download"
            className="flex items-center space-x-2 backdrop-filter backdrop-saturate-150 backdrop-brightness-125 hover:bg-gray-700 text-black px-4 py-2 rounded-full shadow-md transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
              />
            </svg>
            <span>Download</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
