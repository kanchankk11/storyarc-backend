import { sendContactEmail } from "../utils/mailer.js";

export const handleContactForm = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    await sendContactEmail({ name, email, phone, message });

    res.json({ success: true, message: "Email sent successfully" });

  } catch (error) {
    console.error("Contact Error:", error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};
