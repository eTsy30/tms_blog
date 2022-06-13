import { Button } from "components/Button";
import { Input } from "components/Inputs";
import { PageUPHeader } from "components/PageUPHeader/PageUPHeader";
import { TextArea } from "components/TextArea";
import { GeneralPage } from "Pages/GeneralPage/GeneralPage";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddPostPage.scss";
type PropSAddPostPage = {
  className?: string;
};
export const AddPostPage = ({ className }: PropSAddPostPage) => {
  const formRef = useRef(null);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [lesson_num, setLesson_num] = useState("");
  const [img, setImj] = useState("");
  let navigate = useNavigate();
  const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onImgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImj(event.target.value);
  };
  const onTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const onLesson_numChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLesson_num(event.target.value);
  };

  const toServer = async () => {
    const acess = localStorage.getItem("access");
    console.log(acess);

    if (formRef.current) {
      const dataForm = new FormData(formRef.current);
      console.log(dataForm.getAll);

      const headers = {
        Accept: "application/json",
        Authorization: `Bearer ${JSON.parse(acess ?? "")}`,
      };
      let response = await fetch(
        "https://studapi.teachmeskills.by/blog/posts/",
        {
          method: "POST",
          body: dataForm,
          headers,
        }
      );
      console.log("body", await response.json());

      let result = await response.json();

      console.log(result.message);
      navigate("/");
    }
  };
  return (
    <GeneralPage>
      <PageUPHeader label="Home | Add post" text="Add post" />

      <form className={`AddPostPage ${className}`} ref={formRef}>
        <div className="AddPostPage--Input__title">
          <Input
            title="Title"
            placeholder="Astronauts prep for new solar arrays on nearly spacewalk"
            type="text"
            name="title"
            value={title}
            onChange={onTitleChange}
          />
          <Input
            title="Lesson"
            placeholder="iss-us-eva-79"
            type="text"
            name="lesson_num"
            value={lesson_num}
            onChange={onLesson_numChange}
          />
        </div>
        <div className="AddPostPage--Input__Publish">
          <Input
            // id="file-upload"
            title="IMG"
            placeholder="IMG"
            type="file"
            name="image"
            value={img}
            onChange={onImgChange}
            className="imgClass"
          />
        </div>

        <div className="AddPostPage--Input__text">
          <TextArea
            placeholder="Add your text"
            title="Text"
            name="text"
            value={text}
            onChange={onTextChange}
          />
        </div>
        <div className="AddPostPage--Button">
          <div>
            <p className="AddPostPage--Button--Delete">Delete post</p>
          </div>
          <div className="AddPostPage--TwoButton">
            <Button text="Cancel" className="button secondary" />
            <Button
              text="Add post"
              className="button  primary"
              onClick={toServer}
            />
          </div>
        </div>
      </form>
    </GeneralPage>
  );
};
