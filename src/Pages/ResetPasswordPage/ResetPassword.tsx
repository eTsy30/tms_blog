import React, { useState } from "react";

import { Input } from "../../components/Inputs";
import { Button } from "../../components/Button/Button";

import "./ResetPassword.css";
import { Link } from "react-router-dom";
import { GeneralPage } from "Pages/GeneralPage/GeneralPage";
type PropResetPassword = {
  className: string;
};
export const ResetPassword = ({ className }: PropResetPassword | any) => {
  const [email, setEmail] = useState("");

  const emailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const changePassword = async () => {
    const formData = {
      email: email,
    };

    const response = await fetch(
      "https://studapi.teachmeskills.by/auth/users/reset_password/",
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <GeneralPage>
      <div className={` ResetPassword-centre `}>
        <Link to="/" className="ResetPassword-link-Back">
          Back to home
        </Link>
        <p className="ResetPassword-Main-Label">Reset Password</p>

        <div className={`ResetPassword-Input-Wrapper ${className}`}>
          <Input
            placeholder="Your email"
            type="email"
            title="Email"
            onChange={emailChange}
            value={email}
          />
          <Button
            text="Go to home"
            className="ResetPassword-Button button"
            onClick={changePassword}
          />
        </div>
      </div>
    </GeneralPage>
  );
};
