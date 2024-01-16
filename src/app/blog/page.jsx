import PostCard from "@/components/postCard/postCard";
import s from "./blog.module.css";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    /*  cache: "no-cache", */
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

const BlogPage = async ({ params, searchParams }) => {
  const posts = await getData();

  console.log(params);
  console.log(searchParams); //blog?q=test

  return (
    <div className={s.container}>
      {posts.map((post) => (
        <div
          className={s.post}
          key={post.id}
        >
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
