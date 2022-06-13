import React, { useEffect, useState } from "react";
import { Card } from "components/Cards";
import "../../Pages/CardPage/CardPage.css";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../Redux/posts/PostsActionReducer";

import { Loader } from "../Loader/Loader";
import { Pagination } from "Pagination/Pagination";
import { getUserInfo } from "Redux/userInfo/userInfoReduser";
import { DoubleMainPage } from "Pages/DoubleMainPage";

interface ICard {
  id: number;
  image: string;
  text: string;
  date: any;
  lesson_num: number;
  title: string;
  author: number;
  like?: boolean;
  dislike?: boolean;
  favorit?: boolean;
}

export const AllContent = (props: any) => {
  const dispatch = useDispatch();
  const [itemOffset, setOffset] = useState(1);
  const [limit, setlimit] = useState(11);
  const posts = useSelector((state: any) => state.postReducer.content);
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = event.selected * 12;
    const limit = 11;
    setOffset(newOffset);
    setlimit(limit);
  };

  const ilmitoff = {
    limit: limit,
    offset: itemOffset,
  };
  useEffect(() => {
    dispatch(getPost(ilmitoff));
  }, [itemOffset]);
  if (limit === 11) {
    setlimit(12);
  }
  return (
    <>
      <div className="parent">
        <Loader loading={!posts}>
          {limit > 12 ? <RenderPosts posts={posts} /> : <DoubleMainPage />}
        </Loader>
      </div>
      <Pagination handlePageClick={handlePageClick} />
    </>
  );
};

const RenderPosts = ({ posts }: any) => {
  return posts.map((element: ICard, index: number) => (
    <div key={index.toString()} className={`div${index}`}>
      {index === 0 && <Card info={element} type="large" />}
      {index >= 1 && index < 5 && <Card info={element} type="medium" />}
      {index >= 5 && index <= 12 && <Card info={element} type="small" />}
    </div>
  ));
};
