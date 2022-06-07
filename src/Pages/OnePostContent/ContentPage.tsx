import { useEffect } from "react";
import { Button } from "../../components/Button";
import { Prev } from "../../components/NavForPage/Prev/Prev";
import { Next } from "../../components/NavForPage/Next/Next";
import "./ContentPage.scss";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOnePost } from "../../Redux/singlePost/singePost";
import { Loader } from "../../components/Loader/Loader";
import { GeneralPage } from "Pages/GeneralPage/GeneralPage";
import { ReactComponent as Like } from "../../components/image/like.svg";
import { ReactComponent as SvgBwi } from "../../components/image/buttonWithIcon.svg";
import { ReactComponent as Dislike } from "../../components/image/dislike.svg";
import {
  dislikePost,
  favoritPost,
  likePost,
} from "Redux/posts/PostsActionReducer";
export const ContentPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const postsLike = useSelector(
    (state: any) => state.postReducer.content
  )?.find((el: any) => el.id === Number(id));

  //==========================================
  const addToLike = () => {
    if (postsLike.like) {
      dispatch(likePost(postsLike.id));
    } else {
      dispatch(likePost(postsLike.id));
      if (postsLike.dislike) {
        dispatch(dislikePost(postsLike.id));
      }
    }
  };

  const addToDisLike = () => {
    if (postsLike.dislike) {
      dispatch(dislikePost(postsLike.id));
    } else {
      dispatch(dislikePost(postsLike.id));
      if (postsLike.like) {
        dispatch(likePost(postsLike.id));
      }
    }
  };
  const favorite = () => {
    dispatch(favoritPost(postsLike.id));
  };

  //=================================
  useEffect(() => {
    dispatch(getOnePost(id));
  }, [id]);

  return (
    <GeneralPage>
      {postsLike && (
        <div className="ContentPage--wrapper">
          <div className="ContentPage--Home">
            <Link to="/" className="SingIn-link-Back">
              Home
              <span className="ContentPage--Home--span"> | {postsLike.id}</span>
            </Link>
          </div>
          <div className="ContentPage--Title">
            <h2>
              {postsLike.title} {postsLike.like}
            </h2>
          </div>
          <div className="ContentPage--Image">
            <img
              className="ContentPage--Image--img"
              src={postsLike.image}
            ></img>
          </div>
          <div className="ContentPage--Content">{postsLike.text}</div>
          <div className="ContentPage--Button">
            <div className="ContentPage--Button--leftSide">
              <Button
                text={postsLike.like}
                icon={<Like />}
                onClick={addToLike}
                className={`ContentPage--Button--leftSide--like like ${
                  postsLike.like && "Like--Button_color"
                }`}
              ></Button>
              <Button
                text={postsLike.dislike}
                icon={<Dislike />}
                onClick={addToDisLike}
                className={`ContentPage--Button--leftSide--dislike  dislike ${
                  postsLike.dislike && "DisLike--Button_color"
                }`}
              ></Button>
            </div>
            <div className="ContentPage--Button--rightSide">
              <Button
                text="Add to favorites"
                className={`buttonWithIcon ContentPage--Button--rightSide--ButtomWithIcon ${
                  postsLike.favorit && "DisLike--Button_color"
                }`}
                icon={<SvgBwi />}
                onClick={favorite}
              ></Button>
            </div>
          </div>
          <div className="ContentPage--wrapper--navigation">
            <Prev
              textLink="When Webpack comes across this syntax, it automatically starts code-splitting your app. If you’re using Create React App, this is already configured for you and you can start using it immediately. It’s also supported out of the box in Next.js.
       "
            ></Prev>
            <Next
              textLink="When Webpack comes across this syntax, it automatically starts code-splitting your app. If you’re using Create React App, this is already configured for you and you can start using it immediately. It’s also supported out of the box in Next.js.
       "
            ></Next>
          </div>
        </div>
      )}
    </GeneralPage>
  );
};
