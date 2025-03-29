import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
 

  const projects = [
    {
      id: 1,
      title: "MasterD Project",
      description: "A project that i made in my course at master D, i used PHP, HTML, CSS and MySQL.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt1K_-egRpz0HcImRL3zCoPcc-4Odtnq0Qyw&s",
      link: "http://phpmysqlproject.kesug.com",
    },
    {
      id: 2,
      title: "Shop App",
      description: "A shop that i made in PHP, HTML, CSS and MySQL.",
      image: "https://shopinporto.porto.pt/wp-content/uploads/2019/07/Mercearia-Bolh%C3%A3o_166__DSC0688.jpg",
      link: "http://mercearia1.lovestoblog.com/",
    },
    {
      id: 3,
      title: "Drum Machine",
      description: "A drum machine that i made in React.",
      image: "https://pt.yamaha.com/pt/files/TourCustom-CAS_z_0002_b12ed6c1a76f1bafc7fc4b2df96ef297.jpg?impolicy=resize&imwid=2400&imhei=960",
      link: "https://joselopes92.github.io/drum-machine/",
    },
    {
      id: 4,
      title: "Snake Game",
      description: "A snake game that i made in Javascript.",
      image: "https://wallpapers.com/images/hd/green-snake-game-character-bqvxt2p5oibadgqn.jpg",
      link: "https://joselopes92.github.io/SnakeGameJS/",
    },
    {
      id: 5,
      title: "Tik Tak Toe",
      description: "A Tik Tak Toe game that i made in Javascript.",
      image: "https://as1.ftcdn.net/v2/jpg/06/15/41/72/1000_F_615417282_RM74va9wUJcqi8vt8vi8gVTxaQAutqr4.jpg",
      link: "https://joselopes92.github.io/TicTacToeJS2/",
    },
    {
      id: 6,
      title: "Login-Logout with postgreeSQL",
      description: "A Project that i made with react and postgreeSQL to learn database.",
      image: "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?cs=srgb&dl=pexels-fauxels-3183186.jpg&fm=jpg",
      link: "https://loginlogout-app.vercel.app/Login",
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Visit Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;