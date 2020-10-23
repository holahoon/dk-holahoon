import React from "react";
import { motion } from "framer-motion";

const defaultVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.6,
    },
  },
  exitAnimation: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn",
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
