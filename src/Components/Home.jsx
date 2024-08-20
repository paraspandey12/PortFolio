import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  return (
    <section id="home" className="bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col justify-center items-center h-screen text-center py-12 px-6">
      <motion.h2
        className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to My Portfolio
      </motion.h2>
      <motion.p
        className="text-lg md:text-2xl mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Hi, I'm Paras Pandey, a Frontend Developer Specializing in React.js.
      </motion.p>
      <motion.p
        className="text-md md:text-lg mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        I create dynamic and responsive web applications with React.js, delivering intuitive user experiences and high-performance solutions.
      </motion.p>
      <div className="flex flex-col md:flex-row md:space-x-4">
        <motion.a
          href="/projects"
          className="bg-teal-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-teal-600 transition-transform transform hover:scale-105 mb-4 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          View My Work
        </motion.a>
        <motion.a
          href="/contact"
          className="bg-gray-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-gray-700 transition-transform transform hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Contact Me
        </motion.a>
      </div>
    </section>
  );
}

export default Home;
