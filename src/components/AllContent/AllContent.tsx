import React, { useEffect } from "react";
import { Card } from "../Cards";
import "../../Pages/CardPage/CardPage.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../Redux/posts/PostsActionReducer";

import { postsData } from "../../ServerTemp/server";
import { Loader } from "../Loader/Loader";
import { log } from "console";

interface ICard {
  id: number;
  image: string;
  text: string;
  date: any;
  lesson_num: number;
  title: string;
  author: number;
  like?: boolean;
  dislike: boolean;
  favorit: boolean;
}

export const AllContent = (props: any) => {
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
    <div className="parent">
      <Loader loading={!posts}>
        <RenderPosts posts={posts} />
      </Loader>
    </div>
  );
};

const RenderPosts = ({ posts }: any) => {
  console.log("==================================");
  return posts.map((element: ICard, index: number) => (
    <div key={index.toString()} className={`div${index}`}>
      {index === 0 && <Card info={element} type="large" />}
      {index >= 1 && index < 5 && <Card info={element} type="medium" />}
      {index >= 5 && <Card info={element} type="small" />}
    </div>
  ));
};
