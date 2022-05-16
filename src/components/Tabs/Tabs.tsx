import { log } from "console";
import { type } from "os";
import React, { useState } from "react";
import "./Tabs.css";
import { TabContent } from "./TabContent/TabContent";

export const Tabs = ({ items }: any) => {
  const [active, setActive] = useState(0);
  const openTab = (e: any) => setActive(+e.target.dataset.index);

  return (
    <div>
      <div className="Tabs__wrapper">
        {items.map((el: any, index: number) => (
          <button
            className={`Tab__block  ${
              index === active ? "Tab__block__active" : ""
            } `}
            onClick={openTab}
            data-index={index}
          >
            {el.title}
          </button>
        ))}
      </div>

      {items[Number(active)] && <TabContent {...items[Number(active)]} />}
    </div>
  );
};
