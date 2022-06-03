import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Inputs";

import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./SingUp.css";
import { signUp } from "../../Redux/users/UsersActionReducer";
import validator from "validator";
import { log } from "console";
import { GeneralPage } from "Pages/GeneralPage/GeneralPage";
type PropsSingUp = {
  className?: string;
};
export const SingUp = (className: PropsSingUp) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [error, setEror] = useState("");
  // const { theme, toggleTheme } = useTheme()
  const dispatch = useDispatch();
  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    // if (!validator.isEmail(event.target.value)) {
    //   setEror("Eror");
    // } else {
    //   setEror("");
    // }
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onConfirmedPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmedPassword(event.target.value);
    if (confirmedPassword !== password) {
    }
  };

  let navigate = useNavigate();
  const submitForm = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    const formData = {
      username: name,
      email: email,
      password: password,
    };
    navigate("/verify");

    dispatch(signUp(formData));
  };
  const buttonEneblerd = () => {
    return confirmedPassword !== password;
  };

  return (
    <GeneralPage>
      <div className={` SingUp-centre `}>
        <Link to="/" className="SingIn-link-Back">
          Back to home
        </Link>

        <p className="SingUp-Main-Label">Sing Up</p>

        <div className={`SingUp-Input-Wrapper ${className}`}>
          <Input
            placeholder="Your name"
            type="text"
            title="Name"
            className="SingUp-Imput-Name"
            onChange={onNameChange}
            value={name}
          />
          <Input
            placeholder="Your email"
            type="email"
            title="Email"
            onChange={onEmailChange}
            value={email}
            error={error}
          />
          <Input
            placeholder="Password"
            type="password"
            title="Password"
            onChange={onPasswordChange}
            value={password}
          />

          <Input
            placeholder="Confirm password"
            type="text"
            title="Confirm password"
            className="SingUp-Imput-Password"
            onChange={onConfirmedPasswordChange}
            value={confirmedPassword}
          />
          <a href="#" className="SingUp-Input-link_fogot">
            Forgot password?
          </a>

          <Button
            text="Sign In"
            className="SingUp-Button-SingIn button primary"
            onClick={submitForm}
            disabled={buttonEneblerd()}
          />
          <span className="SingIn-Down-Span">
            Don’t have an account? <a href="#">Sign Up</a>{" "}
          </span>
        </div>
      </div>
    </GeneralPage>
  );
};
