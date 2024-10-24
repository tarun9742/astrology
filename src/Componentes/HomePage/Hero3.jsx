import React from "react";
import img6 from "../../Data/images/img6.webp";
import svgbg from "../../Data/images/shape.svg";
import { services } from "../../Data/Data/HomePage";
import img10 from "../../Data/images/img10.jpg"

export default function Hero3() {
  return (
    <div className="px-6 lg:px-0">
      <img alt="bgi" src={svgbg} />
      <section class="overflow-hidden pt-10 pb-12 lg:pt-[40px]  lg:pb-[90px] lg:px-20  dark:bg-dark">
        <div class="container mx-auto">
          <div class="flex flex-wrap-reverse items-center justify-between -mx-4">
            <div class="w-full px-4 lg:w-6/12">
              <img alt="imggg" src={img10}/>
            </div>
            <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div class="mt-10 lg:mt-0">
                <span class="block mb-0 text-lg font-semibold text-gray-200 text-primary">
                  Why Choose Us
                </span>
                <h2 class=" w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl mb-4 py-2">
                  Make your customers happy by giving services.
                </h2>
                <p class="hidden lg:block mb-2 mt-6 text-base text-gray-300 dark:text-dark-6">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less.
                </p>
                <p class="hidden lg:block mb-8 text-base text-gray-300 dark:text-dark-6">
                  A domain name is one of the first steps to establishing your
                  brand. Secure a consistent brand image with a domain name that
                  matches your business.
                </p>
                <div className="flex gap-10">
                  <ul className="text-gray-200">
                    <li className="flex items-center">
                      <span className="mr-2">❤️</span> Love Problem
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">💍</span> Marriage Problem
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">💼</span> Career Problem
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">🏥</span> Health Problem
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">💰</span> Business Problem
                    </li>
                  </ul>

                  <ul className="text-gray-200">
                    <li className="flex items-center">
                      <span className="mr-2">⚖️</span> Court Case
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">🖐️</span> Palmistry
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">🔮</span> Kundli Analysis
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">👤</span> Face Reading
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
