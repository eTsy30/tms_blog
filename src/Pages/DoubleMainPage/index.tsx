import React, { useEffect } from "react";
import { Card } from "../../components/Cards";
import "./DoubleMainPage.scss";
import { useDispatch, useSelector } from "react-redux";

import { Loader } from "../../components/Loader/Loader";
import { getPost } from "../../Redux/posts/PostsActionReducer";

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
  const likeStore = useSelector((state: any) => state.likeReducer.content);

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
      {index >= 0 && index < 6 && <Card info={element} type="medium" />}
      {index >= 6 && <Card info={element} type="small" />}
    </div>
  ));
};
