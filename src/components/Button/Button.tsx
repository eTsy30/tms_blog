import React from "react";
import "./Button.scss";
import clsx from "clsx";

type Buttonprops = {
  text?: string;
  onClick?: (event: any) => void | any;
  className: string;
  disabled?: boolean;
  icon?: any | undefined;
};
export const Button = ({
  text,
  onClick,
  className,
  disabled,
  icon,
}: Buttonprops) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={clsx(className)}
      onClick={onClick}
    >
      {icon}
      {text}
    </button>
  );
};
