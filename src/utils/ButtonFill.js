import React from "react";

function ButtonFill({ title = "add", onClick, styleC }) {
  return (
    <button style={{ ...styleC }} className="buttonFill" onClick={onClick}>
      {title}
    </button>
  );
}

export default ButtonFill;
