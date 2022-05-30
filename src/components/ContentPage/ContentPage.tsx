import React from "react";
import { GeneralPage } from "../GeneralPage/GeneralPage";
import { Button } from "../Button";
import { ReactComponent as IconLikeIcon } from "../../../image/like.svg";
import { ReactComponent as IconDislikeIcon } from "../../../image/like.svg";
import { Prev } from "../NavForPage/Prev/Prev";
import { Next } from "../NavForPage/Next/Next";
import "./ContentPage.scss";
type ContentPageProp = {
  cardNumber: string;
  title: string;
  image: string | undefined;
  textContent: string;
};
export const ContentPage = ({
  cardNumber,
  title,
  image,
  textContent,
}: ContentPageProp) => {
  return (
    <GeneralPage>
      <div className="ContentPage--wrapper">
        <div className="ContentPage--Home">
          <a href="#" className="ContentPage--Home--a">
            {" "}
            Home
          </a>
          <span className="ContentPage--Home--span"> | {cardNumber}</span>
        </div>
        <div className="ContentPage--Title">
          <h2>{title}</h2>
        </div>
        <div className="ContentPage--Image">
          <img className="ContentPage--Image--img" src={image}></img>
        </div>
        <div className="ContentPage--Content">{textContent}</div>
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
    </GeneralPage>
  );
};
