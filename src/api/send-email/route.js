import { Resend } from "@resend/resend";

const resend = new Resend("re_Vv2kakJG_AvhSNdanLS9pcJoo6o1EoaHN"); // Ganti dengan API key Anda

export async function POST(request) {
  const formData = await request.json();

  try {
    await resend.emails.send({
      to: formData.email,
      from: "afid123456@gmail.com", // Ganti dengan alamat email pengirim
      subject: "Contact Form Submission",
      html: `
        <h1>Contact Form Submission</h1>
        <p><strong>Full Name:</strong> ${formData.fullName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `,
    });

    return new Response(JSON.stringify({ message: "Email sent successfully!" }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Failed to send email. Please try again." }), { status: 500 });
  }
}
