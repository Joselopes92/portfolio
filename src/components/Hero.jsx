import React from 'react';
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white'
        >
           <motion.h1
           initial={{ y: -50, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay: 0.5, duration: 1 }}
           className='text-6x1 font-bold mb-4'
           >
            Hi, I'm José Pedro Ferreira Lopes
            </motion.h1> 
            <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="text-2x1"
            >
            A Web Developer passionate about building modern web applications.
            </motion.p>
        </motion.section>
    );
};



export default Hero;