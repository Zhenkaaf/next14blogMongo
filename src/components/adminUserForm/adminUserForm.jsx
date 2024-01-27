"use client";
import s from "./adminUserForm.module.css";
import { addUser } from "@/lib/action";
import { useFormState } from "react-dom";

const AdminUserForm = ({ userId }) => {
  const [state, formAction] = useFormState(addUser, undefined);
  return (
    <form
      action={formAction}
      className={s.container}
    >
      <h1>Add new Post</h1>

      <input
        type="text"
        name="username"
        placeholder="username"
      />

      <input
        type="text"
        name="email"
        placeholder="email"
      />
      <input
        type="password"
        name="password"
        placeholder="password"
      />
      <select name="isAdmin">
        <option value="false">Is Admin?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      <button>Add</button>
      {state && state.error}
    </form>
  );
};

export default AdminUserForm;
