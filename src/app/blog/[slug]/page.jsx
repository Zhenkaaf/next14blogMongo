import Image from "next/image";
import s from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

/* const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
}; */

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  console.log("slug***", slug);
  /*   const post = await getData(slug); */
  //const post = await getPost(slug);
  const post = await getData(slug);

  return (
    <div className={s.container}>
      {post.img && (
        <div className={s.imgContainer}>
          <Image
            src={post.img}
            alt=""
            fill
            className={s.img}
          />
        </div>
      )}
      <div className={s.textContainer}>
        <h1 className={s.title}>{post.title}</h1>
        <div className={s.detail}>
          {post && (
            <Suspense fallback={<div>Loading..</div>}>
              <PostUser userId={post?.userId} /> {/* with cache: "no-store */}
            </Suspense>
          )}

          <div className={s.detailText}>
            <span className={s.detailTitle}>Published</span>
            <span className={s.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={s.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
