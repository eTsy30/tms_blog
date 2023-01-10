import React from "react";
import { SingIn } from "../SingIn/SingIn";
import { InputForm } from "../../elementary/Inputs/Input";
type PropsSingUp = {
  className: string;
};
export const SingUp = (className: PropsSingUp) => {
  return (
    <SingIn
      className={className}
      label="Sing Up"
      UpChildren={
        <InputForm
          placeholder="Your name"
          type="text"
          label="Name"
          className="SingUP-Imput-Name"
        />
      }
      DownChildren={
        <InputForm
          placeholder="Confirm password"
          type="text"
          label="Confirm password"
          className="SingUP-Imput-Password"
        />
      }
    />
  );
};
