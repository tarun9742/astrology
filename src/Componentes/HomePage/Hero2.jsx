import React from "react";
import { features } from "../../Data/Data/HomePage";
import img6 from "../../Data/images/img6.webp"

export default function Hero2() {
  return (
    <div>
      
      <div class="bg-black">
        <section
          id="features"
          class="relative block px-6 py-10 md:py-20 lg:px-16    "
        >
          <div class="relative mx-auto max-w-5xl text-center">
            <span class="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
              Why choose us
            </span>
            <h2 class="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
              Build a Website That Your Customers Love
            </h2>
            <p class="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
              Our templates allow for maximum customization. No technical skills
              required – our intuitive design tools let you get the job done
              easily.
            </p>
          </div>

          <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10  pt-14 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-md relative border-4 border-[#43200F] p-8 text-center shadow"
                style={{ backgroundImage: `url(${feature.bg})` }}
              >
                {/* Overlay for blackish tint */}
                <div
                  className="absolute inset-0 bg-black opacity-70 rounded-md"
                  style={{ zIndex: 1 }}
                ></div>

                 <img alt="logg" src={img6} className="relative z-[9999] m-auto w-14 h-14"/>

                <h3 className="relative mt-6 text-gray-400 z-[999] ">
                  {feature.title}
                </h3>

                <p className="relative mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-300 z-[9999] ">
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
