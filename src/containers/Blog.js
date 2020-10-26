import React, { useContext } from "react";

import WrapperTransition from "components/wrapperContainerTransition/WrapperTransition";
import { BlogInEnglish } from "components/data/dataInEnglish";
import { BlogInKorean } from "components/data/dataInKorean";
import useWindowsHeight from "hooks/useWindowsHeight";
import { LanguageContext } from "hooks/LanguageContext";

function Blog() {
  const windowInnerHeight = useWindowsHeight();
  const { languageHandler } = useContext(LanguageContext);
  const isLanguageKorean = languageHandler[0];

  const blogContent = isLanguageKorean ? <BlogInKorean /> : <BlogInEnglish />;

  return (
    <WrapperTransition>
      <div className='blog' style={{ minHeight: `${windowInnerHeight}px` }}>
        {blogContent}
      </div>
    </WrapperTransition>
  );
}

export default Blog;
