import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import "./Modal.scss";
export const Modal = ({ active, setActive, children, text, status }: any) => {
  let navigate = useNavigate();
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation}>
        {children}
        <h1 className="modal__text">{text}</h1>
        <Button
          className="SingIn-Button-SingIn button primary"
          text="ok"
          onClick={() => {
            status ? navigate("/singin") : navigate("/singup");
          }}
        ></Button>
      </div>
    </div>
  );
};
