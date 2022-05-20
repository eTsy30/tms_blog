import React, { useEffect } from "react";
import { Card } from "../Cards";
import "../../Pages/CardPage/CardPage.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../Redux/posts/PostsActionReducer";
import { log } from "console";
interface ICard {
  id: number;
  image: string;
  text: string;
  date: any;
  lesson_num: number;
  title: string;
  author: number;
}

export const AllContent = (props: any) => {
  const posts = useSelector((state: any) => state.postReducer.content);
  console.log(props.cards);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log(props.cards);
    dispatch(fetchPosts(props.cards));
  }, []);
  return (
    <div className="parent">
      {posts.map((element: ICard, index: number) => (
        <div key={index.toString()} className={`div${index}`}>
          {index === 0 && (
            <Card
              type="large"
              title={element.title}
              date={element.date}
              image={element.image}
              content={element.text}
              id={element.id}
            />
          )}
          {index >= 1 && index < 5 && (
            <Card
              type="medium"
              title={element.title}
              date={element.date}
              image={element.image}
              content={element.text}
              id={element.id}
            />
          )}
          {index >= 5 && (
            <Card
              type="small"
              title={element.title}
              date={element.date}
              image={element.image}
              content={element.text}
              id={element.id}
            />
          )}
        </div>
      ))}
    </div>
  );
};
