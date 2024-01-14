import Image from "next/image";
import s from "./contact.module.css";
import dynamic from "next/dynamic";

const HydrationTestNoSSR = dynamic(() => import("@/components/hydrationTest"), {
  ssr: false,
});
/* dynamic с опцией ssr: false в Next.js, это означает, 
что компонент будет загружен только на стороне клиента 
и не будет участвовать в серверном рендеринге (SSR). */

const ContactPage = () => {
  return (
    <div className={s.container}>
      <div className={s.imgContainer}>
        <Image
          src="/contact.png"
          alt=""
          fill
          className={s.img}
        />
      </div>
      <div className={s.formContainer}>
        <HydrationTestNoSSR />
        <form
          action=""
          className={s.form}
        >
          <input
            type="text"
            placeholder="Name and Surname"
          />
          <input
            type="text"
            placeholder="Email Address"
          />
          <input
            type="text"
            placeholder="Phone Number (optional)"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button
          /*  onClick={(e) => {
              e.preventDefault();
              console.log("click work");
            }} */
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
