"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center text-white"
    >
      {/* Background video/pic */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-3xl px-6">
        <h1
          className={`text-5xl md:text-7xl font-extrabold mb-6 leading-tight transform transition-all duration-700 ease-out ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span
            className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-blue-500"
            style={{
              textShadow:
                "0 0 20px rgba(0,255,255,0.95), 0 0 180px rgba(0,170,255,0.6)",
            }}
          >
            Innovate.
          </span>
          <br />
          Create. Inspire.
        </h1>
        <p
          className={`text-lg md:text-xl text-gray-300 mb-8 transform transition-all duration-700 ease-out delay-150 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          Empowering aspiring entrepreneurs at Habib University to turn bold
          ideas into reality.
        </p>
        <a
          href="#join"
          className={`bg-gradient-to-r from-[#00ffff] to-blue-500 text-black font-bold py-3 px-10 rounded-full text-lg transform transition-all duration-700 ease-out delay-50 hover:scale-105 shadow-lg transition-shadow hover:shadow-[0_0_30px_#00ffff]/80 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          Register Now
        </a>
      </div>
    </section>
  );
}
