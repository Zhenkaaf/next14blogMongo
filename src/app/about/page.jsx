import Image from "next/image";
import s from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={s.container}>
      <div className={s.textContainer}>
        <h2 className={s.subtitle}>About Agensy</h2>
        <h1 className={s.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={s.desc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
          mollitia vitae voluptatum quidem dicta? Id dicta ullam et consectetur.
          Minima, atque? Illum vitae illo harum itaque delectus fugit, officiis
          nihil!
        </p>
        <div className={s.boxes}>
          <div className={s.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={s.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={s.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={s.imgContainer}>
        <Image
          src="/about.png"
          alt="About image"
          fill
          className={s.img}
        />
      </div>
    </div>
  );
};

export default AboutPage;
