"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  side: "left" | "right";
  time: string;
}

const timelineEvents: TimelineEvent[] = [
  // Day 1 — Friday
  {
    year: "Day 1 — Friday",
    title: "Team Registration & Welcome Lunch",
    description:
      "Kick off Launchpad with team check-in and a networking lunch to meet fellow participants.",
    side: "left",
    time: "2:00 PM - 4:00 PM",
  },
  {
    year: "Day 1 — Friday",
    title: "Opening Ceremony",
    description:
      "High-energy kickoff, rule breakdown, and an inspiring talk from a young founder.",
    side: "right",
    time: "4:00 PM - 5:00 PM",
  },
  {
    year: "Day 1 — Friday",
    title: "Module 1: The Idea Auction",
    description:
      "Teams bid using virtual seed money on limited resources, problems, and advantages — testing valuation and strategy.",
    side: "left",
    time: "5:00 PM - 8:00 PM",
  },

  // Day 2 — Saturday
  {
    year: "Day 2 — Saturday",
    title: "Module 2: Viral Vendetta",
    description:
      "A marketing challenge to create a full digital campaign for a quirky assigned product.",
    side: "right",
    time: "9:00 AM - 1:00 PM",
  },
  {
    year: "Day 2 — Saturday",
    title: "Module 3: Corporate Cataclysm",
    description:
      "Crisis simulation - PR disaster, supply chain collapse, ethics challenge. Teams present a response plan.",
    side: "left",
    time: "2:00 PM - 6:00 PM",
  },
  {
    year: "Day 2 — Saturday",
    title: "Social Night",
    description:
      "A formal dinner where teams network with industry professionals.",
    side: "right",
    time: "7:00 PM onwards",
  },

  // Day 3 — Sunday
  {
    year: "Day 3 — Sunday",
    title: "Module 4: The Final Gambit",
    description:
      "Teams build a final 5-minute pitch showcasing adaptability and learnings from all modules.",
    side: "left",
    time: "9:00 AM - 12:00 PM",
  },
  {
    year: "Day 3 — Sunday",
    title: "Final Pitches & Grand Jury Q&A",
    description:
      "Teams present to the Grand Jury followed by an in-depth Q&A session.",
    side: "right",
    time: "12:00 PM - 2:00 PM",
  },
  {
    year: "Day 3 — Sunday",
    title: "Closing Ceremony & Awards",
    description:
      "Event wrap-up and awards announcement celebrating the winning teams.",
    side: "left",
    time: "3:00 PM - 4:00 PM",
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
                Program Details & Structure
              </span>
            </h1>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto mb-16 text-center"
      >
        <p className="text-gray-300 text-lg leading-relaxed">
          The competition is a marathon of modules where teams earn points based
          on their performance in each. The focus is on gamified, practical
          challenges rather than formal presentations.
        </p>
      </motion.div>

      {/* Timeline events */}
      <div className="space-y-24">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 50 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative flex w-full"
          >
            {/* LEFT EVENT */}
            {event.side === "left" && (
              <>
                {/* Left card */}
                <div className="hidden md:flex justify-end w-1/2 pr-10">
                  <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] p-6 rounded-lg border border-[#00ffff]/30 shadow-xl w-full max-w-md hover:scale-[1.02] hover:border-[#00ffff]/60 transition">
                    <div className="text-sm font-semibold text-[#00ffff] mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#00ffff] rounded-full animate-pulse"></span>
                      {event.year}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                    <p className="text-gray-300">{event.description}</p>
                  </div>
                </div>

                {/* Center marker */}
                <div className="flex items-center justify-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-500 rounded-full border-4 border-[#0d0d0d] shadow-lg z-20">
                    <div className="w-2 h-2 bg-orange-300 rounded-full animate-pulse mx-auto mt-1.5"></div>
                  </div>
                </div>

                {/* Mobile card */}
                <div className="md:hidden w-full pl-10">
                  <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] p-5 rounded-lg border border-[#00ffff]/30 shadow-xl hover:scale-[1.02] hover:border-[#00ffff]/60 transition">
                    <div className="text-xs font-semibold text-[#00ffff] mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#00ffff] rounded-full animate-pulse"></span>
                      {event.year}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-300 text-sm">{event.description}</p>
                  </div>
                </div>

                {/* Right empty spacer */}
                <div className="hidden md:block w-1/2"></div>
              </>
            )}

            {/* RIGHT EVENT */}
            {event.side === "right" && (
              <>
                {/* Left empty spacer */}
                <div className="hidden md:block w-1/2"></div>

                {/* Center marker */}
                <div className="flex items-center justify-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-500 rounded-full border-4 border-[#0d0d0d] shadow-lg z-20">
                    <div className="w-2 h-2 bg-orange-300 rounded-full animate-pulse mx-auto mt-1.5"></div>
                  </div>
                </div>

                {/* Desktop card on the right */}
                <div className="hidden md:flex justify-start w-1/2 pl-10">
                  <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] p-6 rounded-lg border border-[#00ffff]/30 shadow-xl w-full max-w-md hover:scale-[1.02] hover:border-[#00ffff]/60 transition">
                    <div className="text-sm font-semibold text-[#00ffff] mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#00ffff] rounded-full animate-pulse"></span>
                      {event.year}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                    <p className="text-gray-300">{event.description}</p>
                  </div>
                </div>

                {/* Mobile card */}
                <div className="md:hidden w-full pl-10">
                  <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] p-5 rounded-lg border border-[#00ffff]/30 shadow-xl hover:scale-[1.02] hover:border-[#00ffff]/60 transition">
                    <div className="text-xs font-semibold text-[#00ffff] mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#00ffff] rounded-full animate-pulse"></span>
                      {event.year}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-300 text-sm">{event.description}</p>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>

      {/* Footer spacing */}
      <div className="h-20"></div>
    </main>
  );
}
