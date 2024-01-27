import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from "./connectToDb";
import { User } from "./models";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";

const login = async (credentials) => {
  console.log("loginFunctionFromAUTH");
  try {
    connectToDb();
    const user = await User.findOne({ username: credentials.username });
    if (!user) {
      throw new Error("Wrong credentials or No user found");
    }
    const isPaswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );
    if (!isPaswordCorrect) {
      throw new Error("Wrong password");
    }
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("failed to login");
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          console.log(err);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("signInWOOOOOOOOORK");

      if (account.provider === "github") {
        connectToDb();
        try {
          const user = await User.findOne({ email: profile.email });
          if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              img: profile.avatar_url,
            });
            await newUser.save();
          }
        } catch (err) {
          console.log(err);
          return false;
        }
      }
      return true;
    },
    ...authConfig.callbacks,
  },
});

/* аутентификация через GitHub с использованием NextAuth. Вот как это работает:

Настройка провайдера:

Определен провайдер GitHub с использованием идентификатора (clientId) и секретного ключа (clientSecret), которые вы должны получить от GitHub при регистрации вашего приложения.
Callback при входе:

Когда пользователь успешно входит через GitHub, вызывается callback-функция signIn.
Эта функция получает объект user, account, и profile, представляющие информацию о вошедшем пользователе, аккаунте и профиле GitHub соответственно.
Обработка входа:

Функция проверяет, является ли провайдер "github".
Если пользователь входит через GitHub, выполняется подключение к базе данных и поиск пользователя по электронной почте в профиле GitHub.
Создание нового пользователя:

Если пользователь с таким адресом электронной почты не найден, создается новый пользователь в базе данных с использованием данных из профиля GitHub (логин, адрес электронной почты, аватар и т. д.).
Обработка ошибок:

Если в процессе выполнения чего-либо возникает ошибка, она логируется, и вход пользователя завершается неудачно.
Возвращаемое значение:

Функция signIn возвращает true, если вход прошел успешно, и false, если произошла ошибка.
Таким образом, эта часть кода обеспечивает интеграцию аутентификации через GitHub с сохранением информации о пользователях в базе данных. */

/* Когда пользователь аутентифицируется через NextAuth.js, его данные сохраняются в сессии. В вашем случае, сессия содержит информацию о пользователе и время истечения сессии. NextAuth.js использует серверные сессии (в отличие от клиентских, таких как Local Storage).

Когда пользователь успешно аутентифицируется, NextAuth.js создает токен сессии и отправляет его в cookie браузера. Этот токен также хранится в серверной сессии и ассоциируется с пользовательскими данными. Когда пользователь делает запрос на сервер, этот токен передается с запросом, и NextAuth.js использует его для восстановления данных о пользователе из серверной сессии.

Если вы обновляете страницу, браузер автоматически отправляет куки, включая токен сессии, вместе с запросом. Сервер NextAuth.js обрабатывает этот токен и восстанавливает данные о пользователе из серверной сессии. Это позволяет сохранить аутентификацию пользователя даже после обновления страницы.

Ключевой момент заключается в том, что данные о пользователе хранятся на сервере и ассоциируются с уникальным токеном сессии, который передается между сервером и клиентом через куки. */
