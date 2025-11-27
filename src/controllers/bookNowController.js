import crypto from "crypto";
import { sendBookingEmail } from "../utils/mailer.js";

export const bookNow = async (req, res) => {
  try {
    const data = req.body;

    // Generate Order ID STRC-XXXXX
    //const date = new Date().toISOString().slice(0,10).replace(/-/g,""); 
    //const random = Math.floor(10000 + Math.random() * 90000); // 5 digit random
    const token = crypto.randomUUID().slice(0, 8).toUpperCase();
    const orderId = `STRC${token}`;

    // Send Email
    await sendBookingEmail(data, orderId);

    return res.json({
      success: true,
      orderId,
      message: "Booking successful. Email sent."
    });
  } catch (error) {
    console.error("Book Now Error:", error);
    return res.status(500).json({
      success: false,
      message: "Booking failed"
    });
  }
};
