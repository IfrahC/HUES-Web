"use client";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Image from "next/image";

import { history } from "../DataAbout/history";
import { testimonials } from "../DataAbout/testimonials";

export default function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(t);
  }, []);
  return (
    <main className="bg-black flex min-h-screen flex-col items-center justify-center p-20">
      {/*about us */}
      <section className="py-20 container mx-auto px-6 ">
        <h2
          className={`text-6xl font-bold text-center mb-12 transform transition-all duration-700 ease-out ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-blue-500">
            About Us
          </span>
        </h2>
        <p
          className={`text-center text-lg max-w-8xl mx-auto text-gray-200 transform transition-all duration-700 ease-out delay-150 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          We are a team dedicated to building modern, responsive, and
          user-friendly web applications that combine creativity with
          cutting-edge technology. Our focus is on delivering seamless digital
          experiences that not only look great across all devices but also
          perform efficiently and intuitively. With a passion for innovation and
          a commitment to quality, we aim to craft web solutions that empower
          users, enhance accessibility, and bring ideas to life through
          thoughtful design and robust functionality.
        </p>
      </section>
      {/*Our Story*/}
      <section className="py-20 container mx-auto px-6 ">
        <h2
          className={`text-5xl font-bold text-center mb-12 transform transition-all duration-700 ease-out delay-300 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-blue-500">
            Our Story
          </span>
          <p
            className={`text-center text-lg max-w-8xl mx-auto text-gray-200 py-10 transform transition-all duration-700 ease-out delay-500 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            The Habib University Entrepreneurship Society (HUES) was founded
            with a vision to ignite the spirit of innovation and enterprise
            within the HU community. What began as a small group of passionate
            students with bold ideas has grown into a dynamic platform that
            empowers aspiring entrepreneurs to transform their visions into
            impactful ventures. Through workshops, competitions, mentorship
            sessions, and collaborations with industry experts, HUES nurtures
            creativity, leadership, and problem-solving among students. Our
            story is one of curiosity, courage, and community—driven by the
            belief that every idea, no matter how small, has the potential to
            create meaningful change.
          </p>
        </h2>
      </section>
      
      {/*Affiliations */}
      <section className=" container max-w-auto">
        <h2 className="text-5xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-blue-500">
            Affiliations
          </span>
        </h2>
        <div className="flex justify-center items-center w-full ">
          {[
            {
              image: (
                <Image
                  src="/Images/affiliation1.png"
                  alt="Picture of the author"
                  width={500}
                  height={200}
                />
              ),
            },
            {
              image: (
                <Image
                  src="/Images/affiliation1.png"
                  alt="Picture of the author"
                  width={500}
                  height={200}
                />
              ),
            },
            {
              image: (
                <Image
                  src="/Images/affiliation1.png"
                  alt="Picture of the author"
                  width={500}
                  height={200}
                />
              ),
            },
            {
              image: (
                <Image
                  src="/Images/affiliation1.png"
                  alt="Picture of the author"
                  width={500}
                  height={200}
                />
              ),
            },
          ].map((card, idx) => (
            <div key={idx}>
              <div className=" mb-4 flex items-center justify-center ml-2 ">
                <div className="border-4 border-white shadow-lg rounded-sm">
                  {card.image}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
