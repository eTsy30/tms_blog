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
  value?: string;
  error?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void | any;
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
}: InputProps) => {
  return (
    <div
      className="input"
      // onSubmit={handleSubmit}
    >
      <label className="input--label">
        <span>{title}</span>
        <input
          type={type}
          disabled={disabled}
          className={`input--default ${error && "errorInput"} ${className}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {error && <span className="error">{error}</span>}
      </label>
    </div>
  );
};
