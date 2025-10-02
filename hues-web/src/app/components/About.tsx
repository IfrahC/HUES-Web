export default function About() {
  return (
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
            text: "To cultivate creativity, problem-solving, and leadership with mentorship and resources.",
          },
          {
            icon: "🚀",
            title: "What We Do",
            text: "From workshops to startup competitions, we bring together innovators shaping the future.",
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
  );
}
