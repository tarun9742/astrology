import React from "react";
import bg5 from "../Data/images/bg5.png";
import { useLocation } from "react-router-dom";
import { raaasi } from "../Data/Data/HomePage";
import { AnimatedText } from "../Componentes/AnimatedImage";

export default function HoroscopeDetail() {
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const productId = query.get("id") || 1;

  return (
    <div
      className="relative bg-center bg-fixed bg-no-repeat bg-cover py-20"
      style={{ backgroundImage: `url(${bg5})` }}
    >
      <div className="absolute top-0 w-full h-full bg-black opacity-80 z-[99]" />
      <div className="lg:px-20">
        <div className="relative z-[999] flex flex-col justify-center items-center  gap-4">
          <img
            alt="sinson"
            src={raaasi[raaasi.findIndex(item=>item.id === productId)].img}
            className="w-40"
            style={{ filter: "drop-shadow(2px 4px 6px white)" }}
          />
          <AnimatedText
            text={`${raaasi[raaasi.findIndex(item=>item.id === productId)].title} (${raaasi[raaasi.findIndex(item=>item.id === productId)].hindiTitle})`}
            classN="text-center font-bold text-3xl lg:text-5xl text-white"
          />
          <div class="w-[90vw] lg:w-[80vw] bg-black shadow-[0px_0px_8px_1px_#f7fafc] rounded-lg text-gray-900 flex justify-center">
            <div class="  m-0 sm:m-10 bg-gray-700 shadow sm:rounded-lg lg:flex  justify-center flex-1">
              
              <div class="horoscope p-4 flex-1 lg:p-10 bg-green-100    ">
                <div className="flex gap-2 lg:gap-9 mb-2">
                  <h1>राशि :</h1>
                  <h2>{`${raaasi[raaasi.findIndex(item=>item.id === productId)].title} (${raaasi[raaasi.findIndex(item=>item.id === productId)].hindiTitle})`}</h2>
                </div>
                <div className="flex gap-2 lg:gap-9 mb-2">
                  <h1>Name First Letter :</h1>
                  <h2>{`${raaasi[raaasi.findIndex(item=>item.id === productId)].startingLetters} `}</h2>
                </div>
                <div className="flex gap-2 lg:gap-9 mb-2">
                  <h1>Ruling Planet :</h1>
                  <h2>{`${raaasi[raaasi.findIndex(item=>item.id === productId)].rulingPlanet} `}</h2>
                </div>
                <div className="flex gap-2 lg:gap-9 mb-2">
                  <h1>Preferred Gemstone :</h1>
                  <h2>{`${raaasi[raaasi.findIndex(item=>item.id === productId)].gemstone} `}</h2>
                </div>
                <p className="text-left text-lg font-medium">
                  आज परिवार से संबंधित किसी गंभीर विषय पर वार्तालाप होगा और आपकी
                  सलाह को प्राथमिकता भी मिलेगी। भूमि, वाहन आदि के खरीदने के
                  अच्छे योग बन रहे हैं। वैज्ञानिक दृष्टिकोण ओर उन्नत सोच आपको
                  आगे बढ़ने में सहायता प्रदान करेगी। कोई सरकारी मामला आज सुलझ
                  सकता है। नेगेटिव- घर के छोटे सदस्यों की गतिविधियों को अनदेखा
                  ना करें। कोई भी विपरीत परिस्थिति आने पर घबराने की बजाय उनका
                  समाधान ढूंढे तथा भावनात्मक रूप से मजबूत बने रहे। संपत्ति
                  संबंधी विवादित मामले किसी की मध्यस्थता से सुलझाने का प्रयास
                  करें। व्यवसाय- व्यवसाय में कुछ नई पार्टियों के साथ काम करने का
                  मौका मिलेगा। मीटिंग वगैरह के भी सकारात्मक परिणाम मिलेंगे।
                  पार्टनरशिप संबंधी कामों में मतभेद की स्थिति बन सकती है।
                  कर्मचारियों के बीच कम्युनिकेशन गैप ना आने दे। ऑफिस में नजदीक
                  माहौल रहेगा। लव- परिवार जनों के बीच आपसी सहयोग और तालमेल घर
                  में सुखद वातावरण रखेगा। प्रेम संबंधों में भी मधुरता रहेगी।
                  स्वास्थ्य- कमर मे व पेट में दर्द बढ़ने से दिनचर्या अस्त-व्यस्त
                  होगी। इस दरमियान वाहन भी सावधानी पूर्वक चलाएं। भाग्यशाली रंग-
                  गुलाबी, भाग्यशाली अंक- 7
                </p>
              </div><div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                <div>
                  <AnimatedText
                    text="Get Your Personalized Horoscope"
                    classN="text-2xl text-gray-100 font-semibold "
                  />
                </div>
                <div class="mt-12 flex flex-col items-center">
                  <div class="w-full flex-1 mt-2">
                    <div class="flex flex-col items-center">
                      <button class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                        <div class="bg-white   rounded-full">
                          <img
                            alt="whatsapp"
                            src={require("../Data/images/whatsapp.png")}
                            className="w-8"
                          />
                        </div>
                        <span class="ml-4">Get On Whatsapp</span>
                      </button>
                    </div>

                    <div class="my-6 border-b text-center">
                      <div class="leading-none px-2 py-1 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                        Or Get on E-mail
                      </div>
                    </div>

                    <div class="mx-auto max-w-xs">
                      <input
                        class="w-full px-6 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="email"
                        placeholder="Email"
                      />
                      <input
                        class="w-full px-6 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        type="text"
                        placeholder="Mobile"
                      />
                      <textarea
                        placeholder="Enter Your Full Details "
                        className="px-6  pt-2 font-medium  w-full h-40 rounded-lg bg-gray-100 mt-4"
                      />
                      <button class="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                        <svg
                          class="w-6 h-6 -ml-2"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                          <circle cx="8.5" cy="7" r="4" />
                          <path d="M20 8v6M23 11h-6" />
                        </svg>
                        <span class="ml-">GET NOW</span>
                      </button>
                      <p class="mt-6 text-xs text-gray-200 text-center">
                        I agree to  {" "}
                        <a
                          href="/"
                          class="border-b border-gray-500 border-dotted"
                        >
                          Terms of Service
                        </a>
                        and its {" "}
                        <a
                          href="/"
                          class="border-b border-gray-500 border-dotted"
                        >
                          Privacy Policy
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
