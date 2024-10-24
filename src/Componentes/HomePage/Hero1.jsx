import React from "react";
import img3 from "../../Data/images/img3.png";
import bggif1 from "../../Data/images/bggif.gif";
import { Link } from "react-router-dom";  
import { AnimatedImage, AnimatedText } from "../AnimatedImage";

export default function Hero1() {
   
  return (
    <div>
      <div
        class="relative bg-no-repeat bg-cover bg-opacity-50"
        style={{ backgroundImage: `url(${bggif1})` }}
      >
        <div className="absolute bg-black inset-0  opacity-60"></div>

        <section class="relative z-[9999] w-full h-auto flex flex-col-reverse lg:flex-row-reverse  lg:px-16">
          <div class="w-full lg:w-[50%] flex items-center justify-center  ">
            <AnimatedImage imgSrc={img3} classN={"w-[70%] lg:w-1/2"} />
          </div>
          <div class="w-full h-auto lg:w-[50%]  flex flex-col mt-5 md:mt-10 lg:mt-20 ">
            <AnimatedText text={"Discover the Art of Perfect Astrology."} classN="text-4xl text-white font-semibold md:text-4xl lg:text-7xl px-2 lg:px-0 text-center lg:text-left"/>
            <p class="text-white text-sm lg:text-lg mt-5 mx-2 px-5 lg:px-0 text-center lg:text-left">
              Experience the difference as we meticulously select and roast the
              finest beans to create a truly unforgettable cup of coffee. Join
              us on a journey of taste and awaken your senses one sip at a time.
            </p>
            <div className="w-full flex justify-center lg:justify-start">
              <Link
                to={"/contact"}
                class="h-12 w-52 bg-[#432010] flex items-center justify-center rounded-full mt-5 p-1.5 mx-5 hover:opacity-80 transition "
              >
                <span class="flex flex-1 items-center justify-center text-white text-lg font-bold">
                  Contact Now
                </span>
                <div class=" h-9 w-9 bg-white rounded-full flex items-center justify-center -rotate-45 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-arrow-right"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                  <span class="sr-only">Arrow Right Icon</span>
                </div>
              </Link>
            </div>
            <ul class="flex items-center text-white justify-center lg:justify-start gap-5 lg:gap-12 h-28 mt-5 z-10">
              <li class="flex flex-col items-center font-bold p-5 shadow-lg rounded-lg ">
                <p class="text-3xl lg:text-5xl">
                  1K<span class="text-yellow-700">+</span>
                </p>
                <p>Services</p>
              </li>
              <li class="flex flex-col items-center font-bold p-5 shadow-lg rounded-lg">
                <p class="text-3xl lg:text-5xl">
                  10K<span class="text-yellow-700">+</span>
                </p>
                <p>Reviews</p>
              </li>
              <li class="flex flex-col items-center font-bold p-5 shadow-lg rounded-lg">
                <p class="text-3xl lg:text-5xl">
                  3K<span class="text-yellow-700">+</span>
                </p>
                <p>Jems Sold</p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
