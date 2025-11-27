import express from "express";
import { handleContactForm } from "../controllers/contactController.js";
import { bookNow } from "../controllers/bookNowController.js";

const router = express.Router();

router.post("/contact", handleContactForm);
router.post("/booknow", bookNow);

export default router;
