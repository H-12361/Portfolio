import express from "express";
import sendEmail from "../utils/sendEmail.js" // ✅ correct import

const router = express.Router();

router.post("/send", async (req, res) => {
    console.log("Received contact form submission:", req.body); // ✅ Add this line for debugging
  try {
    const { name, email, message } = req.body;

    await sendEmail({
      to: process.env.EMAIL_USER,
      subject: "New Contact Message",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.status(200).json({
      success: true,
      message: "Email sent",
    });

  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send email",
    });
  }
});

export default router;