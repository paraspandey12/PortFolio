import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-12 text-white bg-gradient-to-b from-[#1F2937] to-blue-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-10 text-center">Contact Me</h2>
        <form className="max-w-lg mx-auto bg-white bg-opacity-20 p-8 rounded-lg shadow-lg">
          <label className="block mb-6">
            <span className="text-lg font-semibold text-white">Name</span>
            <input
              type="text"
              className="mt-2 block w-full px-4 py-2 text-gray-900 bg-gray-100 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </label>
          <label className="block mb-6">
            <span className="text-lg font-semibold text-white">Email</span>
            <input
              type="email"
              className="mt-2 block w-full px-4 py-2 text-gray-900 bg-gray-100 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </label>
          <label className="block mb-6">
            <span className="text-lg font-semibold text-white">Message</span>
            <textarea
              className="mt-2 block w-full px-4 py-2 text-gray-900 bg-gray-100 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows="5"
            ></textarea>
          </label>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-purple-950 text-white rounded-lg shadow-md hover:bg-purple-700 transition-transform transform hover:-translate-y-1"
          >
            Send
          </button>
        </form>
        <p className="text-center mt-6 text-lg">
          Or you can reach me at: <a href="mailto:paraspandey606@gmail.com" className="underline text-white font-semibold hover:text-purple-300 transition-colors">paraspandey606@gmail.com</a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
