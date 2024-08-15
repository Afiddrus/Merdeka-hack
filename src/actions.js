"use server";
import { Resend } from "resend";
import EmailTemplate from "./app/components/EmailTemplate";
import { render } from "@react-email/render";

export const sendEmail = async (prevState, formData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  try {
    const resend = new Resend("re_Vv2kakJG_AvhSNdanLS9pcJoo6o1EoaHN"); // Ganti dengan kunci API Resend Anda
    await resend.emails.send({
      from: "cholidafiddrusw <cholidafiddrusw@gmail.com>", // Ganti dengan email pengirim yang valid
      to: email,
      subject: "Form Submission",
      html: render(EmailTemplate({ name, email, message }))
    });
    return { error: null, success: true };
  } catch (error) {
    console.log(error);
    return { error: error.message, success: false };
  }
};
