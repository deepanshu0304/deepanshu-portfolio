"use client";

import React, {useRef} from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { validateString, getErrorMessage } from "@/lib/utils";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";


export default function Contact() {
  const { ref } = useSectionInView("Contact");
  // const formRef = useRef();


  const handleSubmit = (e:any) => {
    
  }

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          deepanshu1800304@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        // ref={formRef}
        className="mt-10 flex flex-col dark:text-black"
        // onSubmit={handleSubmit}
        action={async (formData) => {
          const senderEmail = formData.get("senderEmail");
          const message = formData.get("message");
          let errorMsg = null;

          if (!validateString(senderEmail, 500)) {
            
            errorMsg = "Invalid sender email"
            
          }

          if (!validateString(message, 5000)) {
            
              errorMsg = "Invalid message"
          }
          // const { data, error } = await sendEmail(formData);
          // console.log(data);
          const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
          const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
          const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!

          try {
            const data = await emailjs.send(serviceId, templateId, {
              from_name: "form.name",
              to_name: "Deepanshu",
              from_email: senderEmail,
              to_email: "deepanshu180304@gmail.com",
              message: message,
            },
              publicKey
            );
            
          } catch (er) {
            
            errorMsg = getErrorMessage(er);
            
          }

          if (errorMsg) {
            toast.error(errorMsg);
            return; 
          }

          toast.success("Email sent successfully!");
          // formData.set("senderEmail", "")
          // formData.forEach
          // form.
          
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
