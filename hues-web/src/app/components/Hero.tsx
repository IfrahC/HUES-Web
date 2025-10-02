export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center text-white"
    >
      {/* Background video (replace src with your own) */}
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
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-blue-500">
            HUES
          </span>
          <br />
          Innovate. Create. Inspire.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Empowering aspiring entrepreneurs at Habib University to turn bold
          ideas into reality.
        </p>
        <a
          href="#join"
          className="bg-gradient-to-r from-[#00ffff] to-blue-500 text-black font-bold py-3 px-10 rounded-full text-lg transition-transform hover:scale-105 shadow-lg"
        >
          Register Now
        </a>
      </div>
    </section>
  );
}
