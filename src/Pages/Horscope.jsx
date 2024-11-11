import React from "react";
import bg1 from "../Data/images/bg-yellow1.png";
import { raaasi } from "../Data/Data/HomePage";
import bg2 from "../Data/images/horoBg.jpg";
import { AnimatedText } from "../Componentes/AnimatedImage";
import { Link } from "react-router-dom";

export default function Horscope() {
  return (
    <div
      className="relative bg-fixed bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      {/* <div className="absolute z-[9] top-0 bg-black opacity-80 w-full h-full" /> */}
      <div class="relative  pt-12 pb-12 z-[999] mx-auto max-w-5xl text-center">
        <span class="text-gray-800 my-3 flex items-center justify-center font-semibold uppercase tracking-wider">
          Get Everything
        </span>
        <AnimatedText
          text="We Are Here To Give You "
          classN="block w-full  text-[#A16207] font-bold text-transparent text-3xl sm:text-4xl"
        />
        <AnimatedText
          text="Daily/ Weekly/ Yearly Horoscope, Love Problem Solution, Marriage Problems, and all."
          classN="mx-auto my-4 px-2 w-full max-w-xl  text-center font-medium leading-relaxed tracking-wide text-gray-800"
        />
      </div>
      <div class="relative pt-12 z-[999] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-9 px-4 lg:px-16 justify-between       ">
        {raaasi.map((item, index) => (
          <Link
            to={{ pathname: "/horoscope-detail", search: `?id=${item.id}` }}
            class="relative p-6 bg-gray-300 rounded-xl bg-no-repeat bg-contain"
            style={{ backgroundImage: `url(${bg2})` }}
          >
            <img alt="icos" src={item.img} className="w-40" />
            <AnimatedText
              text={item.hindiTitle}
              classN="absolute left-0 right-0 z-[999] bottom-0 text-center font-semibold text-white text-xl"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
