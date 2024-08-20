import React from 'react';
import { FaJs, FaJava, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiC, SiPython, SiMysql, SiPowerbi } from 'react-icons/si';
import { motion } from 'framer-motion';

function Skills() {
  return (
    <section className="min-h-screen py-10 bg-gradient-to-b from-[#1F2937] to-blue-950 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-white">Skills</h2>

        <div className="flex flex-col gap-6 sm:flex-row sm:gap-8 flex-wrap">

         
          <motion.div
            className="flex-1 min-w-[250px] bg-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <FaJs className="h-10 w-10 text-teal-300 mr-4" />
              <h3 className="text-2xl font-semibold text-teal-300">Languages</h3>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li className="flex items-center"><FaJs className="h-6 w-6 text-yellow-400 mr-2" /> JavaScript (ES6+)</li>
              <li className="flex items-center"><FaHtml5 className="h-6 w-6 text-orange-600 mr-2" /> HTML5</li>
              <li className="flex items-center"><FaCss3Alt className="h-6 w-6 text-blue-600 mr-2" /> CSS3</li>
              <li className="flex items-center"><FaJava className="h-6 w-6 text-red-600 mr-2" /> Java</li>
              <li className="flex items-center"><SiC className="h-6 w-6 text-gray-600 mr-2" /> C</li>
              <li className="flex items-center"><SiPython className="h-6 w-6 text-blue-500 mr-2" /> Python</li>
            </ul>
          </motion.div>

          <motion.div
            className="flex-1 min-w-[250px] bg-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <FaReact className="h-10 w-10 text-teal-300 mr-4" />
              <h3 className="text-2xl font-semibold text-teal-300">Frameworks/Libraries</h3>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li className="flex items-center"><FaReact className="h-6 w-6 text-cyan-400 mr-2" /> React.js</li>
              <li className="flex items-center"><span className="h-6 w-6 text-blue-500 mr-2">🔵</span> Tailwind CSS</li>
            </ul>
          </motion.div>

        
          <motion.div
            className="flex-1 min-w-[250px] bg-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <FaNodeJs className="h-10 w-10 text-teal-300 mr-4" />
              <h3 className="text-2xl font-semibold text-teal-300">Tools & Technologies</h3>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li className="flex items-center"><FaNodeJs className="h-6 w-6 text-green-500 mr-2" /> Node.js</li>
              <li className="flex items-center"><FaGitAlt className="h-6 w-6 text-orange-500 mr-2" /> Git</li>
              <li className="flex items-center"><span className="h-6 w-6 text-yellow-500 mr-2">🔧</span> npm/yarn</li>
              <li className="flex items-center"><span className="h-6 w-6 text-gray-500 mr-2">🔗</span> RESTful APIs</li>
            </ul>
          </motion.div>

          
          <motion.div
            className="flex-1 min-w-[250px] bg-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <SiMysql className="h-10 w-10 text-teal-300 mr-4" />
              <h3 className="text-2xl font-semibold text-teal-300">Databases & Analysis</h3>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li className="flex items-center"><SiMysql className="h-6 w-6 text-blue-500 mr-2" /> MySQL</li>
              <li className="flex items-center"><SiPowerbi className="h-6 w-6 text-yellow-600 mr-2" /> Power BI</li>
              <li className="flex items-center"><span className="h-6 w-6 text-purple-600 mr-2">📊</span> Data Analysis</li>
            </ul>
          </motion.div>

          

        </div>
      </div>
    </section>
  );
}

export default Skills;
