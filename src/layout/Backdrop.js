import React, { memo } from "react";

function Backdrop({ toggleBackdrop, backdropHandler }) {
  return (
    <div
      style={{
        opacity: toggleBackdrop ? 0.4 : 0,
        visibility: toggleBackdrop ? "visible" : "hidden",
      }}
      className='backdrop'
      onClick={backdropHandler}
    ></div>
  );
}

export default memo(Backdrop);
