import Image from "next/image";
import s from "./singlePost.module.css";

const SinglePostPage = ({ params }) => {
  console.log(params);
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
        <h1 className={s.title}>Title</h1>
        <div className={s.detail}>
          <Image
            src="https://images.pexels.com/photos/19137937/pexels-photo-19137937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={50}
            height={50}
            className={s.avatar}
          />
          <div className={s.detailText}>
            <span className={s.detailTitle}>Author</span>
            <span className={s.detailValue}>Terry Hohoho</span>
          </div>
          <div className={s.detailText}>
            <span className={s.detailTitle}>Published</span>
            <span className={s.detailValue}>09.012024</span>
          </div>
        </div>
        <div className={s.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          nostrum quam ipsa quia deserunt eveniet consequuntur neque veritatis
          quo quae, iure perspiciatis harum, eos facilis natus dolores id
          inventore modi!
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
