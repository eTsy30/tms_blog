import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import "./GeneralPage.css";
type PropSingIn = {
  label: string;
  className: string;
};
export const GeneralPage = ({
  label,
  className,
  children,
}: PropSingIn | any) => {
  return (
    <div className="generalPage">
      <Header />
      <div className="generalPage-centre">
        
        {children}

      </div>
      <Footer />
    </div>
  );
};
