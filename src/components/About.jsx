import React from "react";
import { motion } from "framer-motion";
import profileImage from '../assets/images/FotoCurriculo.JPG';
import curriculum from '../assets/images/Curriculum.pdf';

const About = () => {
  const handleClick = () => {
    
    const link = document.createElement('a');
    link.href = curriculum;
    link.download = 'Curriculum.pdf'; 
    document.body.appendChild(link);
    link.click(); 
    document.body.removeChild(link);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-16 bg-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="w-full md:w-1/2"
          >
            <img
              src={profileImage}
              alt="Profile"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="w-full md:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-4">Hi, I'm José Pedro Ferreira Lopes</h3>
            <p className="text-gray-700 mb-4">
            I am seeking an opportunity as a Web Developer where I can apply and expand my knowledge in web development, 
            contributing to the creation of innovative and efficient digital solutions. 
            Through self-study and personal projects, I have gained hands-on experience with technologies such as HTML, 
            CSS, JavaScript, React, Redux, TailwindCSS, Bootstrap, SASS, PHP, MySQL, PostgreeSQL. While I do not yet have professional 
            experience or experience working in a team, I am eager to bring my passion for programming, problem-solving skills, 
            and strong work ethic to a collaborative environment. My goal is to grow professionally by working on real-world projects, 
            learning from experienced team members, and continuously improving my skills to contribute meaningfully to the success of the team and the organization.
            </p>
            
            <button onClick={handleClick} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
              Download Resume
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;