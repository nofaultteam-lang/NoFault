import React, { useState } from "react";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home" // ✅ Changed from hero → home for consistency
      className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        fontFamily: "'Inter', 'Graphik', sans-serif",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="/assets/heroVideo.mp4"
        type="video/mp4"
      />

      {/* Navbar */}
      <nav className="flex items-center px-6 py-3 text-white w-full max-w-7xl absolute top-0 left-0 rounded-3xl z-20">
        {/* Logo */}
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => window.location.reload()}
        >
          <img
            src="/assets/logotxt1.PNG"
            alt="Logo"
            className="h-24 object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-sm justify-center flex-1">
          <li>
            <a
              href="#home"
              className="hover:scale-105 transition duration-300"
              onClick={scrollToTop}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:scale-105 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:scale-105 transition duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="hover:scale-105 transition duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#whychoose"
              className="hover:scale-105 transition duration-300"
            >
              Why Choose Us
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:scale-105 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* CTA */}
        <div className="ml-24">
          <a
            href="https://wa.me/+918077719863"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="hidden md:block border border-white rounded-full px-5 py-2 bg-white bg-opacity-40 text-black hover:bg-opacity-70 hover:scale-105 transition duration-300">
              Get Inquiry
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-white border-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </nav>

      {/* Mobile Side Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-black bg-opacity-90 z-30 p-6 flex flex-col">
          <button
            className="self-end mb-4 text-white"
            onClick={toggleMenu}
          >
            ×
          </button>
          <ul className="flex flex-col space-y-4 text-white text-lg">
            <li>
              <a href="#home" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#services" onClick={toggleMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#whychoose" onClick={toggleMenu}>
                Why Choose Us
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/8077719863"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="border border-white rounded-full px-5 py-2 bg-white text-black hover:bg-gray-200 hover:scale-105 transition duration-300"
                  onClick={toggleMenu}
                >
                  Get Inquiry
                </button>
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Hero Content */}
      <div className="max-w-3xl mx-auto text-white relative z-10 text-center mt-24">
        <h1 className="text-5xl font-extrabold mb-6">
         No Fault - Make Default
        </h1>
        <p className="mb-8 text-lg text-gray-300">
          Enhance your business with the powerfull, easy to use website  with powerful tools  that are easy to use, Productivity+ helps
          you stay productive without the overwhelm.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 hover:scale-105 transition duration-300">
           <a href="#contact"> Connect with us</a>
          </button>
          <button className="px-6 py-3 border border-white text-white rounded-full font-semibold hover:bg-white hover:text-black hover:scale-105 transition duration-300">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
