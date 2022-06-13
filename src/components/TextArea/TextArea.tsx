import React, { useState } from "react";
import { text } from "stream/consumers";
import "./TextArea.scss";

type NameFormProps = {
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  title: string;
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void | any;
};
export const TextArea = (props: NameFormProps) => {
  const handleSubmit = (event: any) => {
    console.log(4);
  };
  return (
    <div className={`textArea ${props.className}`} onSubmit={handleSubmit}>
      <label className="textArea--label">{props.title}</label>
      <textarea
        placeholder={props.placeholder}
        className="textArea--textArea"
        value={props.value}
        onChange={props.onChange}
        name={props.name}
      ></textarea>
    </div>
  );
};
