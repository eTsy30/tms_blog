import { Footer } from "components/Footer";
import { Header } from "components/Header";
import React from "react";

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
    <>
      <Header />
      <div className="generalPage-centre generalPage">
        {children}
        <Footer />
      </div>
    </>
  );
};
