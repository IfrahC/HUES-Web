"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  side: "left" | "right";
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "1960's",
    title: "Hypertext Born",
    description: "The concept of hypertext was introduced, laying the foundation for interconnected documents and the future of web navigation.",
    side: "right",
  },
  {
    year: "1980's",
    title: "Hypertext Evolution",
    description: "Hypertext systems evolved with early implementations that would later inspire the World Wide Web architecture.",
    side: "left",
  },
  {
    year: "1990's",
    title: "Custom Code",
    description: "Web developers began writing custom code to create unique, personalized web experiences beyond basic HTML.",
    side: "left",
  },
  {
    year: "1990's",
    title: "PHP Born",
    description: "PHP (Hypertext Preprocessor) was created, revolutionizing server-side scripting and dynamic web content generation.",
    side: "right",
  },
  {
    year: "1995",
    title: "HTML3, GIF, Flash",
    description: "HTML3 introduced advanced formatting, GIF animations brought motion to the web, and Flash enabled rich multimedia experiences.",
    side: "left",
  },
  {
    year: "1996",
    title: "JavaScript",
    description: "JavaScript was introduced, enabling interactive web pages and client-side scripting that transformed static sites into dynamic applications.",
    side: "right",
  },
  {
    year: "2008",
    title: "Responsiveness",
    description: "The responsive web design movement began, ensuring websites adapt seamlessly across all devices and screen sizes.",
    side: "left",
  },
];

export default function TimelinePage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#00ffff]/20 to-transparent"></div>
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Banner */}
      <div className="relative z-10 pt-20 pb-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -20 }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-r from-[#00ffff]/10 to-blue-500/10 border border-[#00ffff]/30 rounded-lg p-6 mb-12 backdrop-blur-sm"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-blue-500">
                A HISTORY OF WEB DESIGN
              </span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 pb-20">
        <div className="relative">
          {/* Vertical timeline line - hidden on mobile, visible on desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full">
            <div className="w-full h-full bg-gradient-to-b from-[#00ffff] via-blue-500 to-[#00ffff] opacity-40" 
                 style={{ 
                   backgroundImage: "repeating-linear-gradient(180deg, transparent, transparent 15px, rgba(0,255,255,0.5) 15px, rgba(0,255,255,0.5) 20px)"
                 }}>
            </div>
          </div>

          {/* Mobile timeline line */}
          <div className="md:hidden absolute left-6 w-0.5 h-full bg-gradient-to-b from-[#00ffff] via-blue-500 to-[#00ffff] opacity-40"
               style={{ 
                 backgroundImage: "repeating-linear-gradient(180deg, transparent, transparent 15px, rgba(0,255,255,0.5) 15px, rgba(0,255,255,0.5) 20px)"
               }}>
          </div>

          {/* Timeline events */}
          <div className="space-y-16 md:space-y-24">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={`${event.year}-${index}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ 
                  opacity: visible ? 1 : 0, 
                  y: visible ? 0 : 50 
                }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.15 + 0.3 
                }}
                className="relative flex items-center w-full"
              >
                {/* Left side: Spacer -> Card -> Marker */}
                {event.side === "left" && (
                  <>
                    <div className="hidden md:block w-5/12"></div>
                    <div className="w-full md:w-5/12 relative ml-12 md:ml-0 md:pr-8">
                      <div
                        className="relative bg-gradient-to-br from-red-600/95 to-red-700/95 p-5 md:p-6 rounded-lg shadow-xl border border-red-500/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(220,38,38,0.7)] group timeline-arrow-left"
                      >
                        <div className="relative z-10">
                          <div className="text-xs md:text-sm font-semibold text-[#00ffff] mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#00ffff] rounded-full animate-pulse"></span>
                            {event.year}
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-white">
                            {event.title}
                          </h3>
                          <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00ffff]/0 to-blue-500/0 group-hover:from-[#00ffff]/15 group-hover:to-blue-500/15 rounded-lg transition-all duration-300"></div>
                      </div>
                    </div>
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-500 rounded-full border-4 border-[#0d0d0d] shadow-lg z-20 items-center justify-center">
                      <div className="w-2 h-2 bg-orange-300 rounded-full animate-pulse"></div>
                    </div>
                    <div className="md:hidden absolute left-6 transform -translate-x-1/2 w-5 h-5 bg-orange-500 rounded-full border-2 border-[#0d0d0d] shadow-lg z-20 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-orange-300 rounded-full animate-pulse"></div>
                    </div>
                    <div className="hidden md:block w-5/12"></div>
                  </>
                )}

                {/* Right side: Spacer -> Marker -> Card */}
                {event.side === "right" && (
                  <>
                    <div className="hidden md:block w-5/12"></div>
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-500 rounded-full border-4 border-[#0d0d0d] shadow-lg z-20 items-center justify-center">
                      <div className="w-2 h-2 bg-orange-300 rounded-full animate-pulse"></div>
                    </div>
                    <div className="md:hidden absolute left-6 transform -translate-x-1/2 w-5 h-5 bg-orange-500 rounded-full border-2 border-[#0d0d0d] shadow-lg z-20 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-orange-300 rounded-full animate-pulse"></div>
                    </div>
                    <div className="w-full md:w-5/12 relative ml-12 md:ml-0 md:pl-8">
                      <div
                        className="relative bg-gradient-to-br from-red-600/95 to-red-700/95 p-5 md:p-6 rounded-lg shadow-xl border border-red-500/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(220,38,38,0.7)] group timeline-arrow-right"
                      >
                        <div className="relative z-10">
                          <div className="text-xs md:text-sm font-semibold text-[#00ffff] mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#00ffff] rounded-full animate-pulse"></span>
                            {event.year}
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-white">
                            {event.title}
                          </h3>
                          <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00ffff]/0 to-blue-500/0 group-hover:from-[#00ffff]/15 group-hover:to-blue-500/15 rounded-lg transition-all duration-300"></div>
                      </div>
                    </div>
                    <div className="hidden md:block w-5/12"></div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer spacing */}
      <div className="h-20"></div>
    </main>
  );
}

