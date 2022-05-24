import React from "react";
import "./Prev.scss";

import { ReactComponent as LeftArrow } from "../../image/leftArrow.svg";
type NextProps = {
  textLink: string;
};
export const Prev = ({ textLink }: NextProps) => {
  return (
    <div className="Prev--wrapper">
      <div className="Prev-block--icon ">
        <LeftArrow className="Prev--arrow" />
      </div>
      <div className="Prev--block ">
        <a className="Prev--block--text ">Prev</a>
        <a className="Prev--block--link   ">{textLink}</a>
      </div>
    </div>
  );
};
