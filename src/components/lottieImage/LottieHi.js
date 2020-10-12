import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";

import animationData from "assets/images/lottie/mongryong-hi.json";

function LottieHi() {
  const [playAnimation, setPlayAnimation] = useState(false);

  const defaultOptions = {
    loop: playAnimation,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setPlayAnimation((prev) => !prev);
    }, 3000);
    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div className='lottie-container'>
      <Lottie
        options={defaultOptions}
        isStopped={playAnimation}
        isPaused={playAnimation}
      />
    </div>
  );
}

export default LottieHi;
