import Image from "next/image";
import s from "./contact.module.css";
import dynamic from "next/dynamic";

const HydrationTestNoSSR = dynamic(() => import("@/components/hydrationTest"), {
  ssr: false,
});

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
