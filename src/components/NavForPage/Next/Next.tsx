import React from "react";
import "./Next.scss";

import { ReactComponent as RightArrow } from "../../image/rightArrow.svg";
type PrevProps = {
  textLink: string;
};
export const Next = ({ textLink }: PrevProps) => {
  return (
    <div className="Next--wrapper">
      <div className="Next--block ">
        <a className="Next--block--text ">Next</a>
        <a className="Next--block--link   ">{textLink}</a>
      </div>
      <div className="Next-block--icon ">
        <RightArrow className="Next--arrow" />
      </div>
    </div>
  );
};
