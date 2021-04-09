import React from "react";
import HeaderSvg from "../../assets/woodTexture/headerSvg.svg";
import { Links } from "../../components/link-component/link.component";

import "./menu.styles.scss";

export const Header = () => {
  const menu = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Game",
      path: "/game",
    },
    {
      name: "Register",
      path: "/register",
    },
  ];
  return (
    <header>
      <nav className="menu">
        {menu.map((item) => (
          <Links link={item.path} name={item.name} key={item.name} />
        ))}
      </nav>

      <img src={HeaderSvg} alt="" />
    </header>
  );
};
