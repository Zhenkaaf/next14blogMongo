import Image from "next/image";
import s from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  console.log("slug***", slug);
  const post = await getData(slug);

  return (
    <div className={s.container}>
      <div className={s.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/19137937/pexels-photo-19137937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          className={s.img}
        />
      </div>
      <div className={s.textContainer}>
        <h1 className={s.title}>{post.title}</h1>
        <div className={s.detail}>
          <Image
            src="https://images.pexels.com/photos/19137937/pexels-photo-19137937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={50}
            height={50}
            className={s.avatar}
          />

          <Suspense fallback={<div>Loading..</div>}>
            <PostUser userId={post.userId} /> {/* with cache: "no-store */}
          </Suspense>

          <div className={s.detailText}>
            <span className={s.detailTitle}>Published</span>
            <span className={s.detailValue}>09.012024</span>
          </div>
        </div>
        <div className={s.content}>{post.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
