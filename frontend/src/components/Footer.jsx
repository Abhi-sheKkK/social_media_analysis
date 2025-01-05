import React from "react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://github.com/meekhumor/social_media_analysis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-500 transition"
          >
            <FaYoutube size={24} />
          </a>
        </div>

        {/* Brand and Copyright */}
        <p className="text-gray-400 mb-2">&copy; 2025 Socialize.ai. All rights reserved.</p>
        <p className="text-gray-400 mb-6">
          Made with <span className="text-red-500">❤️</span> by Codeblooded 
        </p>

        {/* Decorative Line */}
        <div className="h-1 w-1/2 mx-auto bg-purple1 rounded-full"></div>
      </div>
    </footer>
  );
};

export default Footer;
