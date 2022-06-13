import React, { useEffect } from "react";
import { Card } from "components/Cards";
import "../../Pages/CardPage/CardPage.css";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../Redux/posts/PostsActionReducer";

import { Loader } from "../Loader/Loader";

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
  const posts = useSelector((state: any) => state.postReducer.content);
  const dispatch = useDispatch();

  useEffect(() => {
    if (posts === null) {
      dispatch(getPost());
    }
  }, [dispatch]);

  return (
    <div className="parent">
      <Loader loading={!posts}>
        <RenderPosts posts={posts} />
      </Loader>
    </div>
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
