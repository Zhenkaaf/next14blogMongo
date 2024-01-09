import s from "./footer.module.css";

const Footer = () => {
  return (
    <div className={s.container}>
      <div className={s.logo}>Fodorov</div>
      <div className={s.text}>Fodorov creative agency</div>
    </div>
  );
};

export default Footer;
