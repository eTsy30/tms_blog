import React, { useState } from "react";
import { ReactComponent as Like } from "../image/like.svg";
import { ReactComponent as SvgBwi } from "../image/buttonWithIcon.svg";
import "./LikeBar.css";

export const LikeBar = () => {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  const [likeActiv, setLikeActiv] = useState(false);
  const [disLikeActiv, setDisLikeActiv] = useState(false);

  const likeF = () => {
    if (likeActiv) {
      setLikeActiv(false);
      setLike(like - 1);
    } else {
      setLikeActiv(true);
      setLike(like + 1);
      if (disLikeActiv) {
        setDisLikeActiv(false);
        setLike(like + 1);
        setDisLike(disLike - 1);
      }
    }
  };
  const dislikeF = () => {
    if (disLikeActiv) {
      setDisLikeActiv(false);
      setDisLike(disLike - 1);
    } else {
      setDisLikeActiv(true);
      setDisLike(disLike + 1);
      if (likeActiv) {
        setLikeActiv(false);
        setDisLike(disLike + 1);
        setLike(like - 1);
      }
    }
  };

  return (
    <div className="likeBar">
      <div className="likeBar--div--left">
        <Like
          onClick={likeF}
          className={`likeBar-Like ${likeActiv && "LikeBar_color"}`}
        />
        <span className="likeBar-count">{like}</span>
        <Like
          className={`${disLikeActiv && "DisLikeBar_color"}`}
          onClick={dislikeF}
        />
        <span className="likeBar-count">{disLike}</span>
      </div>

      <div className="likeBar--div--right">
        <SvgBwi />
        <span className="likeBar-count"></span>
        <a>...</a>
      </div>
    </div>
  );
};
