"use client";
import Link from "next/link";
import s from "./navLink.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`${s.container} ${pathName === item.path && s.active}`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
