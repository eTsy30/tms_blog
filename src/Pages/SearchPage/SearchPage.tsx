import "./SearchPage.scss";
import { useDispatch, useSelector } from "react-redux";

import { CardSearch } from "../../components/CardSearch/CardSearch";
import { getPost } from "../../Redux/posts/PostsActionReducer";
import { useContext, useEffect } from "react";
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
  const posts = useSelector((state: any) => state.searchReducer.content);

  return (
    <GeneralPage label="SearchPage">
      <p className="SearchPage-Label">Search results </p>
      {posts?.length === 0 ? (
        <h1>Net postov</h1>
      ) : posts === null ? (
        posts?.map((element: ICard, index: number) => (
          <div key={element.id} className={`div${index}`}>
            {index >= 0 && <CardSearch info={element} />}
          </div>
        ))
      ) : (
        posts?.map((element: ICard, index: number) => (
          <div key={element.id} className={`div${index}`}>
            {index >= 0 && <CardSearch info={element} />}
          </div>
        ))
      )}
    </GeneralPage>
  );
};
