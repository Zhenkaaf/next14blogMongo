import Image from "next/image";
import s from "./about.module.css";

const AboutPage = () => {
  return (
    <div>
      <div className={s.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
        />
      </div>
    </div>
  );
};

export default AboutPage;
