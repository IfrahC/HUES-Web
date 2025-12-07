export default function Events() {
  return (
    <section id="events" className="py-20 container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-blue-500">
          Our Events
        </span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {[1].map((idx) => (
          <div
            key={idx}
            className="bg-[#1a1a1a] border border-[#404040] rounded-xl overflow-hidden"
          >
            <div className="h-48 bg-gray-700"></div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Event {idx}</h3>
              <p className="text-gray-400">
                Description of the event goes here. Replace with real content.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
