import React from "react";
import svgbg from "../../Data/images/shape.svg";
import img10 from "../../Data/images/img10.jpg";
import { AnimatedImage } from "../AnimatedImage";
import { useInView, motion } from "framer-motion";

export default function Hero3() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });
  const isInView2 = useInView(ref, { once: true });

  const variants = {
    hidden: { scale: 0.2, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x:  40 },
    visible: { opacity: 1, x: 0 },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Delay between each item's appearance
      },
    },
  };

  return (
    <div className="px-6 lg:px-0">
      <img alt="bgi" src={svgbg} />
      <section class="overflow-hidden pt-10 pb-12 lg:pt-[40px]  lg:pb-[90px] lg:px-20  dark:bg-dark">
        <div class="container mx-auto">
          <div class="flex flex-wrap-reverse items-center justify-between -mx-4">
            <div class="w-full px-4 lg:w-6/12">
              <motion.img
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={variants}
                transition={{ duration: 1.2 }}
                src={img10}
                alt="Coffee cup"
              />
            </div>
            <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div class="mt-10 lg:mt-0">
                <span class="block mb-0 text-lg font-bold text-gray-800 text-primary">
                  Why Choose Us
                </span>
                <h2 class=" w-full  bg-clip-text font-bold  text-[#A16207] text-3xl sm:text-4xl mb-4 py-2">
                  Make your customers happy by giving services.
                </h2>
                <p class="hidden lg:block mb-2 mt-6 text-base text-gray-900 dark:text-dark-6">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less.
                </p>
                <p class="hidden lg:block mb-8 text-base text-gray-900 dark:text-dark-6">
                  A domain name is one of the first steps to establishing your
                  brand. Secure a consistent brand image with a domain name that
                  matches your business.
                </p>
                <div className="flex gap-10">
                  <motion.ul
                    className="text-gray-200"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.li
                      variants={listItemVariants}
                      animate={isInView2 ? "visible" : "hidden"}
                      transition={{ duration: 1.2 }}
                      className="flex items-center text-gray-800"
                    >
                      <span className="mr-2">❤️</span> Love Problem
                    </motion.li>
                    <motion.li
                      variants={listItemVariants}
                      animate={isInView2 ? "visible" : "hidden"}
                      transition={{ duration: 1.2 }}
                      className="flex items-center text-gray-800"
                    >
                      <span className="mr-2">💍</span> Marriage Problem
                    </motion.li>
                    <motion.li
                      variants={listItemVariants}
                      animate={isInView2 ? "visible" : "hidden"}
                      transition={{ duration: 1.2 }}
                      className="flex items-center text-gray-800"
                    >
                      <span className="mr-2">💼</span> Career Problem
                    </motion.li>
                    <motion.li
                      variants={listItemVariants}
                      animate={isInView2 ? "visible" : "hidden"}
                      transition={{ duration: 1.2 }}
                      className="flex items-center text-gray-800"
                    >
                      <span className="mr-2">🏥</span> Health Problem
                    </motion.li>
                    <motion.li
                      variants={listItemVariants}
                      animate={isInView2 ? "visible" : "hidden"}
                      transition={{ duration: 1.2 }}
                      className="flex items-center text-gray-800"
                    >
                      <span className="mr-2">💰</span> Business Problem
                    </motion.li>
                  </motion.ul>

                  <motion.ul
                    className="text-gray-200"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.li
                      variants={listItemVariants}
                      animate={isInView2 ? "visible" : "hidden"}
                      transition={{ duration: 1.2 }}
                      className="flex items-center text-gray-800"
                    >
                      <span className="mr-2">⚖️</span> Court Case
                    </motion.li>
                    <motion.li
                      variants={listItemVariants}
                      animate={isInView2 ? "visible" : "hidden"}
                      transition={{ duration: 1.2 }}
                      className="flex items-center text-gray-800"
                    >
                      <span className="mr-2">🖐️</span> Palmistry
                    </motion.li>
                    <motion.li
                      variants={listItemVariants}
                      animate={isInView2 ? "visible" : "hidden"}
                      transition={{ duration: 1.2 }}
                      className="flex items-center text-gray-800"
                    >
                      <span className="mr-2">🔮</span> Kundli Analysis
                    </motion.li>
                    <motion.li
                      variants={listItemVariants}
                      animate={isInView2 ? "visible" : "hidden"}
                      transition={{ duration: 1.2 }}
                      className="flex items-center text-gray-800"
                    >
                      <span className="mr-2">👤</span> Face Reading
                    </motion.li>
                  </motion.ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
