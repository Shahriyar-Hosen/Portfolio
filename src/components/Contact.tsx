import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { ChangeEvent, memo, useRef, useState } from "react";

import { CommonText, Title } from "@/common";
import { SectionWrapper } from "@/hoc";
import { slideIn } from "@/utils/motion";
import { EarthCanvas } from "./canvas";
import { InputBox } from "./section/Contact";

const Contact = memo(() => {
  const formRef: React.RefObject<any> = useRef<any>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<any>) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: ChangeEvent<any>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Shahriyar Hosen",
          from_email: form.email,
          to_email: import.meta.env.VITE_APP_TO_EMAIL,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <CommonText>Get in touch</CommonText>
        <Title>Contact.</Title>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <InputBox
            name="name"
            placeholder="What's your good name?"
            value={form.name}
            handleChange={handleChange}
          />
          <InputBox
            name="email"
            placeholder="What's your web address?"
            value={form.email}
            handleChange={handleChange}
          />
          <InputBox
            name="message"
            placeholder="What you want to say?"
            value={form.message}
            handleChange={handleChange}
            textarea
          />

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
});

export default SectionWrapper(Contact, "contact");
