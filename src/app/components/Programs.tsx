export default function Programs() {
  return (
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
  );
}
