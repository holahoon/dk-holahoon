import React from "react";
import Lottie from "react-lottie";

import animationData from "assets/images/lottie/mongryong-hi.json";

function LottieHi() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className='lottie-container'>
      <Lottie
        options={defaultOptions}
        //   height={300}
        //   width={300}
        isStopped={false}
        isPaused={false}
      />
    </div>
  );
}

export default LottieHi;
