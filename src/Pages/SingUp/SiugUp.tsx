import React from "react";
import { SingIn } from "../SingIn/SingIn";
import { Input } from "../../components/Inputs";
import { GeneralPage } from "../../components/GeneralPage/GeneralPage";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import "./SingUp.css";
type PropsSingUp = {
  className?: string;
};
export const SingUp = (className: PropsSingUp) => {
  return (
    <GeneralPage>
      <div className={` SingUp-centre `}>
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
          />
          <Input placeholder="Your email" type="email" title="Email" />
          <Input placeholder="Password" type="password" title="Password" />
          <Input
            placeholder="Your name"
            type="text"
            title="Name"
            className="SingUp-Imput-Name"
          />
          <a href="#" className="SingUp-Input-link_fogot">
            Forgot password?
          </a>

          <Button text="Sign In" className="SingUp-Button-SingIn button" />
          <span className="SingIn-Down-Span">
            Don’t have an account? <a href="#">Sign Up</a>{" "}
          </span>
        </div>
      </div>
    </GeneralPage>
  );
};
