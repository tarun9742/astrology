import React from "react";
import { raaasi } from "../../Data/Data/HomePage";
import Slider from "react-slick";
import bg1 from "../../Data/images/bg3.png";
import { AnimatedImage, AnimatedText } from "../AnimatedImage";
import bg5 from "../../Data/images/bg5.png";
import { Link } from "react-router-dom";

export default function Hero4() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="px-6 lg:px-16">
      <div class="relative mx-auto max-w-5xl text-center">
        <span class="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
          Why choose us
        </span>
        <h2 class="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
          Build a Website That Your Customers Love
        </h2>
        <p class="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
          Our website allow for maximum customization. No technical skills
          required – our intuitive design tools let you get the job done easily.
        </p>
      </div>

      <div className="w-full lg:px-16">
        <Slider {...settings}>
          {raaasi.map((item, index) => (
            <div className="px-2 pt-[70px] ">
              <div
                class="relative w-full h-60   shadow-md	hover:scale-110 cursor-pointer  rounded-xl bg-cover"
                style={{ backgroundImage: `url(${bg1})` }}
              >
                <AnimatedImage
                  imgSrc={item.img}
                  classN="w-24 m-auto absolute -top-10 left-0 right-0"
                />
                <div className="flex flex-col justify-center items-center pt-16 w-full">
                  <h1 className="text-[#e59016] text-xl font-semibold">
                    {item.title}
                  </h1>
                  <h1 className="text-[#e59016] text-lh font-semibold">
                    ({item.hindiTitle})
                  </h1>
                  <div className="w-[90%] h-20 bg-gray-200 bottom-2 rounded-lg flex flex-col items-center  absolute">
                    <img alt="stoneimg" src={item.gemsImg} className="w-12" />
                    <p className="font-medium text-center">{item.gemstone}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div
        className="relative  flex flex-col h-60 bg-no-repeat bg-cover items-center justify-center bg-white lg:ml-16 lg:mr-16 mt-6"
        style={{ backgroundImage: `url(${bg5})` }}
      >
        <div className="absolute top-0 w-full h-full bg-black opacity-60 z-[10]" />
        <AnimatedText
          text="View Personalized Horoscope"
          classN="[text-shadow:_0px_2px_5px_#ffffff] relative z-[999] text-4xl lg:text-6xl text-center font-bold text-white"
        />
        <Link
          to={"/horoscope"}
          class="relative z-[9999] mt-6 inline-block px-5 font-semibold py-2 mx-auto text-white bg-blue-600 rounded-full hover:bg-blue-700 md:mx-0"
        >
          VIEW
        </Link>
      </div>
    </div>
  );
}
