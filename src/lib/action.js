"use server";

import { revalidatePath } from "next/cache";
import { connectToDb } from "./connectToDb";
import { Post } from "./models";

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
