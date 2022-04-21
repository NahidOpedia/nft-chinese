import React from "react";
import ButtonStock from "../utils/ButtonStock";

function Filter({ seletedItem, setSeletedItem, menuTitle }) {
  const cfunc = (a) => {
    setSeletedItem(a);
  };
  return (
    <div
      style={{ margin: "20px 0px", display: "flex", justifyContent: "center" }}
    >
      {menuTitle.map((item) =>
        item === seletedItem ? (
          <ButtonStock
            classN="aciveBtn"
            title={item}
            onClick={() => cfunc(item)}
          />
        ) : (
          <ButtonStock title={item} onClick={() => cfunc(item)} />
        )
      )}
    </div>
  );
}

export default Filter;
