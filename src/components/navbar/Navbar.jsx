import React from "react";
import Links from "./links/Links";
import s from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={s.container}>
      <div className={s.logo}>Logo</div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
