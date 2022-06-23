import React from "react";
import "./Next.scss";

import { ReactComponent as RightArrow } from "../../image/rightArrow.svg";
import { useTheme } from "Redux/Theme/useTheme";
type PrevProps = {
  textLink?: string;
};
export const Next = ({ textLink }: PrevProps) => {
  const theme = useTheme();
  return (
    <div className="Next--wrapper">
      <div className="Next--block ">
        <a className={`Next--block--text ${theme.theme}`}>Next</a>
        <a className="Next--block--link   ">{textLink}</a>
      </div>
      <div className="Next-block--icon ">
        <RightArrow className="Next--arrow" />
      </div>
    </div>
  );
};
