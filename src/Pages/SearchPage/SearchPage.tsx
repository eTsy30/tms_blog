import "./SearchPage.scss";
import { useDispatch, useSelector } from "react-redux";

import { CardSearch } from "../../components/CardSearch/CardSearch";
import { getPost } from "../../Redux/posts/PostsActionReducer";
import { useEffect } from "react";
import { GeneralPage } from "Pages/GeneralPage/GeneralPage";

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
        dispatch(getPost()); // пока файлы гружу с файла
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
