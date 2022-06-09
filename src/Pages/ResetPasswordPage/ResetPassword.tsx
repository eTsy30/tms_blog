import React, { useState } from "react";

import { Input } from "../../components/Inputs";
import { Button } from "../../components/Button/Button";

import "./ResetPassword.css";
import { Link, useNavigate } from "react-router-dom";
import { GeneralPage } from "Pages/GeneralPage/GeneralPage";
type PropResetPassword = {
  className: string;
};
export const ResetPassword = ({ className }: PropResetPassword | any) => {
  const [email, setEmail] = useState("");
  const [uid, setUid] = useState("");
  const [token, setToken] = useState("");
  const [button, setButton] = useState(true);
  const [pas, setPas] = useState("");
  let navigate = useNavigate();
  const emailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const emailUID = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUid(event.target.value);
  };
  const passChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPas(event.target.value);
  };
  const emailToken = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToken(event.target.value);
  };

  const getUID = async () => {
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
    console.log(response.json());
    setButton(false);
  };
  const changePassword = async () => {
    const formData = {
      uid: uid,
      token: token,
      new_password: pas,
    };
    console.log(formData);

    const response = await fetch(
      "https://studapi.teachmeskills.by/auth/users/reset_password_confirm/",
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    response.ok ? navigate("/") : alert(response.text());
    console.log(response.json());
  };

  return (
    <GeneralPage>
      <div className={` ResetPassword-centre `}>
        <Link to="/" className="ResetPassword-link-Back">
          Back to home
        </Link>
        <p className="ResetPassword-Main-Label">Reset Password</p>

        <div className={`ResetPassword-Input-Wrapper ${className}`}>
          {button ? (
            <Input
              placeholder="Your email"
              type="email"
              title="Email"
              onChange={emailChange}
              value={email}
            />
          ) : (
            <Input
              placeholder="New password"
              type="text"
              title="New password"
              onChange={passChange}
              value={pas}
            />
          )}
          <Input
            placeholder="Your uid"
            type="text"
            title="UID"
            onChange={emailUID}
            value={uid}
            disabled={button}
          />
          <Input
            placeholder="Your token"
            type="text"
            title="Token"
            onChange={emailToken}
            value={token}
            disabled={button}
          />

          {button ? (
            <Button
              text="Go to home"
              className="ResetPassword-Button button"
              onClick={getUID}
            />
          ) : (
            <Button
              text="Change Password"
              className="ResetPassword-Button button"
              onClick={changePassword}
            />
          )}
        </div>
      </div>
    </GeneralPage>
  );
};
