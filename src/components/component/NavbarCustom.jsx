import React from "react";

const NavbarCustom = () => {
  return (
    <nav
      className="flex items-center justify-between px-3 py-2 text-white left-0 w-full max-w-7xl rounded-none z-50"
      style={{
        backgroundImage: "url('/assets/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-1 ml-4">
        <img
          src="/assets/logotxt1.PNG"
          alt="Logo"
          className="h-32 object-contain"
        />
        {/* Removed the vertical bar next to the logo */}
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-8 text-base justify-center flex-1">
        <li>
          <a href="#home" className="hover:text-yellow-400 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#features" className="hover:text-yellow-400 transition">
            Features
          </a>
        </li>
        <li>
          <a href="#testimonials" className="hover:text-yellow-400 transition">
            Testimonials
          </a>
        </li>
        <li>
          <a href="#faqs" className="hover:text-yellow-400 transition">
            FAQs
          </a>
        </li>
      </ul>

      {/* Download Button */}
      <button className="border border-white rounded-full px-5 py-2 bg-white bg-opacity-40 text-black hover:bg-opacity-70 hover:text-black transition mr-8 shadow-lg shadow-gray-500/50">
        Download
      </button>
    </nav>
  );
};

export default NavbarCustom;
