import React, { useState } from "react";

import { Input } from "../../components/Inputs";
import { Button } from "../../components/Button/Button";
import { GeneralPage } from "../../components/GeneralPage/GeneralPage";
import "./SingIn.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getJwt } from "../../Redux/getToken/getTokenReduser";
import { getUserInfo } from "../../Redux/userInfo/userInfoReduser";
type PropSingIn = {
  className: string;
};
export const SingIn = ({
  label,
  className,
  UpChildren,
  DownChildren,
}: PropSingIn | any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const dispatch = useDispatch();

  const jwt = useSelector((state: any) => state.tokenReduser.value);

  const emailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const passworldlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const submitSingIn = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const dataForJwt = {
      email: email,
      password: password,
    };

    dispatch(getJwt(dataForJwt));
    dispatch(getUserInfo(jwt));

    // navigate("/");
  };

  return (
    <GeneralPage>
      <div className={` SingIn-centre `}>
        <Link to="/" className="SingIn-link-Back">
          Back to home
        </Link>
        <p className="SingIn-Main-Label">Sing In</p>

        <div className={`SingIn-Input-Wrapper ${className}`}>
          {UpChildren}

          <Input
            placeholder="Your email"
            type="email"
            title="Email"
            onChange={emailChange}
            value={email}
          />
          <Input
            placeholder="Password"
            type="password"
            title="Password"
            onChange={passworldlChange}
            value={password}
          />
          {DownChildren}

          <Link to="/fogotPassword" className="SingIn-Input-link_fogot">
            Forgot password?
          </Link>

          <Button
            text="Sign In"
            className="SingIn-Button-SingIn button"
            onClick={submitSingIn}
          />
          <span className="SingIn-Down-Span">
            Don’t have an account? <Link to="/singup">Sign Up</Link>
          </span>
        </div>
      </div>
    </GeneralPage>
  );
};
