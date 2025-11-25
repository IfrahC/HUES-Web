export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20 container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-12">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-blue-500">
          Our Sponsors
        </span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
        {[1, 2, 3, 4].map((idx) => (
          <div
            key={idx}
            className="h-20 bg-gray-700 flex items-center justify-center rounded-lg"
          >
            Sponsor {idx}
          </div>
        ))}
      </div>
    </section>
  );
}
