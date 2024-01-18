import Image from "next/image";
import s from "./postCard.module.css";
import Link from "next/link";

const PostCard = async ({ post }) => {
  return (
    <div className={s.container}>
      <div className={s.top}>
        {post.img && (
          <div className={s.imgContainer}>
            <Image
              src={post.img}
              alt=""
              fill
              className={s.img}
            />{" "}
          </div>
        )}

        <span className={s.date}>09.01.2024</span>
      </div>
      <div className={s.bottom}>
        <h1 className={s.title}>{post.title}</h1>
        <p className={s.desc}>{post.body}</p>
        <Link
          href={`/blog/${post.slug}`}
          className={s.link}
        >
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
