import React, { useState } from "react";
import { useTheme } from "Redux/Theme/useTheme";
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
  const theme = useTheme();
  return (
    <div className={`input ${theme.theme}`}>
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
