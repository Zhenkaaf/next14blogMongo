/* const users = [
  { id: 1, username: "Lena" },
  { id: 2, username: "Kris" },
];

const posts = [
  { id: 1, title: "post1", body: "aeufhpahfpos", userId: 1 },
  { id: 2, title: "post2", body: "aeufhpahfpos", userId: 1 },
  { id: 3, title: "post3", body: "aeufhpahfpos", userId: 2 },
  { id: 4, title: "post4", body: "aeufhpahfpos", userId: 2 },
]; */

import { connectToDb } from "./connectToDb";
import { Post, User } from "./models";

export const getPosts = async () => {
  //return posts;
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts");
  }
};

export const getPost = async (slug) => {
  //return posts.find((post) => post.id === parseInt(id));
  try {
    connectToDb();
    const post = await Post.findOne({ slug: slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post");
  }
};

export const getUser = async (id) => {
  //return users.find((user) => user.id === parseInt(id));
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users");
  }
};
