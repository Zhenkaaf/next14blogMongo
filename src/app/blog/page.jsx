import PostCard from "@/components/postCard/postCard";
import s from "./blog.module.css";

const BlogPage = ({ params, searchParams }) => {
  console.log(params);
  console.log(searchParams); //blog?q=test

  return (
    <div className={s.container}>
      <div className={s.post}>
        <PostCard />
      </div>
      <div className={s.post}>
        <PostCard />
      </div>
      <div className={s.post}>
        <PostCard />
      </div>
      <div className={s.post}>
        <PostCard />
      </div>
    </div>
  );
};

export default BlogPage;
