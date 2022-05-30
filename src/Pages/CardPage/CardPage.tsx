import React, { useState, useEffect } from "react";
import { GeneralPage } from "../../components/GeneralPage/GeneralPage";
import { Card } from "../../components/Cards";

import "./CardPage.css";

import { Tabs } from "../../components/Tabs";
import { AllContent } from "../../components/AllContent/AllContent";

import { FavoritContent } from "../../components/FavoritContent/FavoritContent";
import { DoubleMainPage } from "../DoubleMainPage";

export const CardPage = (props: any) => {
  const items = [
    { title: "All", content: <AllContent /> }, //
    { title: "My favorites", content: <FavoritContent /> },
    { title: "Popular", content: <DoubleMainPage /> },
  ];
  return (
    <GeneralPage label="Blog">
      <p className="Blog-Main-Label">Blog</p>
      <div>
        <Tabs items={items} />
      </div>
      <div></div>
    </GeneralPage>
  );
};
