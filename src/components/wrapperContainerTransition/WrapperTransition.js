import React from "react";
import { motion } from "framer-motion";

const defaultVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
      duration: 0.3,
      ease: "easeIn",
    },
  },
  exitAnimation: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

function WrapperTransition({ customVariatns = defaultVariants, children }) {
  return (
    <motion.section
      variants={customVariatns}
      initial='initial'
      animate='animate'
      exit='exitAnimation'
    >
      {children}
    </motion.section>
  );
}

export default WrapperTransition;
