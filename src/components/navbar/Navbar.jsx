import React from "react";
import Links from "./links/Links";
import s from "./navbar.module.css";
import Link from "next/link";
import { auth } from "@/lib/auth";

const Navbar = async () => {
  const session = await auth();
  console.log("logOUT**", session);

  return (
    <div className={s.container}>
      <Link
        href="/"
        className={s.logo}
      >
        Logo
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
