import React from "react";
import { Link } from "react-router-dom";
import "./PageUPHeader.scss";
type PageUPHeaderprops = {
  label?: string;
  text: string;
};
export const PageUPHeader = ({ label, text }: PageUPHeaderprops) => {
  return (
    <div className={` PageUPHeader`}>
      {label && (
        <Link to="/" className="PageUPHeader-link-Back">
          {label}
        </Link>
      )}
      <p className="PageUPHeader-Main-Label">{text}</p>
    </div>
  );
};
