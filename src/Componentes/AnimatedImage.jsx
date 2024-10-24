import React from "react";
import { motion, useInView } from "framer-motion";

export const AnimatedImage = ({ imgSrc, classN }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  const variants = {
    hidden: { scale: 0.2, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <motion.img
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.9 }}
      src={imgSrc}
      alt="Coffee cup"
      className={classN}
      style={{ filter: "drop-shadow(0px -0px 36px white)" }}
    />
  );
};


export const AnimatedImageOnce = ({ imgSrc, classN }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  const variants = {
    hidden: { scale: 0.2, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <motion.img
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.9 }}
      src={imgSrc}
      alt="Coffee cup"
      className={classN} 
    />
  );
};

export const AnimatedText = ({ text, classN }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.h1
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.8 }}
      className={classN}
    >
      {text}
    </motion.h1>
  );
};
