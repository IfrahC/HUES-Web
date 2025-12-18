"use client";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Image from "next/image";

import { history } from "../DataAbout/history";
import { testimonials } from "../DataAbout/testimonials";

// Animated Currency Counter
function AnimatedCounter({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1500; 
    const stepTime = 15;

    const increment = (end - start) / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-center text-4xl font-extrabold text-[#3b82f6]">
      PKR {count.toLocaleString()}
    </div>
  );
}


export default function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(t);
  }, []);
  return (
    <main className="bg-black flex min-h-screen flex-col items-center justify-center p-5">
      {/*Our Story*/}
      <section className="py-10 container mx-auto px-6 md:grid-cols-2">
        <div>
          <h2
            className={`text-4xl font-bold text-center mb-12 transform transition-all duration-700 ease-out ${
              visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-[#3b82f6]">
              Summary
            </span>
          </h2>

          {/* <p
            className={`text-center text-lg max-w-5xl mx-auto text-gray-200 transform transition-all duration-700 ease-out delay-150 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          > */}
          <p className="text-center text-base sm:text-lg max-w-prose mx-auto text-gray-200 leading-relaxed sm:leading-loose">
            Habib University Launchpad is the flagship high-intensity entrepreneurship
            competition designed to push students beyond traditional business thinking.
            Over a rapid 3-day progression, teams move through immersive modules that
            simulate real-world startup challenges — from ideation under pressure to
            rapid prototyping, business modeling, and strategic decision-making.
            <br /><br />
            Each round is structured to test adaptability, teamwork, and resilience.
            Instead of simply writing a business plan, participants must demonstrate
            execution, creativity, and critical problem-solving in real time. The
            competition concludes with a final pitch, where cumulative performance
            determines the winning team — earning seed funding, recognition, and
            future entrepreneurial opportunities.
          </p>
        </div>
      </section>

      {/* Prizes & Incentives */}
      <section className="py-20 container mx-auto px-6">
        <h2
          className={`text-4xl font-bold text-center mb-12 transform transition-all duration-700 ease-out ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-[#3b82f6]">
            Prizes & Incentives
          </span>
        </h2>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto transform transition-all duration-700 ease-out delay-150 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {/* Prize Box Component */}
          {[
            { title: "🏆 Winner", amount: 250000 },
            { title: "🥈 Runner-Up", amount: 150000 },
            { title: "🥉 Runner-Up", amount: 75000 },
          ].map((prize, idx) => (
            <div key={idx} className="relative">
              
              {/* Floating glow behind the card */}
              <div className="absolute inset-0 rounded-2xl bg-[#00ffff]/20 blur-2xl animate-pulse-slow"></div>

              {/* Prize Box */}
              <div className="relative p-8 border border-[#00ffff]/40 rounded-2xl bg-gradient-to-b from-black to-[#0a0a0a] shadow-xl hover:shadow-cyan-500/40 transition transform hover:scale-[1.02]">
                <h3 className="text-3xl font-bold text-[#00ffff] mb-4 text-center">
                  {prize.title}
                </h3>

                {/* Animated Number */}
                <AnimatedCounter value={prize.amount} />

                <p className="text-gray-300 mt-4 text-center text-sm tracking-wide">
                  Seed Funding
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Separate Mentorship & Networking Perk */}
        <div
          className={`max-w-3xl mx-auto mt-16 text-center text-lg text-gray-300 leading-relaxed transform transition-all duration-700 ease-out delay-300 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <span className="text-[#00ffff] font-semibold text-2xl block mb-3">
            🌟 Finalist Perks
          </span>
          Exclusive mentorship opportunities and access to private networking events
          with founders, investors, and industry professionals.
        </div>
      </section>


      
      {/* Judging Criteria */}
      <section className="py-10 container mx-auto px-6">
        <h2
          className={`text-4xl font-bold text-center mb-12 transform transition-all duration-700 ease-out ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-[#3b82f6]">
            Judging Criteria & Scoring
          </span>
        </h2>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto transform transition-all duration-700 ease-out delay-150 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {/* Criterion 1 */}
          <div className="p-6 border border-gray-700 rounded-xl bg-gradient-to-b from-black to-[#0a0a0a] shadow-xl hover:shadow-cyan-500/20 transition">
            <h3 className="text-2xl font-semibold text-[#00ffff] mb-2">Innovation & Creativity</h3>
            <p className="text-gray-300 text-sm">
              Measures novelty of the idea, uniqueness of the solution, and how creatively 
              the team approaches challenges.  
              <span className="block mt-2 text-[#3b82f6] font-semibold">Score: 25%</span>
            </p>
          </div>

          {/* Criterion 2 */}
          <div className="p-6 border border-gray-700 rounded-xl bg-gradient-to-b from-black to-[#0a0a0a] shadow-xl hover:shadow-cyan-500/20 transition">
            <h3 className="text-2xl font-semibold text-[#00ffff] mb-2">Business Feasibility</h3>
            <p className="text-gray-300 text-sm">
              Evaluates market fit, financial sustainability, and strength of the 
              proposed business model.
              <span className="block mt-2 text-[#3b82f6] font-semibold">Score: 25%</span>
            </p>
          </div>

          {/* Criterion 3 */}
          <div className="p-6 border border-gray-700 rounded-xl bg-gradient-to-b from-black to-[#0a0a0a] shadow-xl hover:shadow-cyan-500/20 transition">
            <h3 className="text-2xl font-semibold text-[#00ffff] mb-2">Execution & Problem-Solving</h3>
            <p className="text-gray-300 text-sm">
              Judges how effectively the team responds to dynamic challenges, builds 
              prototypes, and executes ideas under pressure.
              <span className="block mt-2 text-[#3b82f6] font-semibold">Score: 20%</span>
            </p>
          </div>

          {/* Criterion 4 */}
          <div className="p-6 border border-gray-700 rounded-xl bg-gradient-to-b from-black to-[#0a0a0a] shadow-xl hover:shadow-cyan-500/20 transition">
            <h3 className="text-2xl font-semibold text-[#00ffff] mb-2">Teamwork & Communication</h3>
            <p className="text-gray-300 text-sm">
              Assesses coordination, clarity in communication, and how well the team 
              collaborates during challenges.
              <span className="block mt-2 text-[#3b82f6] font-semibold">Score: 15%</span>
            </p>
          </div>

          {/* Criterion 5 */}
          <div className="p-6 border border-gray-700 rounded-xl bg-gradient-to-b from-black to-[#0a0a0a] shadow-xl hover:shadow-cyan-500/20 transition">
            <h3 className="text-2xl font-semibold text-[#00ffff] mb-2">Final Pitch Quality</h3>
            <p className="text-gray-300 text-sm">
              Evaluates presentation clarity, persuasion, storytelling, feasibility, 
              and the team&apos;s ability to defend their idea.
              <span className="block mt-2 text-[#3b82f6] font-semibold">Score: 15%</span>
            </p>
          </div>
        </div>
      </section>


      {/*Affiliations */}
      <section className=" container max-w-auto">
        <h2 className="text-5xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-blue-500">
            Affiliations
          </span>
        </h2>
        <div className="flex justify-center items-center w-full ">
          {[
            {
              image: (
                <Image
                  src="/Images/affiliation1.png"
                  alt="Picture of the author"
                  width={500}
                  height={200}
                />
              ),
            },
            {
              image: (
                <Image
                  src="/Images/affiliation1.png"
                  alt="Picture of the author"
                  width={500}
                  height={200}
                />
              ),
            },
            {
              image: (
                <Image
                  src="/Images/affiliation1.png"
                  alt="Picture of the author"
                  width={500}
                  height={200}
                />
              ),
            },
            {
              image: (
                <Image
                  src="/Images/affiliation1.png"
                  alt="Picture of the author"
                  width={500}
                  height={200}
                />
              ),
            },
          ].map((card, idx) => (
            <div key={idx}>
              <div className=" mb-4 flex items-center justify-center ml-2 ">
                <div className="border-4 border-white shadow-lg rounded-sm">
                  {card.image}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
