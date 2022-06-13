import React, { useState } from "react";
import validator from "validator/index";
import "./Input.css";

type InputProps = {
  handleSubmit?: () => void;
  placeholder: string;
  className?: string;
  disabled?: boolean;
  title: string;
  type: "text" | "email" | "password" | "image" | "file";
  value?: string | number;
  error?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void | any;
};
export const Input = ({
  placeholder,
  className,
  disabled,
  title,
  type,
  value,
  onChange,
  error,
  name,
}: InputProps) => {
  return (
    <div className="input">
      <label className="input--label">
        {title}
        <input
          type={type}
          disabled={disabled}
          className={`input--default ${error && "errorInput"} ${className}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
        />
        {error && <span className="error">{error}</span>}
      </label>
    </div>
  );
};
