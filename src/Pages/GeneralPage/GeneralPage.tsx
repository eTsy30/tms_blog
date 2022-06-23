import { Footer } from "components/Footer";
import { Header } from "components/Header";
import React from "react";
import { useTheme } from "Redux/Theme/useTheme";

import "./GeneralPage.css";

type PropSingIn = {
  label: string;
  className: string;
};
export const GeneralPage = ({ className, children }: PropSingIn | any) => {
  const theme = useTheme();

  return (
    <div className={`${theme.theme}`}>
      <Header />
      <div className={`generalPage-centre ${theme.theme}`}>{children}</div>
      <Footer />
    </div>
  );
};
