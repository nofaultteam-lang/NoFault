import React from "react";
import { Mail, MessageCircle, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="relative py-10 text-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      style={{
        backgroundImage: "url('/assets/footerbg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Flex container for logo and links/social */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <img
              src="/assets/logo.png" // Make sure this path is correct
              alt="NoFault Logo"
              className="h-12 w-auto"
            />
          </div>

          {/* Quick Links */}
          <div className="flex justify-center flex-1 md:justify-center md:space-x-6 space-x-0 text-lg font-medium flex-wrap gap-4 md:gap-0">
            <a
              href="#home"
              className="hover:text-white/80 hover:underline transition duration-300 transform hover:scale-105"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-white/80 hover:underline transition duration-300 transform hover:scale-105"
            >
              About
            </a>
            <a
              href="#services"
              className="hover:text-white/80 hover:underline transition duration-300 transform hover:scale-105"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="hover:text-white/80 hover:underline transition duration-300 transform hover:scale-105"
            >
              Portfolio
            </a>
            <a
              href="#testimonials"
              className="hover:text-white/80 hover:underline transition duration-300 transform hover:scale-105"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="hover:text-white/80 hover:underline transition duration-300 transform hover:scale-105"
            >
              Contact
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:contact@nofault.com"
              aria-label="Email"
              className="hover:text-white/80 transition transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-white/80 transition transform hover:scale-110"
            >
              <MessageCircle size={24} />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-white/80 transition transform hover:scale-110"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white/80 transition transform hover:scale-110"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-gray-300 dark:text-gray-400 text-sm text-center mt-8">
          © 2025 NoFault. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
