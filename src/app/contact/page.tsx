"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white relative overflow-hidden">
      {/* Background visuals */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#00ffff]/20 to-transparent"></div>
        <div className="absolute -top-10 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#00ffff]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <section className="relative z-10 pt-20 pb-10">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-blue-500"
          >
            Contact Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto mt-4 text-lg"
          >
            Have questions or need assistance? We’re here to support you throughout the Launchpad journey.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="relative z-10 container mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-[#00ffff]/10 to-blue-500/10 border border-[#00ffff]/30 rounded-2xl p-10 backdrop-blur-md shadow-xl max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-[#00ffff] mb-8 text-center">
            Reach Out to the Launchpad Team
          </h2>

          <div className="space-y-8 text-gray-200 text-lg">
            <div className="flex flex-col gap-1">
              <span className="text-xl font-semibold text-white">Email</span>
              <span className="">entrepreneurshipclub@habib.edu.pk</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xl font-semibold text-white">Phone</span>
              <span className="">+92 300 1234567</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xl font-semibold text-white">Location</span>
              <span>Habib University, Karachi</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xl font-semibold text-white">Event Dates</span>
              <span>February 6th - 8th, 2026</span>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="h-10"></div>
    </main>
  );
}
