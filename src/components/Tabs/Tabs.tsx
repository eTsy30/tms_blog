import "./Tabs.css";
import { TabContent } from "./TabContent/TabContent";
import { useDispatch, useSelector } from "react-redux";
import { switchTabs } from "../../Redux/tabs/TabActionReducer";
import { log } from "console";

export const Tabs = ({ items }: any) => {
  const dispatch = useDispatch();
  const countItems = useSelector((store: any) => store.tabReducer.indexTab);

  const openTab = (e: any) => {
    dispatch(switchTabs(+e.target.dataset.index));
  };
  return (
    <div>
      <div className="Tabs__wrapper">
        {items.map((el: any, index: number) => (
          <button
            key={index}
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
