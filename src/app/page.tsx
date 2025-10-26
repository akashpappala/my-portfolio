import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-center items-center bg-gradient-to-br from-indigo-100 via-white to-indigo-50">
      <section className="text-center py-12">
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
        </div>
        <a
          href="mailto:akashpappala2@gmail.com"
          className="bg-indigo-600 text-white px-6 py-2 rounded shadow font-semibold hover:bg-indigo-700 transition"
        >
          Contact Me
        </a>
      </section>
    </main>
  );
}
