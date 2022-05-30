import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { favoritPost } from "../../Redux/posts/PostsActionReducer";
import { Card } from "../Cards";
import "./favoritPosts.css";
import { fetchPosts } from "../../Redux/posts/PostsActionReducer";
import { postsData } from "../../ServerTemp/server";
export const FavoritContent = (props: any) => {
  const postsFilter = useSelector((state: any) => state.postReducer.content);
  const Loader = ({ loading, children }: any) => {
    return loading ? <h1>Loading...</h1> : children;
  };
  const dispatch = useDispatch();
  return (
    <div className="favoritPosts">
      <Loader loading={!postsFilter}>
        <Renderfavorit posts={postsFilter} />
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
