"use client";
import { useState } from "react";
import s from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";
import { handleLogout } from "@/lib/action";

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

const Links = ({ session }) => {
  const [open, setOpen] = useState(false);

  //const session = await auth();
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
            {session.user?.isAdmin && (
              <NavLink item={{ title: "Admin", path: "/admin" }} />
            )}

            <form action={handleLogout}>
              <button className={s.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>

      <Image
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
        className={s.menuButton}
      />
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
