import React from "react";
import { features } from "../../Data/Data/HomePage";
import img6 from "../../Data/images/img6.webp"
import { AnimatedText } from "../AnimatedImage";
import bg1 from "../../Data/images/bg-white.jpg"

export default function Hero2() {
  return (
    <div>
      
      <div class="">
        <section
          id="features"
          class="relative block px-6 py-10 md:py-20 lg:px-16    "
        >
          <div class="relative mx-auto max-w-5xl text-center">
            <span class="text-gray-800 my-3 flex items-center justify-center font-semibold uppercase tracking-wider">
              Why choose us
            </span>
            <AnimatedText text="Build a Website That Your Customers Love" classN="block w-full   font-bold text-[#A16207] text-3xl sm:text-4xl" />
            <AnimatedText  text="Our website allow for maximum customization. No technical skills
              required – our intuitive design tools let you get the job done
              easily." classN="mx-auto my-4 w-full max-w-xl   text-center font-medium leading-relaxed tracking-wide text-gray-800" />
          </div>

          <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10  pt-14 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-md relative border-4 border-[#43200F] p-8 text-center shadow"
                style={{ backgroundImage: `url(${bg1})` }}
              >
                {/* Overlay for blackish tint */}
                <div
                  className="absolute inset-0 bg-white opacity-50 rounded-md"
                  style={{ zIndex: 1 }}
                ></div>

                 <img alt="logg" src={img6} className="relative z-[9999] m-auto w-14 h-14"/>

                <h3 className="relative mt-6 font-bold text-xl text-gray-800 z-[999] ">
                  {feature.title}
                </h3>

                <p className="relative mx-auto my-4 w-full max-w-xl   text-center font-medium leading-relaxed tracking-wide text-gray-800 z-[9999] ">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
