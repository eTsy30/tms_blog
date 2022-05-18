import { log } from "console";
import { type } from "os";
import React, { useState } from "react";
import "./Tabs.css";
import { TabContent } from "./TabContent/TabContent";

import { useDispatch, useSelector } from "react-redux";

export const Tabs = ({ items }: any) => {
  const dispatch = useDispatch();
  const countItems = useSelector((store: any) => store.countItems);

  const openTab = (e: any) => {
    dispatch({ type: "item", payload: +e.target.dataset.index });
  };

  return (
    <div>
      <div className="Tabs__wrapper">
        {items.map((el: any, index: number) => (
          <button
            className={`Tab__block  ${
              index === countItems ? "Tab__block__active" : ""
            } `}
            onClick={openTab}
            data-index={index}
          >
            {el.title}
          </button>
        ))}
      </div>

      {items[Number(countItems)] && (
        <TabContent {...items[Number(countItems)]} />
      )}
    </div>
  );
};
