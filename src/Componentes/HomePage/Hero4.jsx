import React from "react";
import { raaasi } from "../../Data/Data/HomePage";
import Slider from "react-slick";
import bg1 from "../../Data/images/bg3.png";

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
          Our templates allow for maximum customization. No technical skills
          required – our intuitive design tools let you get the job done easily.
        </p>
      </div>

      <div className="w-full lg:px-16 ">
        <Slider {...settings}>
          {raaasi.map((item, index) => (
            <div className="px-2 pt-[70px] ">
              <div
                class="relative w-full h-60   shadow-md	hover:scale-110 cursor-pointer  rounded-xl bg-cover"
                style={{ backgroundImage: `url(${bg1})` }}
              >
                <img
                  alt="logog"
                  src={item.img}
                  className="w-24 m-auto absolute -top-10 left-0 right-0"
                  style={{ filter: "drop-shadow(4px 4px 9px black)" }}
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
    </div>
  );
}
