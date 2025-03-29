import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{duration: 0.5}}
        className="fixed top-0 w-full bg-white shadow-lg z-50">
            <div className="container mx-auto flex justify-between items-center p-4">
                <Link to="/" className="text-2x1 font-bold text-gray-800">
                My Portfolio
                </Link>
                <div className="space-x-4">
                    <Link to="/" className="text-gray-800 hover:text-blue-500">
                    Home
                    </Link>
                    <Link to="/about" className="text-gray-800 hover:text-blue-500">
                    About
                    </Link>
                    <Link to="/projects" className="text-gray-800 hover:text-blue-500">
                    Projects
                    </Link>
                    <Link to="/contact" className="text-gray-800 hover:text-blue-500">
                    Contact
                    </Link>
                </div>
            </div>
        </motion.nav>
    );

};

export default Navbar;