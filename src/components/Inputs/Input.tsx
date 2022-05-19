import React, { useState } from "react";
import validator from "validator/index";
import "./Input.css";

type InputProps = {
  handleSubmit?: () => void;
  placeholder: string;
  className?: string;
  disabled?: boolean;
  title: string;
  type: "text" | "email" | "password";
};
export const Input = ({
  placeholder,
  className,
  disabled,
  title,
  type,
}: InputProps) => {
  const [inputValue, setInputValue] = useState("");
  const [eror, setEror] = useState("");
  const handleChange = (event: any) => {
    setInputValue(event.target.value);

    if (type === "email") {
      if (!validator.isEmail(event.target.value)) {
        setEror("Eror");
      } else {
        setEror("");
      }
    }

    if (type === "password") {
      if (
        validator.isStrongPassword(event.target.value, {
          minLength: 8,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1,
        })
      ) {
        setEror("Is Strong Password");
      } else {
        setEror("Is Not Strong Password");
      }
    }
  };
  const handleSubmit = (event: any) => {
    alert("Отправленное имя: " + inputValue);
    event.preventDefault();
  };
  return (
    <div className="input" onSubmit={handleSubmit}>
      <label className="input--label">
        <span>{title}</span>
        <input
          type={type}
          disabled={disabled}
          className={`input--default ${eror && "errorInput"} ${className}`}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
        />
        {eror && <span className="error">{eror}</span>}
      </label>
    </div>
  );
};
