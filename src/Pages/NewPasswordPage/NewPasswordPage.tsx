import { Button } from "components/Button";
import { Input } from "components/Inputs";
import { Modal } from "components/Modal/Modal";
import { PageUPHeader } from "components/PageUPHeader/PageUPHeader";
import { GeneralPage } from "Pages/GeneralPage/GeneralPage";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../VerifyPage/Verify.scss";
const NewPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [modalActive, setModaiActive] = useState(false);
  const [text, setText] = useState("");
  const [responseStatus, setResponseStatus] = useState(false);
  const [disabled, setDisisabled] = useState(false);

  const passwordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const confirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDisisabled(true);
    setConfirmPassword(event.target.value);
  };
  const uidLocal = localStorage.getItem("uid");
  const tokenLocal = localStorage.getItem("token");

  const changePassword = async () => {
    const formData = {
      uid: uidLocal,
      token: tokenLocal,
      new_password: confirmPassword,
    };

    const response = await fetch(
      "https://studapi.teachmeskills.by/auth/users/reset_password_confirm/",
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    response.ok
      ? setText("Выш пароль изменён")
      : setText("Ошибка HTTP: " + response.statusText);
    setResponseStatus(response.ok);
    setModaiActive(true);
  };

  useEffect(() => {
    if (password !== "" && confirmPassword !== "") {
      setDisisabled(false);
    } else {
      setDisisabled(true);
    }
  }, [password, confirmPassword]);
  return (
    <>
      <GeneralPage>
        <div className={` ResetPassword-centre `}>
          <PageUPHeader label="New Password" text="Back to home" />

          <div className={`ResetPassword-Input-Wrapper `}>
            <Input
              placeholder="Your password"
              type="text"
              title="Password"
              onChange={passwordChange}
              value={password}
            />
            <Input
              placeholder="Confirm your password"
              type="text"
              title="Confirm password"
              onChange={confirmPasswordChange}
              value={confirmPassword}
            />
            <Button
              text="Go to home"
              className="ResetPassword-Button button"
              onClick={changePassword}
              disabled={disabled}
            />
          </div>
        </div>
      </GeneralPage>
      <Modal
        active={modalActive}
        setActive={setModaiActive}
        text={text}
        status={responseStatus}
        naviganeSucsess="/"
        naviganeNOTSucsess="/new-password"
      ></Modal>
    </>
  );
};

export default NewPasswordPage;
