import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Sponsors from "./components/Sponsors";

export default function HomePage() {
  return (
    <div className="bg-[#0d0d0d] text-white">
      <Hero />
      <About />
      <Programs />
      <Sponsors />
      <footer className="bg-[#1a1a1a] border-t border-[#404040] py-8 mt-16 text-center text-gray-400">
        <p className="text-lg font-semibold text-white mb-2">
          Habib University Entrepreneurship Society
        </p>
        <p>©2026 HUES. All rights reserved.</p>
      </footer>
    </div>
  );
}
