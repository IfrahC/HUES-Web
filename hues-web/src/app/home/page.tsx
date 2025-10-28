"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-[Montserrat]">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-[#404040]/30 bg-[#0d0d0d]/90 backdrop-blur">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#00ffff] to-blue-500 flex items-center justify-center font-bold text-black">
              H
            </div>
            <h1 className="text-xl md:text-2xl font-extrabold tracking-wide">
              HABIB UNIVERSITY{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-blue-500">
                ENTREPRENEURSHIP
              </span>{" "}
              SOCIETY
            </h1>
          </div>
          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-8 text-lg">
            {["Home", "About", "Programs", "Join"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative font-medium transition-colors duration-300 hover:text-[#00ffff]"
              >
                {item}
              </a>
            ))}
          </nav>
          {/* Mobile nav button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
        {/* Mobile dropdown */}
        {isOpen && (
          <div className="md:hidden bg-[#1a1a1a] px-6 py-4 space-y-4">
            {["Home", "About", "Programs", "Join"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block font-medium hover:text-[#00ffff]"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="text-center py-28 min-h-[80vh] flex flex-col justify-center items-center relative overflow-hidden"
      >
        <h2 className="text-6xl md:text-7xl font-black mb-6 uppercase leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-blue-500 drop-shadow-lg">
            Innovate.
          </span>{" "}
          Create. Inspire.
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          At <span className="font-bold">HUES</span>, we empower aspiring
          entrepreneurs and innovators at Habib University to turn bold ideas
          into reality.
        </p>
        <a
          href="#join"
          className="bg-gradient-to-r from-[#00ffff] to-blue-500 text-black font-bold py-3 px-10 rounded-full text-lg transition-transform transform hover:scale-105 shadow-lg"
        >
          Join the Movement
        </a>
      </section>

      {/* About */}
      <section id="about" className="py-20 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-blue-500">
            About Us
          </span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "💡",
              title: "Our Mission",
              text: "To cultivate a culture of creativity, problem-solving, and leadership by providing students with mentorship and resources.",
            },
            {
              icon: "🚀",
              title: "What We Do",
              text: "From speaker sessions to startup competitions, we bring together innovators ready to shape the future.",
            },
            {
              icon: "🌍",
              title: "Our Impact",
              text: "Building a vibrant entrepreneurial ecosystem at Habib University and beyond.",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a1a] border border-[#404040] rounded-xl p-8 text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_#00ffff]"
            >
              <div className="text-5xl mb-4">{card.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-20 bg-[#111111]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-blue-500">
              Our Programs
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Workshops",
                text: "Hands-on sessions that help students build entrepreneurial skills.",
              },
              {
                title: "Startup Challenges",
                text: "Pitch competitions and hackathons to test and grow ideas.",
              },
              {
                title: "Networking Events",
                text: "Opportunities to connect with mentors, alumni, and investors.",
              },
            ].map((program, idx) => (
              <div
                key={idx}
                className="bg-[#1a1a1a] border border-[#404040] rounded-xl p-8 hover:-translate-y-2 hover:shadow-[0_0_25px_#00ffff] transition-transform duration-300"
              >
                <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                <p className="text-gray-400 leading-relaxed">{program.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join */}
      <section id="join" className="py-20 container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-blue-500">
            Join HUES
          </span>
        </h2>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          Be part of a community that thrives on innovation and leadership.
          Whether you’re a dreamer or a doer, there’s a place for you at HUES.
        </p>
        <a
          href="#"
          className="inline-block bg-gradient-to-r from-[#00ffff] to-blue-500 text-black font-bold py-3 px-12 rounded-full text-lg transition-transform transform hover:scale-105 shadow-lg"
        >
          Become a Member
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] border-t border-[#404040] py-8 mt-16 text-center text-gray-400">
        <p className="text-lg font-semibold text-white mb-2">
          Habib University Entrepreneurship Society
        </p>
        <p>© {new Date().getFullYear()} HUES. All rights reserved.</p>
      </footer>
    </div>
  );
}
