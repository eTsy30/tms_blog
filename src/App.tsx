import { log } from "console";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

import { postsData } from "./PostsData";
import { dislikePost, fetcPosts, likePost } from "./reduxPosts/reduser";
const items = [
  { title: "All", content: "All content" },
  { title: "My favorites", content: " My favorites content" },
  { title: "Popular", content: " Popular content" },
];
function App() {
  const posts = useSelector((state: any) => state.posts.contetn);
  const dispatch = useDispatch();
  console.table(posts);

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetcPosts(postsData));
    }, 1000);
  }, []);

  return (
    <div className={`App `}>
      {posts?.map((post: any) => {
        return (
          <>
            <div key={post.id}></div>
            <div>
              <span>{post.title}</span>
              <br />
              <span>{String(post.like)}</span>
            </div>
            <button onClick={() => dispatch(likePost(post.id))}> Like</button>
            <button onClick={() => dispatch(dislikePost(post.id))}>
              Dislike
            </button>
          </>
        );
      })}
    </div>
  );
}

export default App;
