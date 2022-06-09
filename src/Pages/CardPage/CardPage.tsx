import React, { useState, useEffect } from "react";

import { Card } from "../../components/Cards";

import "./CardPage.css";

import { Tabs } from "../../components/Tabs";
import { AllContent } from "../../components/AllContent/AllContent";

import { FavoritContent } from "../../components/FavoritContent/FavoritContent";
import { DoubleMainPage } from "../DoubleMainPage";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "Redux/userInfo/userInfoReduser";
import { GeneralPage } from "Pages/GeneralPage/GeneralPage";
import { Pagination } from "Pagination/Pagination";
import { getPost } from "Redux/posts/PostsActionReducer";

export const CardPage = (props: any) => {
  //   const [limit, setlim] = useState(1);

  const dispatch = useDispatch();
  const jwt = useSelector((state: any) => state.tokenReduser.value);
  const items = [
    { title: "All", content: <AllContent /> }, //
    { title: "My favorites", content: <FavoritContent /> },
    { title: "Popular", content: <DoubleMainPage /> },
  ];

  useEffect(() => {
    dispatch(getUserInfo(jwt));
  }, []);

  return (
    <GeneralPage label="Blog">
      <p className="Blog-Main-Label">Blog</p>
      <div>
        <Tabs items={items} />
      </div>
    </GeneralPage>
  );
};
