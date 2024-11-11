import React from "react";
import { testimonials } from "../../Data/Data/HomePage";

export default function Testimonial() {
  return (
    <div>
      <section id="testimonies" className="py-20 pt-0">
        <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
          <div className="mb-12 space-y-5 md:mb-16 md:text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
              Words from Others
            </div>
            <h1 className="mb-5 text-3xl font-semibold text-[#A16207] uppercase md:text-5xl">
              It's not just us.
            </h1>
            <p className="text-xl text-gray-800 md:text-2xl">
              Here's what others have to say about us.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {testimonials.map((testimony, index) => (
              <div key={index} className="text-sm leading-6">
                <div className="relative ">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1   blur duration-400 "></div>

                  <div className="relative p-4 space-y-6 leading-none rounded-lg ring-1 ring-gray-800">
                    <div className="lg:flex items-center gap-4">
                      <img
                        src={testimony.image}
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt={testimony.name}
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 ">
                          {testimony.name}
                        </h3>
                        <p className="text-gray-500 text-md">
                          {testimony.title}
                        </p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-800 text-md">
                      {testimony.quote}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
