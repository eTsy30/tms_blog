import { useEffect } from "react";
import { Button } from "../../components/Button";
import { Prev } from "../../components/NavForPage/Prev/Prev";
import { Next } from "../../components/NavForPage/Next/Next";
import "./ContentPage.scss";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOnePost } from "../../Redux/singlePost/singePost";
import { GeneralPage } from "Pages/GeneralPage/GeneralPage";
import { ReactComponent as Like } from "../../components/image/like.svg";
import { ReactComponent as SvgBwi } from "../../components/image/buttonWithIcon.svg";
import { ReactComponent as Dislike } from "../../components/image/dislike.svg";
import {
  dislikePost,
  favoritPost,
  likePost,
} from "Redux/posts/PostsActionReducer";
import { useTheme } from "Redux/Theme/useTheme";
import { dislikeP, favoritP, likeP } from "Redux/Like/Like";

export const ContentPage = () => {
  const { id } = useParams();
  let postId = Number(id);

  const postIdPrev = postId - 1;
  const postIdNext = postId + 1;
  const dispatch = useDispatch();
  const theme = useTheme();

  const likeStore = useSelector((state: any) => state.likeReducer.content);

  const postPrev = useSelector((state: any) => state.likeReducer.content)?.find(
    (el: any) => el.id === Number(postIdPrev)
  );

  const postsNew = useSelector((state: any) => state.likeReducer.content)?.find(
    (el: any) => el.id === Number(postIdNext)
  );

  const getInfoOnePost = (id: number) => {
    return likeStore?.find((post: { id: number }) => post.id === id);
  };
  const postOne = getInfoOnePost(postId);
  console.log(postOne);

  const addToLike = () => {
    if (postOne.like) {
      dispatch(likeP(postOne.id));
    } else {
      dispatch(likeP(postOne.id));
      if (postOne.dislike) {
        dispatch(dislikeP(postOne.id));
      }
    }
  };

  const addToDisLike = () => {
    if (postOne.dislike) {
      dispatch(dislikeP(postOne.id));
    } else {
      dispatch(dislikeP(postOne.id));
      if (postOne.like) {
        dispatch(likeP(postOne.id));
      }
    }
  };
  const favorite = () => {
    dispatch(favoritP(postOne.id));
  };

  useEffect(() => {
    dispatch(getOnePost(id));
  }, [dispatch, id, postId]);

  return (
    <GeneralPage>
      {}
      {postOne && (
        <div className="ContentPage--wrapper">
          <div className="ContentPage--Home">
            <Link to="/" className={`SingIn-link-Back  ${theme.theme}`}>
              <span className={` ${theme.theme}`}>Home</span>
              <span className={`ContentPage--Home--span `}>| {postOne.id}</span>
            </Link>
          </div>

          <div className={`ContentPage--Title ${theme.theme}`}>
            <h2>
              {postOne.title} {postOne.like}
            </h2>
          </div>
          <div className="ContentPage--Image">
            <img
              className="ContentPage--Image--img"
              alt="no"
              src={postOne.image}
            ></img>
          </div>
          <div className={`ContentPage--Content ${theme.theme}`}>
            {postOne.text}
          </div>
          <div className="ContentPage--Button">
            <div className={`ContentPage--Button--leftSide ${theme.theme}`}>
              <Button
                text={postOne.like}
                icon={<Like />}
                onClick={addToLike}
                className={`ContentPage--Button--leftSide--like like ${
                  postOne.like && "Like--Button_color"
                }`}
              ></Button>
              <Button
                text={postOne.dislike}
                icon={<Dislike />}
                onClick={addToDisLike}
                className={`ContentPage--Button--leftSide--dislike  dislike ${
                  postOne.dislike && "DisLike--Button_color"
                }`}
              ></Button>
            </div>
            <div className="ContentPage--Button--rightSide">
              <Button
                text="Add to favorites"
                className={`buttonWithIcon ContentPage--Button--rightSide--ButtomWithIcon ${
                  postOne.favorit && "Favorit--Button_color"
                }`}
                icon={<SvgBwi />}
                onClick={favorite}
              ></Button>
            </div>
          </div>
          <div className="ContentPage--wrapper--navigation">
            <Link
              to={postPrev?.title ? `/blogs/${postId - 1}` : `/blogs/${postId}`}
            >
              <Prev textLink={postPrev?.title}></Prev>
            </Link>
            <Link
              to={postsNew?.title ? `/blogs/${postId + 1}` : `/blogs/${postId}`}
            >
              <Next textLink={postsNew?.title}></Next>
            </Link>
          </div>
        </div>
      )}
    </GeneralPage>
  );
};
