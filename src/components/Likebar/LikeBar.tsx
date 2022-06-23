import React, { useState } from "react";
import { ReactComponent as Like } from "../image/like.svg";
import { ReactComponent as DisLike } from "../image/dislike.svg";
import { ReactComponent as SvgBwi } from "../image/buttonWithIcon.svg";
import "./LikeBar.css";
import { useDispatch, useSelector } from "react-redux";

import {
  likePost,
  favoritPost,
  dislikePost,
} from "../../Redux/posts/PostsActionReducer";
import { useTheme } from "Redux/Theme/useTheme";
import { dislikeP, favoritP, likeP } from "Redux/Like/Like";

type LikeBarProps = {
  id: number;
  like: boolean;
  dislike: boolean;
  favorit: boolean;
};

export const LikeBar = ({ id, like, dislike, favorit }: LikeBarProps) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const likeStore = useSelector(
    (state: any) => state.likeReducer.content
  )?.find((el: any) => el.id === id);

  const getlike = () => {
    // likeStore[`${id}`] = {
    //   like: true,
    //   dislike: false,
    // };

    if (likeStore?.like) {
      dispatch(likeP(id));
    } else {
      dispatch(likeP(id));
      if (likeStore?.dislike) {
        dispatch(dislikeP(id));
      }
    }
  };

  const getDisLike = () => {
    if (likeStore?.dislike) {
      dispatch(dislikeP(id));
    } else {
      dispatch(dislikeP(id));
      if (likeStore?.like) {
        dispatch(likeP(id));
      }
    }
  };
  const getFavorite = () => {
    dispatch(favoritP(id));
  };

  const chooseTheme = () => {
    return theme.theme === "light" ? "lightLike" : "darkLike";
  };
  return (
    <div className="likeBar">
      <div className="likeBar--div--left">
        <Like
          onClick={getlike}
          className={`${chooseTheme()}  ${
            likeStore?.like && "DisLikeBar_color"
          }`}
        />
        <span className="likeBar-count">{like}</span>

        <DisLike
          onClick={getDisLike}
          className={`${chooseTheme()}  ${
            likeStore?.dislike && "LikeBar_color"
          }`}
        />
        <span className="likeBar-count">{like}</span>
      </div>

      <div className="likeBar--div--right">
        <SvgBwi
          className={`${chooseTheme()}   ${likeStore?.favorit && "LikeBar1"}`}
          onClick={getFavorite}
        />

        {favorit}
        <span className="likeBar-count"></span>
        <a>...</a>
      </div>
    </div>
  );
};
