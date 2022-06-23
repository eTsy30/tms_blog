import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "Redux/Theme/useTheme";
import "./PageUPHeader.scss";
type PageUPHeaderprops = {
  label?: string;
  text: string;
};
export const PageUPHeader = ({ label, text }: PageUPHeaderprops) => {
  const theme = useTheme();
  return (
    <div className={` PageUPHeader`}>
      {label && (
        <Link to="/" className={`PageUPHeader-link-Back ${theme.theme}`}>
          {label}
        </Link>
      )}
      <p className="PageUPHeader-Main-Label">{text}</p>
    </div>
  );
};
