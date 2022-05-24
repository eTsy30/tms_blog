import React from "react";
import "../Tabs.css";
export const TabContent = ({ title, content }: TybeProps) => (
  <div className="Tab__block--Contetn">
    <div>{content}</div>
  </div>
);
type TybeProps = {
  title: string;
  content: any;
};
