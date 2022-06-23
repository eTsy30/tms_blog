import React from "react";
import "./MenuBurger.css";
import { Button } from "../../Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "Redux/Theme/useTheme";
import { ReactComponent as Moon } from "../../image/Moon.svg";
import { ReactComponent as Sun } from "../../image/Sun.svg";
import { IsAuth } from "Redux/Auth/Auth";
import { getUserInfo } from "Redux/userInfo/userInfoReduser";
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
  const dispatch = useDispatch();
  let user = useSelector((state: any) => state.userInfo.user);
  const { theme, toggleTheme } = useTheme();

  const togleLight = () => {
    theme === "light" ? toggleTheme("dark") : toggleTheme("light");
  };

  const togleDark = () => {
    theme === "light" ? toggleTheme("dark") : toggleTheme("light");
  };

  const logout = () => {
    dispatch(IsAuth(false));
    dispatch(getUserInfo(null));
    user = "";
    localStorage.clear();
  };
  return (
    <div className={active ? "menuBurger active" : "menuBurger"}>
      <div className="menuBurger--blur">
        <div className="menuBurger--content">
          <>
            {user?.username ? (
              <div className="menuBurger--User">
                <div className="menuBurger--Logo">
                  <span className="menuBurger--Logo--Text textStyle">AG</span>
                </div>
                <span className="menuBurger--NameUser ">{user.username}</span>
              </div>
            ) : (
              <></>
            )}
          </>
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
                className="menuBurger--image"
                icon={<Sun className={`${theme}--IconTheme`} />}
                onClick={togleLight}
                disabled={theme === "light"}
              />
              <Button
                className="menuBurger--image--Moon menuBurger--image"
                icon={<Moon className={`${theme}--IconThemeMon`} />}
                onClick={togleDark}
                disabled={theme === "dark"}
              />
            </div>
            <div className="menuBurger--button-Login">
              {user?.username ? (
                <Link to="/singin">
                  <Button
                    className="button-Login"
                    text="Log Out"
                    onClick={logout}
                  />
                </Link>
              ) : (
                <>
                  <Link to="/singin">
                    <Button className="button-Login" text="Sing In" />
                  </Link>
                  <Link to="/new-password">
                    <Button className="button-Login" text="New Password" />
                  </Link>{" "}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
