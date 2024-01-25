import LoginForm from "@/components/loginForm/loginForm";
import { handleGithubLogin } from "@/lib/action";
import { auth } from "@/lib/auth";
import s from "./login.module.css";

const LoginPage = async () => {
  const session = await auth();
  console.log("LoginPagesession********", session);

  //auth?.user && router.push('/'); bad way of redirect

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <form action={handleGithubLogin}>
          <button className={s.github}>Login with Github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
