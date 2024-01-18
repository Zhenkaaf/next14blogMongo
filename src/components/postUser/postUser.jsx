import { getUser } from "@/lib/data";
import s from "./postUser.module.css";
import Image from "next/image";

/* const getData = async (userId) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
}; */

const PostUser = async ({ userId }) => {
  //const user = await getData(userId);
  const user = await getUser(userId);

  return (
    <div className={s.container}>
      <Image
        src={user.img ? user.img : "/noavatar.png"}
        alt=""
        width={50}
        height={50}
        className={s.avatar}
      />

      <div className={s.texts}>
        <span className={s.title}>Author</span>
        <span className={s.username}>{user?.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
