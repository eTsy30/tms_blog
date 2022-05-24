import React from "react";

import { Input } from "../../components/Inputs";
import { Button } from "../../components/Button/Button";
import { GeneralPage } from "../../components/GeneralPage/GeneralPage";
import "./ResetPassword.css";
import { Link } from "react-router-dom";
type PropResetPassword = {
  className: string;
};
export const ResetPassword = ({
  label,
  className,
  UpChildren,
  DownChildren,
}: PropResetPassword | any) => {
  return (
    <GeneralPage>
      <div className={` ResetPassword-centre `}>
        <Link to="/" className="ResetPassword-link-Back">
          Back to home
        </Link>
        <p className="ResetPassword-Main-Label">Reset Password</p>

        <div className={`ResetPassword-Input-Wrapper ${className}`}>
          {/* <Input placeholder="Your email" type="email" title="Email" /> */}
          <Link to="/" className="SingIn-link-Back">
            <Button text="Go to home" className="ResetPassword-Button button" />
          </Link>
        </div>
      </div>
    </GeneralPage>
  );
};
