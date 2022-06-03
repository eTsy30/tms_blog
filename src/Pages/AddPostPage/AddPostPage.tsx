import { Button } from "components/Button";
import { Input } from "components/Inputs";
import { PageUPHeader } from "components/PageUPHeader/PageUPHeader";
import { TextArea } from "components/TextArea";
import { GeneralPage } from "Pages/GeneralPage/GeneralPage";
import "./AddPostPage.scss";
type PropSAddPostPage = {
  className?: string;
};
export const AddPostPage = ({ className }: PropSAddPostPage) => {
  return (
    <GeneralPage>
      <PageUPHeader label="Home | Add post" text="Add post" />

      <div className={`AddPostPage ${className}`}>
        <div className="AddPostPage--Input__title">
          <Input
            title="Title"
            placeholder="Astronauts prep for new solar arrays on nearly spacewalk"
            type="text"
            className=""
          />
          <Input
            title="URL"
            placeholder="iss-us-eva-79"
            type="text"
            className="q"
          />
        </div>
        <div className="AddPostPage--Input__Publish">
          <Input
            title="Title"
            placeholder="Astronauts prep for new solar arrays on nearly spacewalk"
            type="text"
          />
          <Input title="URL" placeholder="iss-us-eva-79" type="text" />
        </div>
        <div className="AddPostPage--Input__Description">
          <TextArea placeholder="Add your text" title="Description" />
        </div>

        <div className="AddPostPage--Input__text">
          <TextArea placeholder="Add your text" title="Text" className="" />
        </div>
        <div className="AddPostPage--Button">
          <div>
            <p className="AddPostPage--Button--Delete">Delete post</p>
          </div>
          <div className="AddPostPage--TwoButton">
            <Button text="Cancel" className="button secondary" />
            <Button text="Add post" className="button  primary" />
          </div>
        </div>
      </div>
    </GeneralPage>
  );
};
