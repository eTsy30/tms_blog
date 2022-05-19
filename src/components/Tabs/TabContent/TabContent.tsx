import React from "react";
import "../Tabs.css";
export const TabContent = ({ title, content }: TybeProps) => (
  <div className="Tab__block--Contetn">
    <h3>{title}</h3>
    <div>{content}</div>
  </div>
);
type TybeProps = {
  title: string;
  content: any;
};
