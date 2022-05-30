import React from "react";

import { Input } from "../../components/Inputs";
import { Button } from "../../components/Button/Button";
import { GeneralPage } from "../../components/GeneralPage/GeneralPage";
import "./SingIn.css";
import { Link } from "react-router-dom";
type PropSingIn = {
  className: string;
};
export const SingIn = ({
  label,
  className,
  UpChildren,
  DownChildren,
}: PropSingIn | any) => {
  return (
    <GeneralPage>
      <div className={` SingIn-centre `}>
        <Link to="/" className="SingIn-link-Back">
          Back to home
        </Link>
        <p className="SingIn-Main-Label">Sing In</p>

        <div className={`SingIn-Input-Wrapper ${className}`}>
          {UpChildren}
          {/* <Input placeholder="Your email" type="email" title="Email"  onChange={}/>
          <Input placeholder="Password" type="password" title="Password" /> */}
          {DownChildren}

          <Link to="/fogotPassword" className="SingIn-Input-link_fogot">
            Forgot password?
          </Link>

          <Button text="Sign In" className="SingIn-Button-SingIn button" />
          <span className="SingIn-Down-Span">
            Don’t have an account? <Link to="/singup">Sign Up</Link>
          </span>
        </div>
      </div>
    </GeneralPage>
  );
};
