import express from "express";
import sendEmail from "../utils/sendEmail.js";

const router = express.Router();

router.post("/send", async (req, res) => {
  console.log("Received contact form submission:", req.body);
  
  try {
    const { name, email, message } = req.body;

    // Design Template
    const htmlContent = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
        <div style="background-color: #1a1a1a; color: #ffffff; padding: 20px; text-align: center;">
          <h2 style="margin: 0; font-size: 24px; letter-spacing: 1px;">New Portfolio Inquiry</h2>
        </div>
        
        <div style="padding: 25px; background-color: #ffffff; color: #333;">
          <p style="font-size: 16px; margin-bottom: 20px;">Hi Harshit, you have a new message from your portfolio site:</p>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; border-left: 4px solid #007bff;">
            <p style="margin: 5px 0;"><strong>👤 Name:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>📧 Email:</strong> <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a></p>
          </div>

          <div style="margin-top: 25px;">
            <p style="font-weight: bold; color: #1a1a1a; margin-bottom: 10px;">💬 Message Content:</p>
            <p style="line-height: 1.6; color: #555; background: #fffaf0; padding: 15px; border: 1px dashed #ffd700; border-radius: 8px;">
              ${message}
            </p>
          </div>
        </div>

        <div style="background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; color: #777;">
          <p style="margin: 0;">Sent automatically from your MERN Backend</p>
          <p style="margin: 5px 0 0;">&copy; 2026 Harshit Tiwari Portfolio</p>
        </div>
      </div>
    `;

    await sendEmail({
      to: process.env.EMAIL_USER,
      subject: `🚀 Portfolio Lead: ${name}`,
      // Ab hum 'text' ki jagah 'html' pass karenge
      html: htmlContent, 
    });

    res.status(200).json({
      success: true,
      message: "Styled Email sent successfully",
    });

  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send styled email",
    });
  }
});

export default router;