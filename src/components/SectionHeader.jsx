import React from "react";

function SectionHeader({ head1, head2, pera }) {
  return (
    <div className="sectionHeader">
      <h2>{head1}</h2>
      <h2> {head2}</h2>
      <p>{pera}</p>
    </div>
  );
}

export default SectionHeader;
