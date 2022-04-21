import React from "react";
import ButtonFill from "../utils/ButtonFill";
import ButtonStock from "../utils/ButtonStock";

function FilterR({ seletedItem, setSeletedItem }) {
  const cfunc = (a) => {
    setSeletedItem(a);
  };
  const menuTitle = ["热门创作者", "最新创作者", "作品总值排序↓↑"];
  return (
    <div style={{ margin: "92px 61px" }}>
      {menuTitle.map((item) =>
        item === seletedItem ? (
          <ButtonStock
            style={{ width: "30%" }}
            classN="aciveBtn"
            title={item}
            onClick={() => cfunc(item)}
          />
        ) : (
          <ButtonStock
            style={{ width: "30%" }}
            title={item}
            onClick={() => cfunc(item)}
          />
        )
      )}
      <div></div>
    </div>
  );
}

export default FilterR;
