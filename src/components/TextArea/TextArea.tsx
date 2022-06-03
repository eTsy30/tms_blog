import React, { useState } from "react";
import "./TextArea.scss";

type NameFormProps = {
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  title: string;
};
export const TextArea = (props: NameFormProps) => {
  const [textAreaValue, setTextAreaValue] = useState("");

  const handleChange = (event: any) => {
    setTextAreaValue(event.target.value);
  };
  const handleSubmit = (event: any) => {
    console.log(textAreaValue);
  };
  return (
    <div className={`textArea ${props.className}`} onSubmit={handleSubmit}>
      <label className="textArea--label">{props.title}</label>
      <textarea
        placeholder={props.placeholder}
        className="textArea--textArea"
        value={textAreaValue}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};
