import React, { useEffect } from "react";
import { GeneralPage } from "../../components/GeneralPage/GeneralPage";
import "./SearchPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../Redux/posts/PostsActionReducer";
import { postsData } from "../../ServerTemp/server";
import { CardSearch } from "../../components/CardSearch/CardSearch";

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
export const SearchPage = () => {
  const posts = useSelector((state: any) => state.postReducer.content);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      if (posts === null) {
        dispatch(fetchPosts(postsData)); // пока файлы гружу с файла
      }
    }, 3000);
  }, []);
  return (
    <GeneralPage label="SearchPage">
      <p className="SearchPage-Label">Search results ‘Astronauts’</p>
      {posts?.map((element: ICard, index: number) => (
        <div key={index.toString()} className={`div${index}`}>
          {index >= 0 && <CardSearch info={element} />}
        </div>
      ))}
    </GeneralPage>
  );
};
