import React, { useContext } from "react";

import WrapperTransition from "components/wrapperContainerTransition/WrapperTransition";
import LottieImage from "components/lottieImage/LottieImage";
import useWindowsHeight from "hooks/useWindowsHeight";
import { LanguageContext } from "hooks/LanguageContext";

function Blog() {
  const windowInnerHeight = useWindowsHeight();
  const { languageHandler } = useContext(LanguageContext);
  const isLanguageKorean = languageHandler[0];

  return (
    <WrapperTransition>
      <div className='blog' style={{ minHeight: `${windowInnerHeight}px` }}>
        <h2>I'm sorry,</h2>
        <p>this page is under construction</p>
        <LottieImage />
        <p>I'll be back with more awesome contents</p>
      </div>
    </WrapperTransition>
  );
}

export default Blog;
