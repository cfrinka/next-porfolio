/* eslint-disable react/no-unescaped-entities */
"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 text-center place-self-center sm:text-left">
          <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm {""}
            </span>
            <br/>
            <TypeAnimation
              sequence={[
                "Neto",
                1000, 
                "a teacher",
                1000,
                "a gamer",
                1000,
                "a tech enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#adb7be] text-base sm:text-lg mb-6 lg:text-xl">
            In dolor exercitation cillum ut ut tempor irure incididunt minim
            sint velit velit enim. Labore ex excepteur labore minim ullamco
            Lorem aute elit. Lorem eiusmod culpa sint voluptate culpa aliquip.
            Velit sunt excepteur dolore esse. Lorem ut cillum enim amet anim
            labore occaecat. Lorem amet ut commodo eu exercitation
          </p>
          <div>
            <button className="w-full px-6 py-3 mr-4 text-black bg-white rounded-full sm:w-fit hover:bg-slate-400">
              HIRE ME
            </button>
            <button className="w-full px-6 py-3 mt-3 text-white bg-transparent border border-white rounded-full sm:w-fit hover:bg-slate-800">
              DOWNLOAD CV
            </button>
          </div>
        </div>
        <div className="col-span-5 mt-4 place-self-center lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
