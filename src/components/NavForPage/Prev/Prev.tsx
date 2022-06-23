import React from "react";
import "./Prev.scss";

import { ReactComponent as LeftArrow } from "../../image/leftArrow.svg";
import { useTheme } from "Redux/Theme/useTheme";
type NextProps = {
  textLink: string;
  onClick?: (event: any) => void | any;
};
export const Prev = ({ textLink, onClick }: NextProps) => {
  const theme = useTheme();
  return (
    <div className="Prev--wrapper" onClick={onClick}>
      <div className="Prev-block--icon ">
        <LeftArrow className="Prev--arrow" />
      </div>
      <div className="Prev--block ">
        <a className={`Prev--block--text ${theme.theme}`}>Prev</a>
        <a className="Prev--block--link   ">{textLink}</a>
      </div>
    </div>
  );
};
