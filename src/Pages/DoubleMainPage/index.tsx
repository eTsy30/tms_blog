import React, { useEffect } from "react";
import { Card } from "../../components/Cards";
import "./DoubleMainPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../Redux/posts/PostsActionReducer";

import { postsData } from "../../ServerTemp/server";
import { Loader } from "../../components/Loader/Loader";

interface ICard {
  id?: number;
  image?: string;
  text?: string;
  date?: any;
  lesson_num?: number;
  title?: string;
  author?: number;
  like?: boolean;
  dislike?: boolean;
  favorit?: boolean;
}

export const DoubleMainPage = (props: ICard) => {
  const posts = useSelector((state: any) => state.postReducer.content);
  console.table("polutsau s useSelector", posts);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      if (posts === null) {
        dispatch(fetchPosts(postsData));
      }
    }, 3000);
  }, []);

  return (
    <div className="DoubleMainPage--parent">
      <Loader loading={!posts}>
        <RenderPosts posts={posts} />
      </Loader>
    </div>
  );
};

const RenderPosts = ({ posts }: any) => {
  return posts.map((element: ICard, index: number) => (
    <div key={index.toString()} className={`divd${index}`}>
      {index >= 0 && index < 5 && <Card info={element} type="medium" />}
      {index >= 5 && <Card info={element} type="small" />}
    </div>
  ));
};
