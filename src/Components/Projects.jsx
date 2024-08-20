import React from 'react';

function Projects() {
  return (
    <div className="bg-gradient-to-b from-[#2D3748] to-[#1A202C] text-white m-4 p-8 rounded-lg shadow-lg min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">Projects</h1>
      <div className='flex flex-col gap-6 sm:flex-row sm:gap-6'>
        <div className='border border-gray-600 text-teal-400 p-6 rounded-lg shadow-md flex-1'>
          <h2 className='text-2xl font-semibold underline mb-2 text-teal-300'>News App</h2>
          <p className='mb-4 text-gray-300'>Technologies: React.js, JavaScript, HTML, CSS, World News API</p>
          <ul className='list-disc list-inside mb-4 text-gray-200'>
            <li>• Built a news application to display the latest headlines using the World News API.</li>
            <li>• Implemented dynamic news fetching and rendering using React.js and asynchronous API calls.</li>
            <li>• Created a responsive layout with CSS Grid and Flexbox to ensure compatibility across various devices.</li>
            <li>• Added search and filter functionality to help users find relevant news articles easily.</li>
          </ul>
          <a href='https://github.com/paraspandey12/NewsApp.git' className='text-teal-400 hover:text-teal-500'>GitHub Link</a>
        </div>

        <div className='border border-gray-600 bg-gray-900 p-6 rounded-lg shadow-md flex-1'>
          <h2 className='text-2xl font-semibold underline mb-2 text-teal-400'>Ecommerce</h2>
          <p className='mb-4 text-gray-300'>Technologies: React.js, JavaScript, HTML, Tailwind CSS</p>
          <ul className='list-disc list-inside mb-4 text-gray-200'>
            <li>• Built a personal portfolio website to showcase projects and skills.</li>
            <li>• Utilized React.js to create a dynamic and interactive user experience.</li>
            <li>• Implemented routing with React Router and managed state with React Hooks.</li>
            <li>• Designed a responsive layout to ensure compatibility across devices.</li>
          </ul>
          <a href='https://github.com/paraspandey12/EcommerceReact.git' className='text-teal-400 hover:text-indigo-500'>GitHub Link</a>
        </div>

        <div className='border border-gray-600 bg-gray-700 p-6 rounded-lg shadow-md flex-1'>
          <h2 className='text-2xl font-semibold underline mb-2 text-teal-400'>TaskTracker</h2>
          <p className='mb-4 text-gray-300'>Technologies: React.js, JavaScript, HTML, CSS, Node.js</p>
          <ul className='list-disc list-inside mb-4 text-gray-200'>
            <li>• Developed a task management application to track and manage daily tasks.</li>
            <li>• Implemented CRUD operations for tasks using React.js and managed state with React Hooks.</li>
            <li>• Designed a clean and intuitive user interface with CSS and Bootstrap for responsive design.</li>
            <li>• Integrated local storage to persist user data and ensure a seamless user experience.</li>
          </ul>
          <a href='https://github.com/paraspandey12/TaskTracker.git' className='text-teal-400 hover:text-orange-500'>GitHub Link</a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
