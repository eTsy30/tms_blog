import React, { useState } from "react";
import { SingIn } from "../SingIn/SingIn";
import { Input } from "../../components/Inputs";
import { GeneralPage } from "../../components/GeneralPage/GeneralPage";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import "./SingUp.css";
import { useDispatch } from "react-redux";
import { singUp } from "../../Redux/users/userReducer";
type PropsSingUp = {
  className?: string;
};

export const SingUp = (className: PropsSingUp) => {
  const [confinmPassword, setConfinmPassword] = useState("");
  const [password, setCPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch;
  const onConfimmedPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setConfinmPassword(event.target.value);
  };
  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };
  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };
  const submitForm = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const formData = {
      name,
      email,
      password,
    };
    dispatch(singUp());
  };
  return (
    <GeneralPage>
      <form className={` SingUp-centre `}>
        <a className="SingUp-link-Back">
          <Link to="/" className="SingIn-link-Back">
            Back to home
          </Link>
        </a>
        <p className="SingUp-Main-Label">Sing Up</p>

        <div className={`SingUp-Input-Wrapper ${className}`}>
          <Input
            placeholder="Confirm password"
            type="text"
            title="Confirm password"
            className="SingUp-Imput-Password"
            value={confinmPassword}
            onChange={onConfimmedPasswordChange}
          />
          {/* <Input placeholder="Your email" type="email" title="Email" value="" />  DOPISAT!!!!!!!!!!*/}
          <Input
            placeholder="Password"
            type="password"
            title="Password"
            value={email}
            onChange={onEmailChange}
          />
          <Input
            placeholder="Your name"
            type="text"
            title="Name"
            className="SingUp-Imput-Name"
            value={name}
            onChange={onNameChange}
          />
          <a href="#" className="SingUp-Input-link_fogot">
            Forgot password?
          </a>
          <button onClick={() => dispatch(singUp())}>
            {" "}
            qwertzuiopoiuztrew
          </button>
          <Button
            text="Sign In"
            className="SingUp-Button-SingIn button"
            // onClick={submitForm}
          />
          <span className="SingIn-Down-Span">
            Don’t have an account? <a href="#">Sign Up</a>{" "}
          </span>
        </div>
      </form>
    </GeneralPage>
  );
};
