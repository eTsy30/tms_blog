import { useSelector } from "react-redux";
import { favoritPost } from "../../Redux/posts/PostsActionReducer";
import { Card } from "../Cards";
import "./favoritPosts.css";
export const FavoritContent = () => {
  const posts = useSelector((state: any) => state.postReducer.content);

  const Loader = ({ loading, children }: any) => {
    return loading ? <h1>Loading...</h1> : children;
  };

  const favoritPosts = posts.filter((el: any) => el.favorit === true);
  return (
    <div className="favoritPosts">
      <Loader loading={!posts}>
        <Renderfavorit posts={posts} />
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
