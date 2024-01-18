import PostCard from "@/components/postCard/postCard";
import s from "./blog.module.css";
import { getPosts } from "@/lib/data";

/* const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    // cache: "no-cache",
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
}; */

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

const BlogPage = async ({ params, searchParams }) => {
  //const posts = await getData();
  //const posts = await getPosts();
  console.log(params);
  console.log(searchParams); //blog?q=test
  const posts = await getData();

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
