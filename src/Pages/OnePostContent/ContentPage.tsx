import { useEffect } from "react";
import { GeneralPage } from "../../components/GeneralPage/GeneralPage";
import { Button } from "../../components/Button";
import { Prev } from "../../components/NavForPage/Prev/Prev";
import { Next } from "../../components/NavForPage/Next/Next";
import "./ContentPage.scss";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../Redux/posts/PostsActionReducer";

export const ContentPage = () => {
  const { id } = useParams();
  const posts = useSelector((state: any) => state.postReducer.content);
  const dispatch = useDispatch();

  useEffect(() => {
    if (posts === null) {
      dispatch(getPost());
    }
  }, [id]);
  return (
    <GeneralPage>
      {posts
        .filter((element: any) => element.id === Number(id))
        .map((element: any, index: number) => (
          <div className="ContentPage--wrapper">
            <div className="ContentPage--Home">
              <Link to="/" className="SingIn-link-Back">
                Home
                <span className="ContentPage--Home--span"> | {element.id}</span>
              </Link>
            </div>
            <div className="ContentPage--Title">
              <h2>{element.title}</h2>
            </div>
            <div className="ContentPage--Image">
              <img
                className="ContentPage--Image--img"
                src={element.image}
              ></img>
            </div>
            <div className="ContentPage--Content">{element.text}</div>
            <div className="ContentPage--Button">
              <div className="ContentPage--Button--leftSide">
                <Button
                  className="ContentPage--Button--leftSide--like like"
                  icon="Like"
                ></Button>
                <Button
                  className="ContentPage--Button--leftSide--dislike  dislike"
                  icon="Dislike"
                ></Button>
              </div>
              <div className="ContentPage--Button--rightSide">
                <Button
                  text="Add to favorites"
                  className="buttonWithIcon ContentPage--Button--rightSide--ButtomWithIcon"
                  icon="SvgBwi"
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
        ))}
    </GeneralPage>
  );
};
