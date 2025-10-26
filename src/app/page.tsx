import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="flex flex-col min-h-screen justify-center items-center bg-gradient-to-br from-indigo-100 via-white to-indigo-50">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInVariant}
        transition={{ duration: 0.8 }}
        className="text-center py-12"
      >
        {/* Profile Image */}
        <img
          src="file:///Users/akashpappala/Downloads/akash%20image.jpg"
          alt="Akash Pappala"
          className="mx-auto mb-6 rounded-full object-cover h-32 w-32 shadow-lg border-4 border-indigo-300"
        />
        <h1 className="text-5xl font-extrabold mb-4 text-indigo-900 drop-shadow-lg">
          Akash Pappala
        </h1>
        <p className="text-lg mb-6 text-gray-700 max-w-2xl mx-auto">
          B.Tech Final Year • Aspiring Software Engineer
        </p>
        <p className="text-md text-gray-600 mb-8 max-w-xl mx-auto">
          I build performant, accessible web apps using modern tech. Open for full-time software engineering roles.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a
            href="https://github.com/akashpappala"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 font-semibold transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/akash-pappala-695708256/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 font-semibold transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:akashpappala2@gmail.com"
            className="text-indigo-600 hover:text-indigo-800 font-semibold transition"
          >
            Email
          </a>
          <a
            href="https://leetcode.com/u/akash_pappala/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 font-semibold transition"
          >
            LeetCode
          </a>
          <a
            href="https://www.hackerrank.com/profile/22A31A05C2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 font-semibold transition"
          >
            HackerRank
          </a>
          <a
            href="https://x.com/AkashPappala"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 font-semibold transition"
          >
            Twitter/X
          </a>
        </div>
        <a
          href="mailto:akashpappala2@gmail.com"
          className="bg-indigo-600 text-white px-6 py-2 rounded shadow font-semibold hover:bg-indigo-700 transition"
        >
          Contact Me
        </a>
      </motion.section>

      {/* Projects Section (unchanged, scroll-animated) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInVariant}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full max-w-3xl px-4 py-8 mx-auto"
      >
        <h2 className="text-3xl font-bold text-indigo-900 mb-6 text-center">Projects</h2>
        <div className="flex flex-col gap-8">
          {/* Personal Portfolio Website */}
          <div className="bg-white rounded shadow p-6 border-l-4 border-indigo-400">
            <h3 className="text-xl font-semibold mb-2">Personal Portfolio Website</h3>
            <p className="text-gray-700 mb-2">
              Designed and deployed a responsive portfolio using HTML5, CSS3, JavaScript and Next.js to showcase projects, professional profiles, and links. Optimized page load for clarity and speed.
            </p>
            <ul className="text-gray-600 text-sm flex flex-wrap gap-4 mb-2">
              <li>Next.js</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>Tailwind CSS</li>
            </ul>
            <a
              href="https://github.com/akashpappala/my-portfolio.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 font-semibold hover:underline"
            >
              GitHub
            </a>
          </div>
          {/* AI Agent Web UI */}
          <div className="bg-white rounded shadow p-6 border-l-4 border-indigo-400">
            <h3 className="text-xl font-semibold mb-2">AI Agent Web UI</h3>
            <p className="text-gray-700 mb-2">
              Developed a browser automation agent using Python, Playwright, and LLM APIs. Implemented session storage using MySQL and interactive UI with Gradio.
            </p>
            <ul className="text-gray-600 text-sm flex flex-wrap gap-4 mb-2">
              <li>Python</li>
              <li>Playwright</li>
              <li>LLM APIs</li>
              <li>MySQL</li>
              <li>Gradio</li>
            </ul>
            <a
              href="https://github.com/akashpappala/Ai-Agent.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 font-semibold hover:underline"
            >
              GitHub
            </a>
          </div>
          {/* Travel Agency Booking System */}
          <div className="bg-white rounded shadow p-6 border-l-4 border-indigo-400">
            <h3 className="text-xl font-semibold mb-2">Travel Agency Booking System</h3>
            <p className="text-gray-700 mb-2">
              Built a full-stack application managing trips/CRUD, using Python backend and MySQL database. The UI is crafted with HTML/CSS/JavaScript for seamless booking and trip management flows.
            </p>
            <ul className="text-gray-600 text-sm flex flex-wrap gap-4 mb-2">
              <li>Python</li>
              <li>MySQL</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <a
              href="https://github.com/akashpappala/Mini-Project.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 font-semibold hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

