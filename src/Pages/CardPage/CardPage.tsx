import React, { useState, useEffect } from "react";
import { GeneralPage } from "../../components/GeneralPage/GeneralPage";
import { Card } from "../../components/Cards";

import "./CardPage.css";

import { Tabs } from "../../components/Tabs";
import { AllContent } from "../../components/AllContent/AllContent";
import { postsData } from "../../ServerTemp/server";
import { FavoritContent } from "../../components/FavoritContent/FavoritContent";

export const CardPage = (props: any) => {
  const items = [
    { title: "All", content: <AllContent cards={postsData} /> }, //
    { title: "My favorites", content: <FavoritContent /> },
    { title: "Popular", content: " Popular content" },
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
