"use client";
import { useState } from "react";
import s from "./links.module.css";
import NavLink from "./navLink/navLink";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  const session = true;
  const isAdmin = true;

  return (
    <div className={s.container}>
      <div className={s.links}>
        {links.map((link) => (
          <NavLink
            item={link}
            key={link.title}
          />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={s.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={s.menuButton}
      >
        Menu
      </button>
      {open && (
        <div className={s.mobileLinks}>
          {links.map((link) => (
            <NavLink
              item={link}
              key={link.title}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
