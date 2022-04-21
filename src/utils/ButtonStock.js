import React from "react";

function ButtonStock({
  classN = "",
  title = "add",
  onClick,
  customClass = null,
  style,
}) {
  return (
    <button
      style={{ ...style }}
      className={
        customClass ? `buttonstock ${classN}` : `buttonstock ${classN}`
      }
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default ButtonStock;
