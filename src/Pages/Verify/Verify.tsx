import React, { useState } from "react";

import { Input } from "../../components/Inputs";
import { Button } from "../../components/Button/Button";
import { GeneralPage } from "../../components/GeneralPage/GeneralPage";
import "./Verify.scss";
import { Link } from "react-router-dom";
import { getToken } from "../../Redux/getToken/getTokenReduser";
import { useDispatch } from "react-redux";

export const Verify = () => {
  const dispatch = useDispatch();
  const [uid, setUid] = useState("");
  const [token, setToken] = useState("");
  const onUid = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUid(event.target.value);
  };
  const onToken = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToken(event.target.value);
  };

  const submitFormToken = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    event.preventDefault();
    const tokenParam = {
      uid: uid,
      token: token,
    };
    dispatch(getToken(tokenParam));
  };
  const buttonEneblerd = () => {
    return !uid !== !token;
  };

  return (
    <GeneralPage>
      <div className={` SingIn-centre `}>
        <Link to="/" className="SingIn-link-Back">
          Back to home
        </Link>
        <p className="SingIn-Main-Label">Verify</p>

        <div className={`SingIn-Input-Wrapper `}>
          <Input
            placeholder="Your uid"
            type="text"
            title="Uid"
            value={uid}
            onChange={onUid}
          />
          <Input
            placeholder="Token"
            type="text"
            title="token"
            value={token}
            onChange={onToken}
          />

          <Button
            text="Sign In"
            className="SingIn-Button-SingIn button primary"
            onClick={submitFormToken}
            disabled={buttonEneblerd()}
          />
        </div>
      </div>
    </GeneralPage>
  );
};
