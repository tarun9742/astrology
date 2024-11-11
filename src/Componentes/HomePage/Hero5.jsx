import React from "react";
import img6 from "../../Data/images/img6.webp";
import svgbg from "../../Data/images/shape.svg";
import { raaasi, services } from "../../Data/Data/HomePage";
import img10 from "../../Data/images/img10.jpg";
import borderB from "../../Data/images/border-b.png";
import Slider from "react-slick";
import banner1 from "../../Data/images/offer2.png";
import bg4 from "../../Data/images/bg3.png";
import { Link } from "react-router-dom";
import {
  AnimatedImage,
  AnimatedImageOnce,
  AnimatedText,
} from "../AnimatedImage";

export default function Hero5() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
  };
  return (
    <div>
      <section class="overflow-hidden pt-10 px-6 pb-12 lg:pt-32  lg:pb-[90px] lg:px-20  dark:bg-dark ">
        {/* <img alt="border" src={borderB} className="m-auto rotate-180	" /> */}
        <div class="container mx-auto lg:px-16  ">
          <div class="flex flex-wrap   items-center justify-between -mx-4">
            <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div class="mt-10 lg:mt-0">
                <span class="block mb-0 text-lg font-bold text-gray-800 text-primary">
                  Why Choose Us
                </span>
                <AnimatedText
                  text="Make your customers happy by giving services."
                  classN=" w-full  text-[#A16207] font-bold  text-3xl sm:text-4xl mb-4 py-2"
                />
                <p class="  mb-2 mt-6 text-base font-semibold text-gray-800 dark:text-dark-6">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less.
                </p>
                <p class="hidden lg:block  mb-8 text-base font-semibold text-gray-800 dark:text-dark-6">
                  A domain name is one of the first steps to establishing your
                  brand. Secure a consistent brand image with a domain name that
                  matches your business.
                </p>
                <Link
                  to={"/products"}
                  class="relative inline-block text-lg mt-6 group"
                >
                  <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span class="relative">ORDER NOW</span>
                  </span>
                  <span
                    class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-400 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </Link>
              </div>
            </div>
            <div class="w-full   px-4 lg:w-6/12">
              <Slider {...settings}>
                {raaasi.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col m-auto overflow-auto items-center justify-center"
                  >
                    <AnimatedImage
                      imgSrc={item.gemsImg}
                      classN="m-auto w-60 "
                    />
                    <h1 className="text-gray-200 text-center">
                      {item.gemstone}
                    </h1>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className=" mt-2" style={{ backgroundImage: `url(${bg4})` }}>
            <img alt="banner" src={banner1} className="w-full  " />
          </div>
        </div>
      </section>
    </div>
  );
}
