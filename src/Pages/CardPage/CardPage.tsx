import React, { useState, useEffect } from "react";
import { GeneralPage } from "../../components/GeneralPage/GeneralPage";
import { Card } from "../../components/Cards";

import "./CardPage.css";

import { log } from "console";
interface ICard {
  id: number;
  label: string;
  content: string;
  image: string;
  date: string;
}

export const CardPage = (props: any) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setPosts(props.cards);
    }, 1000);
  }, []);

  return (
    <GeneralPage label="Blog">
      {" "}
      <div>
        TABS
        {/* <Tabs /> */}
        <div className="parent">
          {posts.map((element: ICard, index) => (
            <div key={index.toString()} className={`div${index}`}>
              <>
                {index === 0 && (
                  <Card
                    type="large"
                    title={element.label}
                    date={element.date}
                    image={element.image}
                    content={element.content}
                  />
                )}
                {index >= 1 && index < 5 && (
                  <Card
                    type="medium"
                    title={element.label}
                    date={element.date}
                    image={element.image}
                    content={element.content}
                  />
                )}
                {index >= 5 && (
                  <Card
                    type="small"
                    title={element.label}
                    date={element.date}
                    image={element.image}
                    content={element.content}
                  />
                )}
              </>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </GeneralPage>
  );
};
