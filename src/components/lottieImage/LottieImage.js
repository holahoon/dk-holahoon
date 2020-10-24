import React from "react";
import Lottie from "react-lottie";

import lottieHiAnimation from "assets/images/lottie/mongryong-hi.json";
import lottieConstructionAnimation from "assets/images/lottie/construction.json";

function LottieImage({ isAboutPage }) {
  const lottieHiOptions = {
    autoplay: true,
    loop: true,
    animationData: lottieHiAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const lottieConstructionOptions = {
    autoplay: true,
    loop: true,
    animationData: lottieConstructionAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className={`lottie-container ${
        isAboutPage ? "lottie-hi" : "lottie-construction"
      }`}
    >
      <Lottie
        options={isAboutPage ? lottieHiOptions : lottieConstructionOptions}
      />
    </div>
  );
}

export default LottieImage;
