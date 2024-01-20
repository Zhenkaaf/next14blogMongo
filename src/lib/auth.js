import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { connectToDb } from "./connectToDb";
import { User } from "./models";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log(user, account, profile);
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
