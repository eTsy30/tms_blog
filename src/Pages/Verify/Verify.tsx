import React, { useState } from "react";

import { Input } from "../../components/Inputs";
import { Button } from "../../components/Button/Button";
import { GeneralPage } from "../../components/GeneralPage/GeneralPage";
import "./Verify.scss";
import { Link } from "react-router-dom";
// import { getToken } from "../../Redux/getToken/getTokenReduser";
import { useDispatch } from "react-redux";
import { Modal } from "../../components/Modal/Modal";

export const Verify = () => {
  const [uid, setUid] = useState("");
  const [token, setToken] = useState("");
  const [modalActive, setModaiActive] = useState(false);
  const [text, setText] = useState("");
  const [responseStatus, setResponseStatus] = useState(false);
  const onUid = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUid(event.target.value);
  };
  const onToken = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToken(event.target.value);
  };

  const submitFormToken = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const tokenParam = {
      uid: uid,
      token: token,
    };
    console.log("submitFormToken");

    tokenREqest(tokenParam);
  };
  const buttonEneblerd = () => {
    return !uid !== !token;
  };
  const tokenREqest = async (tokenParam: any) => {
    const response = await fetch(
      "https://studapi.teachmeskills.by/auth/users/activation/",
      {
        method: "POST",
        body: JSON.stringify(tokenParam),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    // const data = await response.json();
    console.log(response.status);

    response.ok
      ? setText("Поздравляю Вы успешно прошли аутификацию")
      : setText("Ошибка HTTP: " + response.status);
    setResponseStatus(response.ok);
    setModaiActive(true);
    return response.ok;
  };

  return (
    <>
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
      <Modal
        active={modalActive}
        setActive={setModaiActive}
        text={text}
        status={responseStatus}
      ></Modal>
    </>
  );
};
