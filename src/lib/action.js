"use server";

import { revalidatePath } from "next/cache";
import { connectToDb } from "./connectToDb";
import { Post, User } from "./models";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";

export const sayHello = async () => {
  console.log("server action");
};

export const addPost = async (formData) => {
  /* const title = formData.get("title");
  const desc = formData.get("desc");
  const slug = formData.get("slug");
  const userId = formData.get("userId"); */

  const { title, desc, slug, userId } = Object.fromEntries(formData);

  console.log("server action");
  console.log(title, desc, slug, userId);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });
    await newPost.save();
    console.log("saved to db");
    /* если мы будем не в режиме разработки, то мы не увидим добавленный пост поэтому revalidate... */
    revalidatePath("/blog");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong" };
  }
};

export const deletePost = async (formData) => {
  const { postId } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(postId);
    console.log("deleted from db");

    revalidatePath("/blog");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong" };
  }
};

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut();
};

export const register = async (formData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);
  if (password !== passwordRepeat) {
    return "Password do not match";
  }
  try {
    connectToDb();
    const user = await User.findOne({ username });
    if (user) {
      return "Username already exists";
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });
    await newUser.save();
    console.log("new user saved to db");
  } catch (err) {
    return { error: "Something went wrong" };
  }
};
