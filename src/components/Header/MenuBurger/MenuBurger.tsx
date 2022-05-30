import React from "react";
import "./MenuBurger.css";
import { Button } from "../../Button";
import { Link } from "react-router-dom";
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
            {items.map((items: any, index: number) => (
              <li key={index}>
                <Link className="menuBurger--textStyle" to={items.href}>
                  {items.value}
                </Link>
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
              <Link to="/singin">
                <Button className="button-Login" text="Sing In" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
