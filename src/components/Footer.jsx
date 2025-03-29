import React from "react";
import { FaGithub, FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/Joselopes92"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/josé-pedro-lopes-08baa429b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} José Lopes. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;