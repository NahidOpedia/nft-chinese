import React from "react";

function PrimaryButton({ title = "add", onClick }) {
  return (
    <button className="primaryButton" onClick={onClick}>
      {title}
    </button>
  );
}

export default PrimaryButton;
