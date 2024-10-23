"use server";

import React from "react";
import { Resend } from "resend";  
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import emailjs from "@emailjs/browser";

// const resend = new Resend(process.env.RESEND_API_KEY);
const resend = process.env.VITE_APP_EMAILJS_SERVICE_ID!;


export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  // try {
  //   data = await resend.emails.send({
  //     from: "Contact Form <onboarding@resend.dev>",
  //     to: "deepanshu180304@gmail.com",
  //     subject: "Message from contact form",
  //     reply_to: senderEmail,
  //     react: React.createElement(ContactFormEmail, {
  //       message: message,
  //       senderEmail: senderEmail,
  //     }),
  //   });
  // } catch (error: unknown) {
  //   return {
  //     error: getErrorMessage(error),
  //   };
  // }

  try {
    data = await emailjs.send(
      resend,
      process.env.VITE_APP_EMAILJS_TEMPLATE_ID!,
      {
        from_name: "ajsdlb",
        to_name: "Deepanshu",
        from_email: senderEmail,
        to_email: "deepanshu180304@gmail.com",
        message: message,
      },
      process.env.VITE_APP_EMAILJS_PUBLIC_KEY
    );
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

// emailjs
//   .send(
//     resend,
//     process.env.VITE_APP_EMAILJS_TEMPLATE_ID!,
//     {
//       from_name: "",
//       to_name: "Deepanshu",
//       from_email: senderEmail,
//       to_email: "deepanshu180304@gmail.com",
//       message: message,
//     },
//     process.env.VITE_APP_EMAILJS_PUBLIC_KEY
//   )
//   .then(
//     (d) => {
//       // setLoading(false);
//       // alert("Thank you. I will get back to you as soon as possible.");
//       data = d;

//       // setForm({
//       //   name: "",
//       //   email: "",
//       //   message: "",
//       // });
//     },
//     (error) => {
//       return {
//         error: getErrorMessage(error),
//       };
//     }
//   );

  return {
    data,
  };
};
