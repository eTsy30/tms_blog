import { useSelector } from "react-redux";
import { Card } from "../Cards";
import "./favoritPosts.css";
export const FavoritContent = (props: any) => {
  const likeStore = useSelector((state: any) => state.likeReducer.content);
  const Loader = ({ loading, children }: any) => {
    return loading ? <h1>Loading...</h1> : children;
  };
  return (
    <div className="favoritPosts">
      <Loader loading={!likeStore}>
        <Renderfavorit posts={likeStore} />
      </Loader>
    </div>
  );
};
const Renderfavorit = ({ posts }: any) => {
  return posts
    .filter((el: any) => el.favorit === true)
    .map((element: any, index: number) => (
      <div key={index.toString()} className={`divo${index}`}>
        {index >= 0 && index < 5 && <Card info={element} type="medium" />}
        {index >= 5 && <Card info={element} type="small" />}
      </div>
    ));
};
