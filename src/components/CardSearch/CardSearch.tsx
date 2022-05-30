import { LikeBar } from "../Likebar/LikeBar";
import "./CardSearch.css";

type CardProps = {
  info: any;
};

export const CardSearch = ({ info }: CardProps) => {
  return (
    <div className={`CardSearch--Card CardSearch`}>
      <div className="CardSearch--Own--Wrapper">
        <div className="CardSearch--wrapper--image">
          <img src={info.image} alt="no" className={`CardSearch--Img`} />
        </div>
        <div className={`CardSearch--Content`}>
          <div>
            <h4 className="CardSearch--time">{info.date}</h4>
            <h1 className={`CardSearch--Name`}>{info.title}</h1>
          </div>
        </div>
      </div>
      <LikeBar
        id={info.id}
        favorit={info.favorit}
        dislike={info.dislike}
        like={info.like}
      />
    </div>
  );
};
