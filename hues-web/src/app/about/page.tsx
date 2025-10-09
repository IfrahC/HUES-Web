"use client";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Image from 'next/image';

import {history} from '../DataAbout/history';
import {testimonials} from "../DataAbout/testimonials";

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
  return (
    <main className="bg-black flex min-h-screen flex-col items-center justify-center p-20">
      {/*about us */ }
      <section className="py-20 container mx-auto px-6 ">
      <h2 className="text-6xl font-bold text-center mb-12">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-blue-500">
          About Us
        </span>
      </h2>
      <p className="text-center text-lg max-w-8xl mx-auto text-gray-200">
      We are a team dedicated to building modern, responsive, and user-friendly web applications that combine creativity with cutting-edge technology. Our focus is on delivering seamless digital experiences that not only look great across all devices but also perform efficiently and intuitively. With a passion for innovation and a commitment to quality, we aim to craft web solutions that empower users, enhance accessibility, and bring ideas to life through thoughtful design and robust functionality.
      </p>
    </section>
      {/*Our Story*/ }
      <section className="py-20 container mx-auto px-6 ">
      <h2 className="text-5xl font-bold text-center mb-12">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-blue-500">
          Our Story
        </span>
        <p className="text-center text-lg max-w-8xl mx-auto text-gray-200 py-10">
        The Habib University Entrepreneurship Society (HUES) was founded with a vision to ignite the spirit of innovation and enterprise within the HU community. What began as a small group of passionate students with bold ideas has grown into a dynamic platform that empowers aspiring entrepreneurs to transform their visions into impactful ventures. Through workshops, competitions, mentorship sessions, and collaborations with industry experts, HUES nurtures creativity, leadership, and problem-solving among students. Our story is one of curiosity, courage, and community—driven by the belief that every idea, no matter how small, has the potential to create meaningful change.
        </p>
      
      </h2>
    </section>
      {/*Our History */ }
      <section className="container  max-w-auto">
      <h2 className="text-5xl font-bold mb-12 text-center">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-blue-500">
          Our History
        </span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
          { history.map((card, idx) => (
            <div
              key={idx}
              className="border border-[#404040] rounded-xl p-8 text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_#00ffff]"
            >
              <div className= "flex items-center justify-center space-x-1">
                <div className="text-3xl mb-4 text-gray-300">{card.quantity}</div>
                <div className="text-3xl mb-4 text-gray-300">{"+"}</div>
              </div>
              
              <h3 className="text-4xl font-bold mb-3 text-gray-300">{card.text}</h3>
             
            </div>
          ))}
        </div>
        
    </section>
      {/*Testimonials */ }
      <section className="py-40 container max-w-auto">
      <h2 className="text-5xl font-bold mb-12 text-center">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-blue-500">
          Testimonials
        </span>
      </h2>
      
      <div className="m-auto max-w-auto content-center justify-center">
        <Slider {...settings}>
        
          {testimonials.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a1a] border border-[#404040] rounded-xl p-8 mt-10 text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_#00ffff] "
            >
              <div className=" mb-4 flex items-center justify-center p-2 ">
                <div className="rounded-full overflow-hidden object-cover border-4 border-white shadow-lg">{card.image}
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-3 text-gray-300 ">{card.name}</h2>
              <p className="text-gray-300 leading-relaxed">{card.description}</p>
            </div>
                  
          ))}
      
        </Slider>
        
      </div>
      
    </section> 
      {/*Affiliations */ }
      <section className= " container max-w-auto">
      <h2 className="text-5xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-blue-500">
            Affiliations
          </span>
      </h2>
      <div className="flex justify-center items-center w-full ">
        {[{
          image : <Image
                  src="/Images/affiliation1.png"
                  alt="Picture of the author"
                  width = {500}
                  height = {200}
                  />
          },
          {
          image : <Image
                  src="/Images/affiliation1.png"
                  alt="Picture of the author"
                  width = {500}
                  height = {200}
                  />
          },
          {
          image : <Image
                  src="/Images/affiliation1.png"
                  alt="Picture of the author"
                  width = {500}
                  height = {200}
                  />
            },
          {
            image : <Image
                    src="/Images/affiliation1.png"
                    alt="Picture of the author"
                    width = {500}
                    height = {200}
                    />
              },

          ].map((card, idx) => (
          <div
            key={idx}
            
          >
            <div className=" mb-4 flex items-center justify-center ml-2 ">
              <div className="border-4 border-white shadow-lg rounded-sm">{card.image}
              </div>
            </div>
            
          </div>
                    
        ))}
      </div>


    </section>
          
    </main>
  );
}
