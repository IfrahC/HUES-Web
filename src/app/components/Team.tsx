export default function Team() {
  return (
    <section id="team" className="py-20 bg-[#111111]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-blue-500">
            Meet the Team
          </span>
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((idx) => (
            <div
              key={idx}
              className="bg-[#1a1a1a] border border-[#404040] rounded-xl p-6 text-center"
            >
              <div className="h-32 w-32 mx-auto bg-gray-700 rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold">Member {idx}</h3>
              <p className="text-gray-400">Position</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
