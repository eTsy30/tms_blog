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
  const posts = useSelector((state: any) => state.postReducer.content);
  const searchState = useSelector((state: any) => state.searchReducer.content);
  const dispatch = useDispatch();
  console.log("searchState==", searchState);

  useEffect(() => {
    if (posts === null) {
      dispatch(getPost());
    }
  }, []);

  return (
    <GeneralPage label="SearchPage">
      <p className="SearchPage-Label">Search results ‘Astronauts’</p>
      {searchState?.length === 0 ? (
        <h1>Net postov</h1>
      ) : searchState === null ? (
        posts?.map((element: ICard, index: number) => (
          <div key={element.id} className={`div${index}`}>
            {index >= 0 && <CardSearch info={element} />}
          </div>
        ))
      ) : (
        searchState?.map((element: ICard, index: number) => (
          <div key={element.id} className={`div${index}`}>
            {index >= 0 && <CardSearch info={element} />}
          </div>
        ))
      )}
    </GeneralPage>
  );
};
