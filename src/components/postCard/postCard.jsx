import Image from "next/image";
import s from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={s.container}>
      <div className={s.top}>
        <div className={s.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/19137937/pexels-photo-19137937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className={s.img}
          />
        </div>
        <span className={s.date}>09.01.2024</span>
      </div>
      <div className={s.bottom}>
        <h1 className={s.title}>Title</h1>
        <p className={s.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo et esse
          tenetur soluta perspiciatis. At enim excepturi earum. Eos consectetur
          corporis unde fugiat enim illo assumenda sapiente? Qui, velit
          laudantium?
        </p>
        <Link
          href="/blog/post"
          className={s.link}
        >
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
