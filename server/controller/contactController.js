import express from "express";
import sendEmail from "../utils/sendEmail.js"; // ✅ ADD THIS

const router = express.Router();

router.post("/send", async (req, res) => {
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
    console.log("Email sending error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send email",
    });
  }
});

export default router;