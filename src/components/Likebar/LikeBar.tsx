import React, { useState } from "react";
import { ReactComponent as Like } from "../image/like.svg";
import { ReactComponent as SvgBwi } from "../image/buttonWithIcon.svg";
import "./LikeBar.css";
import { useDispatch, useSelector } from "react-redux";

import {
  likePost,
  favoritPost,
  dislikePost,
} from "../../Redux/posts/PostsActionReducer";

type LikeBarProps = {
  id: number;
  like: boolean;
  dislike: boolean;
  favorit: boolean;
};

export const LikeBar = ({ id, like, dislike, favorit }: LikeBarProps) => {
  const dispatch = useDispatch();
  ////////////////////
  const addToFavorite = () => {
    if (like) {
      dispatch(likePost(id));
    } else {
      dispatch(likePost(id));
      if (dislike) {
        dispatch(dislikePost(id));
      }
    }
  };

  const removeFromFavorite = () => {
    if (dislike) {
      dispatch(dislikePost(id));
    } else {
      dispatch(dislikePost(id));
      if (like) {
        dispatch(likePost(id));
      }
    }
  };
  const favorite = () => {
    dispatch(favoritPost(id));
  };

  return (
    <div className="likeBar">
      <div className="likeBar--div--left">
        <Like
          onClick={addToFavorite}
          className={`likeBar-Like ${like && "DisLikeBar_color"}`}
        />
        <span className="likeBar-count">{like}</span>

        <Like
          className={` ${dislike && "LikeBar_color"}`}
          onClick={removeFromFavorite}
        />
        <span className="likeBar-count">{like}</span>
      </div>

      <div className="likeBar--div--right">
        <SvgBwi className={` ${favorit && "LikeBar1"}`} onClick={favorite} />
        {favorit}
        <span className="likeBar-count"></span>
        <a>...</a>
      </div>
    </div>
  );
};
