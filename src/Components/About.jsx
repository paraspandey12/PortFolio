import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaJs, FaGithub } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

function About() {
  return (
    <section className="min-h-screen py-10 bg-gradient-to-b from-[#1F2937] to-blue-950 text-white">
      <div className="container mx-auto px-4">

        <div className="bg-white bg-opacity-20 rounded-lg shadow-lg p-6 mb-10 sm:mx-auto sm:w-3/4 lg:w-2/3">
          <h2 className="text-center text-4xl font-extrabold mb-6">About Me</h2>
          <p className="text-center text-lg md:text-xl leading-relaxed">
            My name is <span className="font-bold text-indigo-200">Paras Pandey</span>. With a background in computer science and a passion for web development, I specialize in building sleek and scalable applications using React.js and modern frontend technologies.
          </p>
        </div>

       
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold mb-6 text-white">Technologies I Use</h3>
          <div className="flex justify-center gap-6 flex-wrap">
            <div className="flex flex-col items-center">
              <FaReact className="text-blue-400 text-5xl mb-2" />
              <span className="text-white">React.js</span>
            </div>
            <div className="flex flex-col items-center">
              <FaHtml5 className="text-orange-600 text-5xl mb-2" />
              <span className="text-white">HTML5</span>
            </div>
            <div className="flex flex-col items-center">
              <FaCss3Alt className="text-blue-600 text-5xl mb-2" />
              <span className="text-white">CSS3</span>
            </div>
            <div className="flex flex-col items-center">
              <SiTailwindcss className="text-blue-400 text-5xl mb-2" />
              <span className="text-white">Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center">
              <FaNodeJs className="text-green-500 text-5xl mb-2" />
              <span className="text-white">Node.js</span>
            </div>
            <div className="flex flex-col items-center">
              <FaJs className="text-yellow-400 text-5xl mb-2" />
              <span className="text-white">JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <FaGithub className="text-gray-500 text-5xl mb-2" />
              <span className="text-white">GitHub</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
