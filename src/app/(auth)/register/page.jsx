import { register } from "@/lib/action";
import React from "react";
import s from "./register.module.css";

const RegisterPage = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <form
          className={s.form}
          action={register}
        >
          <input
            type="text"
            placeholder="username"
            name="username"
          />
          <input
            type="email"
            placeholder="email"
            name="email"
          />
          <input
            type="password"
            placeholder="password"
            name="password"
          />
          <input
            type="password"
            placeholder="password again"
            name="passwordRepeat"
          />
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
