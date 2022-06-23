import React, { useEffect, useState } from "react";

import { Input } from "../../components/Inputs";
import { Button } from "../../components/Button/Button";

import "./SingIn.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getJwt } from "../../Redux/getToken/getTokenReduser";
import { getUserInfo } from "../../Redux/userInfo/userInfoReduser";
import { GeneralPage } from "Pages/GeneralPage/GeneralPage";
import { PageUPHeader } from "components/PageUPHeader/PageUPHeader";
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
  const [dis, setDis] = useState(false);

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
    const dataForJwt = { email: email, password: password };
    dispatch(await getJwt(dataForJwt));
    setDis(true);
  };
  //===========================
  useEffect(() => {
    !jwt ? dispatch(getUserInfo(jwt)) : navigate("/");
  }, [jwt]);

  //=========================
  return (
    <GeneralPage>
      <div className={` SingIn-centre `}>
        <PageUPHeader label="Back to home" text="Sing In" />

        <div className={`SingIn-Input-Wrapper ${className}`}>
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

          <Link to="/fogotPassword" className="SingIn-Input-link_fogot">
            Forgot password?
          </Link>

          <Button
            text="Sign In"
            className="SingIn-Button-SingIn button primary"
            onClick={submitSingIn}
            disabled={dis}
          />
          <span className="SingIn-Down-Span">
            Don’t have an account? <Link to="/singup">Sign Up</Link>
          </span>
        </div>
      </div>
    </GeneralPage>
  );
};
