import React from "react";
import { HelpCircle } from "lucide-react"; // Lucide help icon

const HelpButton = () => {
  return (
    <a
      href="https://wa.me/919999999999" // Replace with your number or help link
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50 transition-all"
      aria-label="Need Help? Contact us"
    >
      <HelpCircle className="w-6 h-6" />
    </a>
  );
};

export default HelpButton;
