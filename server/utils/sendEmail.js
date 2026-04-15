import transporter from "../config/nodeMailer.js";



const sendEmail = async ({ to, subject, text }) => {

  console.log("USER:", process.env.EMAIL_USER);
  console.log("PASS:", process.env.EMAIL_PASS);

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  });

  console.log("MAIL SENT SUCCESS");
};

export default sendEmail;