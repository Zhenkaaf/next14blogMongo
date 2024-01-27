import { getUsers } from "@/lib/data";
import s from "./adminUsers.module.css";
import Image from "next/image";
import { deleteUser } from "@/lib/action";

const AdminUsers = async () => {
  const users = await getUsers();
  console.log(users);

  return (
    <div className={s.container}>
      <h1>Users</h1>
      {users.map((user) => (
        <div
          className={s.post}
          key={user.id}
        >
          <div className={s.detail}>
            <Image
              src={user.img || "/noAvatar.png"}
              alt=""
              width={50}
              height={50}
            />
            <span className={s.postTitle}>{user.username}</span>
          </div>

          <form action={deleteUser}>
            <input
              type="hidden"
              name="postId"
              value={user.id}
            />
            <button className={s.postButton}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;
