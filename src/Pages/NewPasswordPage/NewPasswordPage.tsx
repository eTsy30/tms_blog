import { Button } from "components/Button";
import { Input } from "components/Inputs";
import { Modal } from "components/Modal/Modal";
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
  const [dis, setDis] = useState(false);

  const passwordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const confirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDis(true);
    setConfirmPassword(event.target.value);
  };
  const uidLocal = localStorage.getItem("uid");
  const tokenLocal = localStorage.getItem("token");
  console.log("uidLocal", uidLocal);
  console.log("tokenLocal", tokenLocal);

  const changePassword = async () => {
    const formData = {
      uid: uidLocal,
      token: tokenLocal,
      new_password: confirmPassword,
    };
    console.log("formData_new_Pas", formData);

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
    console.log(response);
    console.log(response.ok);

    response.ok
      ? setText("Выш пароль изменён")
      : setText("Ошибка HTTP: " + response.statusText);
    setResponseStatus(response.ok);
    setModaiActive(true);
  };

  useEffect(() => {
    if (password !== "" && confirmPassword !== "") {
      setDis(false);
    } else {
      setDis(true);
    }
  }, [password, confirmPassword]);
  return (
    <>
      <GeneralPage>
        <div className={` ResetPassword-centre `}>
          <Link to="/" className="ResetPassword-link-Back">
            Back to home
          </Link>
          <p className="ResetPassword-Main-Label">New Password</p>

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
              disabled={dis}
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
        naviganeNOTSucsess="/newPassword"
      ></Modal>
    </>
  );
};

export default NewPasswordPage;
