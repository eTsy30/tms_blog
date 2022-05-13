import React from "react";
import "./MenuBurger.css";
import { Button } from "../../Button";

type MenuBurgerProps = {
  items: any;
  active: any;
  setActive: any;
  userName: string;
};
export const MenuBurger = ({
  items,
  active,
  setActive,
  userName,
}: MenuBurgerProps) => {
  return (
    <div className={active ? "menuBurger active" : "menuBurger"}>
      <div className="menuBurger--blur">
        <div className="menuBurger--content">
          <div className="menuBurger--User">
            <div className="menuBurger--Logo">
              <span className="menuBurger--Logo--Text textStyle">AG</span>
            </div>
            <span className="menuBurger--NameUser ">{userName}</span>
          </div>

          <ul>
            {items.map((items: any) => (
              <li>
                <a className="menuBurger--textStyle" href={items.href}>
                  {items.value}
                </a>
              </li>
            ))}
          </ul>
          <div className="menuBurger--footer">
            <div className="menuBurger--buttom-theme">
              <Button
                className="menuBurger--image--Sun menuBurger--image"
                icon="Sun"
              />
              <Button
                className="menuBurger--image--Moon menuBurger--image"
                icon="Moon"
                disabled
              />
            </div>
            <div className="menuBurger--button-Login">
              <Button className="button-Login" text="Log Out" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
