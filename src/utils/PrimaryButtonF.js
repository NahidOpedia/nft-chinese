import React from "react";

function PrimaryButtonF({ title = "add", onClick }) {
  return (
    <button className="primaryButtonf" onClick={onClick}>
      {title}
    </button>
  );
}

export default PrimaryButtonF;
